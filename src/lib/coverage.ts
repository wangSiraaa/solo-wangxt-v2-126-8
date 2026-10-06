// 大图覆盖规划的球面计算层。
//
// 铁律：覆盖判定只在【天球球面】上进行——
//   目标是否落入视场 = 目标与视场中心的 haversine 角距 ≤ 视场角半径；
//   重复覆盖 = 同一目标落入两个或更多视场。
// 与任何投影（立体/等距方位/Equal Earth）、画布尺寸、像素比例尺完全无关，
// 因此缩放任何一个投影画布都不会改变覆盖结果。
// 本模块不 import d3-geo，也不读 DOM / 像素。
//
// 赤经跨零点由 angularSeparation 内部把经度差归算到 (-180,180] 保证正确，
// 不做任何 RA 区间式（raMin ≤ ra ≤ raMax）判断。

import { STAR_CATALOG, type CatalogStar } from '../data/catalog';
import { angularSeparation } from './geoMath';
import type { CoveragePlan, CoveragePlanItem, FovConfig } from '../types';

/** 覆盖检查针对的内置目标 = 内置星表全部恒星（J2000，静态） */
export type CoverageTarget = CatalogStar;

export const COVERAGE_TARGETS: CoverageTarget[] = STAR_CATALOG;

/** 单个目标在某个视场中的球面关系 */
export interface TargetCover {
  target: CoverageTarget;
  /** 落入的规划项（可能多个 = 重复覆盖；空 = 未覆盖） */
  items: CoveragePlanItem[];
  /** 与每个落入视场中心的球面角距（度），与 items 同序 */
  separations: number[];
}

export interface ItemStat {
  item: CoveragePlanItem;
  /** 该视场覆盖的内置目标数（球面角距判定） */
  count: number;
}

export interface CoverageResult {
  /** 逐目标的覆盖情况（星表原始顺序） */
  covers: TargetCover[];
  /** 未被任何规划视场覆盖的目标 */
  uncovered: TargetCover[];
  /** 被两个或以上规划视场重复覆盖的目标 */
  duplicated: TargetCover[];
  /** 恰好覆盖一次的目标数 */
  coveredOnceCount: number;
  /** 每个规划项的统计（按规划顺序） */
  itemStats: ItemStat[];
  /** 内置目标总数 */
  totalTargets: number;
}

/**
 * 单个目标是否落入视场：纯球面 haversine 判定。
 * 边界（角距恰好等于半径）按"落入"处理。
 */
export function isInsideFov(ra: number, dec: number, fov: FovConfig): boolean {
  return angularSeparation(ra, dec, fov.centerRa, fov.centerDec) <= fov.radiusDeg;
}

/**
 * 在球面上计算所有内置目标相对规划中每个视场的覆盖与重复覆盖。
 * 不做投影、不碰像素；时间/台站/星等等观测条件均不参与。
 */
export function computeCoverage(plan: CoveragePlan): CoverageResult {
  const items = plan.items;
  const covers: TargetCover[] = [];

  for (const target of COVERAGE_TARGETS) {
    const hitItems: CoveragePlanItem[] = [];
    const seps: number[] = [];
    for (const item of items) {
      const sep = angularSeparation(target.ra, target.dec, item.fov.centerRa, item.fov.centerDec);
      if (sep <= item.fov.radiusDeg) {
        hitItems.push(item);
        seps.push(sep);
      }
    }
    covers.push({ target, items: hitItems, separations: seps });
  }

  const uncovered = covers.filter((c) => c.items.length === 0);
  const duplicated = covers.filter((c) => c.items.length >= 2);
  const coveredOnceCount = covers.filter((c) => c.items.length === 1).length;

  const itemStats: ItemStat[] = items.map((item) => ({
    item,
    count: covers.filter((c) => c.items.some((it) => it.itemId === item.itemId)).length
  }));

  return {
    covers,
    uncovered,
    duplicated,
    coveredOnceCount,
    itemStats,
    totalTargets: COVERAGE_TARGETS.length
  };
}

/**
 * 找目标在球面上角距最近的规划项（总览中点击未覆盖目标时使用）。
 * 返回该规划项以及目标到其中心的角距（度）；规划为空时返回 null。
 */
export function nearestItem(
  ra: number,
  dec: number,
  plan: CoveragePlan
): { item: CoveragePlanItem; distanceDeg: number } | null {
  let best: { item: CoveragePlanItem; distanceDeg: number } | null = null;
  for (const item of plan.items) {
    const d = angularSeparation(ra, dec, item.fov.centerRa, item.fov.centerDec) - item.fov.radiusDeg;
    if (!best || d < best.distanceDeg) best = { item, distanceDeg: d };
  }
  return best;
}

/** 规划项的稳定配色（按加入顺序循环取色） */
const PLAN_COLORS = [
  '#57e389', // 绿
  '#57a6ff', // 蓝
  '#ffd54a', // 黄
  '#ff8a5c', // 橙
  '#c08bff', // 紫
  '#4fd6e0', // 青
  '#ff7ab0', // 粉
  '#b5e36a' // 黄绿
];

export function planColor(index: number): string {
  return PLAN_COLORS[((index % PLAN_COLORS.length) + PLAN_COLORS.length) % PLAN_COLORS.length];
}

/** 未覆盖 / 重复覆盖标记色（与单项配色区分） */
export const COLOR_UNCOVERED = '#ff5d5d';
export const COLOR_DUPLICATED = '#ffd54a';
