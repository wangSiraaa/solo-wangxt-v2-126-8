// 覆盖规划的球面计算：
//
// 唯一判定依据是【球心角】——目标与视场中心的 haversine 角距 ≤ 视场角半径
// 即落入该视场（angularSeparation 已把赤经差归算到 (-180,180]，
// 跨 0h 赤经、近极区都取最短弧，不做任何像素/投影判断）。
//
// 因此：
//  - 覆盖结果只取决于视场配置（中心/半径）与目标的 J2000 坐标；
//  - 与投影方式、画布大小、缩放比例完全无关；
//  - 也不是把两张投影图片拼接后的像素覆盖。
//
// 总览投影所需的视角（切点 + 一个能包住所有视场的最小球冠角）同样由
// 球面几何给出，仅用于绘图，不参与覆盖判定。

import { angularSeparation, lonLatToVec, vecToLonLat } from './geoMath';
import type { FovConfig } from '../types';

/** 参与覆盖统计的内置目标（恒星为静态 J2000；日月行星为所选时刻的动态位置） */
export interface CoverageTarget {
  id: string;
  name: string;
  designation: string;
  ra: number; // 度 [0,360)
  dec: number; // 度 [-90,90]
  mag: number;
  kind: 'star' | 'sun' | 'moon' | 'planet';
}

/** 规划中的一个视场项（由已保存视场解析而来，附展示颜色） */
export interface PlannedFov {
  uuid: string;
  name: string;
  fov: FovConfig;
  color: string;
}

export interface CoveringRef {
  fov: PlannedFov;
  /** 目标与该视场中心的真实球面角距（度） */
  separationDeg: number;
}

export interface TargetCoverage {
  target: CoverageTarget;
  /** 命中的视场，按角距升序；空数组=未覆盖；长度 ≥2=重复覆盖 */
  coveredBy: CoveringRef[];
}

export interface FovPairOverlap {
  a: PlannedFov;
  b: PlannedFov;
  centerSepDeg: number;
  /** 两球面小圆是否有交集（含一个完全包含另一个） */
  overlaps: boolean;
  /** 一个是否完全包含另一个 */
  contains: boolean;
  /** 沿两中心连线的重复覆盖深度（度），0 表示无重叠 */
  overlapDeg: number;
}

export interface CoverageResult {
  perTarget: TargetCoverage[];
  uncovered: TargetCoverage[];
  duplicated: TargetCoverage[];
  pairOverlaps: FovPairOverlap[];
  totalTargets: number;
  coveredOnce: number;
  coveredMulti: number;
}

/** 规划视场的稳定配色（按规划内顺序循环） */
export const PLAN_COLORS = [
  '#57e389',
  '#57a6ff',
  '#ffd54a',
  '#ff9a5a',
  '#c08cff',
  '#5ae0d6',
  '#ff7ab0',
  '#b6e36b'
];

/**
 * 核心覆盖统计：逐目标、逐视场做球面角距比较。
 * 不接收任何投影/画布参数——缩放画布不可能改变结果。
 */
export function computeCoverage(targets: CoverageTarget[], fovs: PlannedFov[]): CoverageResult {
  const perTarget: TargetCoverage[] = targets.map((target) => {
    const coveredBy: CoveringRef[] = [];
    for (const f of fovs) {
      const sep = angularSeparation(f.fov.centerRa, f.fov.centerDec, target.ra, target.dec);
      // 浮点容差 1e-9：恰在边界上的目标算覆盖
      if (sep <= f.fov.radiusDeg + 1e-9) {
        coveredBy.push({ fov: f, separationDeg: sep });
      }
    }
    coveredBy.sort((u, v) => u.separationDeg - v.separationDeg);
    return { target, coveredBy };
  });

  const uncovered = perTarget.filter((x) => x.coveredBy.length === 0);
  const duplicated = perTarget.filter((x) => x.coveredBy.length >= 2);
  const coveredOnce = perTarget.filter((x) => x.coveredBy.length === 1).length;

  // 两两视场的球面小圆关系
  const pairOverlaps: FovPairOverlap[] = [];
  for (let i = 0; i < fovs.length; i++) {
    for (let j = i + 1; j < fovs.length; j++) {
      const a = fovs[i];
      const b = fovs[j];
      const d = angularSeparation(a.fov.centerRa, a.fov.centerDec, b.fov.centerRa, b.fov.centerDec);
      const rA = a.fov.radiusDeg;
      const rB = b.fov.radiusDeg;
      const overlaps = d <= rA + rB + 1e-9;
      const contains = d + Math.min(rA, rB) <= Math.max(rA, rB) + 1e-9;
      const overlapDeg = overlaps ? Math.min(Math.max(0, rA + rB - d), 2 * Math.min(rA, rB)) : 0;
      pairOverlaps.push({ a, b, centerSepDeg: d, overlaps, contains, overlapDeg });
    }
  }

  return {
    perTarget,
    uncovered,
    duplicated,
    pairOverlaps,
    totalTargets: targets.length,
    coveredOnce,
    coveredMulti: duplicated.length
  };
}

export interface OverviewFrame {
  centerRa: number;
  centerDec: number;
  /** 能包住全部规划视场的最小球冠角（度），作为投影球面裁剪角 */
  clipRadiusDeg: number;
}

/**
 * 总览视角：取各视场中心的【球面】矢量平均（面积加权）为切点，
 * 再用球面角距求包住所有视场圆盘的最小球冠角。
 * 跨 0h 的视场中心在这里同样按 3D 矢量平均，不会被 359°/1° 拉到 180° 外。
 */
export function coverageOverviewFrame(fovs: PlannedFov[]): OverviewFrame | null {
  if (fovs.length === 0) return null;
  let sx = 0;
  let sy = 0;
  let sz = 0;
  for (const f of fovs) {
    const [x, y, z] = lonLatToVec(f.fov.centerRa, f.fov.centerDec);
    // 球冠面积权重 1-cos(r)
    const w = 1 - Math.cos((f.fov.radiusDeg * Math.PI) / 180);
    sx += x * w;
    sy += y * w;
    sz += z * w;
  }
  let [centerRa, centerDec] = vecToLonLat(sx, sy, sz);
  if (!Number.isFinite(centerRa) || !Number.isFinite(centerDec)) {
    centerRa = fovs[0].fov.centerRa;
    centerDec = fovs[0].fov.centerDec;
  }

  let clip = 0;
  for (const f of fovs) {
    const d = angularSeparation(centerRa, centerDec, f.fov.centerRa, f.fov.centerDec);
    clip = Math.max(clip, d + f.fov.radiusDeg);
  }
  // 留 0.5° 边距；d3 clipAngle 需 <180°（超出说明规划几乎覆盖全天，夹到 179°）
  clip = Math.min(179, clip + 0.5);
  return { centerRa, centerDec, clipRadiusDeg: clip };
}
