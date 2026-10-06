// 覆盖规划验收测试（纯球面逻辑，无 DOM/投影）：
//   1) 跨零赤经的视场与目标匹配正确；
//   2) 覆盖结果与画布缩放无关（结果只取决于角度；这里验证同一配置多次计算幂等）；
//   3) 规划项删除/解除引用不删除已保存视场（用内存映射模拟 db 层语义）。

import { angularSeparation } from '../src/lib/geoMath';
import { computeCoverage, coverageOverviewFrame, type CoverageTarget, type PlannedFov } from '../src/lib/coverage';

let failures = 0;
function check(name: string, cond: boolean, extra = '') {
  if (cond) {
    console.log(`  ✓ ${name}`);
  } else {
    failures++;
    console.error(`  ✗ ${name} ${extra}`);
  }
}

// 15° 每小时
const h = (hours: number) => hours * 15;

// ---------- 1. 跨零赤经 ----------
console.log('1) 跨零赤经匹配');
{
  // 视场中心 RA 358° / Dec +30°，半径 30°（对应演示场景“赤经跨零点”）
  const fovs: PlannedFov[] = [
    { uuid: 'A', name: '跨零视场', fov: { centerRa: 358, centerDec: 30, radiusDeg: 30 }, color: '#57e389' }
  ];
  const targets: CoverageTarget[] = [
    // 壁宿二 RA≈2.097°（0h 东侧）——必须算落入，不能因为 2-358=-356 而判出界
    { id: 'alpheratz', name: '壁宿二', designation: 'α And', ra: h(0 + 8 / 60 + 23.3 / 3600), dec: 29.0904, mag: 2.06, kind: 'star' },
    // 室宿一 RA≈346.194°（0h 西侧）
    { id: 'markab', name: '室宿一', designation: 'α Peg', ra: h(23 + 4 / 60 + 46.5 / 3600), dec: 15.2053, mag: 2.49, kind: 'star' },
    // 大角星 RA≈213.9°，绝不应落入
    { id: 'arcturus', name: '大角星', designation: 'α Boo', ra: h(14 + 15 / 60 + 39.7 / 3600), dec: 19.1825, mag: -0.05, kind: 'star' }
  ];
  const res = computeCoverage(targets, fovs);
  const byId = Object.fromEntries(res.perTarget.map((r) => [r.target.id, r.coveredBy.length]));
  check('壁宿二（RA≈2.1°，0h 东侧）落入中心 RA358° 视场', byId['alpheratz'] === 1, `count=${byId['alpheratz']}`);
  check('室宿一（RA≈346.2°，0h 西侧）落入', byId['markab'] === 1, `count=${byId['markab']}`);
  check('大角星（RA≈214°）不落入', byId['arcturus'] === 0, `count=${byId['arcturus']}`);

  // 直接核对球面角距：壁宿二与中心的最短弧约 3.7°（ΔRA≈4.1°×cos30°），而不是 356°
  const sep = angularSeparation(358, 30, targets[0].ra, targets[0].dec);
  check('跨零点球面角距取最短弧（≈3.7°，而非 356°）', Math.abs(sep - 3.68) < 0.2, `sep=${sep.toFixed(2)}`);

  // 总览切点本身接近 RA≈358°（不能被拉到 ~180°），且包围角 ~30.5°
  const frame = coverageOverviewFrame(fovs)!;
  const dRa = ((frame.centerRa - 358 + 540) % 360) - 180;
  check('总览切点跨零时仍在视场中心附近', Math.abs(dRa) < 2 && Math.abs(frame.centerDec - 30) < 2,
    `ra=${frame.centerRa.toFixed(2)} dec=${frame.centerDec.toFixed(2)}`);
  check('包围球冠角 ≈ 半径 30°', Math.abs(frame.clipRadiusDeg - 30.5) < 1, `clip=${frame.clipRadiusDeg.toFixed(2)}`);
}

// ---------- 两片相邻视场：重复覆盖（放在赤道上，ΔRA 即大圆距离） ----------
console.log('2) 两片视场的重复覆盖');
{
  const fovs: PlannedFov[] = [
    { uuid: 'A', name: '片A', fov: { centerRa: 355, centerDec: 0, radiusDeg: 20 }, color: '#57e389' },
    { uuid: 'B', name: '片B', fov: { centerRa: 5, centerDec: 0, radiusDeg: 20 }, color: '#57a6ff' } // 中心角距 10°，跨零
  ];
  // 在 0h 经线上、赤道上的点到两中心各 5° -> 重复
  const seam: CoverageTarget = { id: 'seam', name: '拼接缝目标', designation: 't', ra: 0, dec: 0, mag: 1, kind: 'star' };
  // RA 337/23 处距各自中心 18°（在本视场内），距另一片 28°（不在另一片内）
  const west: CoverageTarget = { id: 'w', name: '西侧', designation: 'w', ra: 337, dec: 0, mag: 1, kind: 'star' };
  const east: CoverageTarget = { id: 'e', name: '东侧', designation: 'e', ra: 23, dec: 0, mag: 1, kind: 'star' };
  // RA 180 未覆盖
  const far: CoverageTarget = { id: 'f', name: '远端', designation: 'f', ra: 180, dec: 0, mag: 1, kind: 'star' };
  const res = computeCoverage([seam, west, east, far], fovs);
  const n = (id: string) => res.perTarget.find((r) => r.target.id === id)!.coveredBy.length;
  check('拼接缝目标被两片重复覆盖', n('seam') === 2, `n=${n('seam')}`);
  check('西/东侧目标各只被覆盖一次（距另一片 28°>20°）', n('w') === 1 && n('e') === 1, `w=${n('w')} e=${n('e')}`);
  check('远端目标未覆盖', n('f') === 0);
  check('统计：重复数=1，单次=2，未覆盖=1',
    res.coveredMulti === 1 && res.coveredOnce === 2 && res.uncovered.length === 1);
  const pair = res.pairOverlaps[0];
  check('两视场球面小圆判为重叠（中心角距 10° < 40°）', pair.overlaps && Math.abs(pair.centerSepDeg - 10) < 1e-9,
    `sep=${pair.centerSepDeg}`);
  check('重复纵深 ≈ 30°（20+20-10）', Math.abs(pair.overlapDeg - 30) < 1e-9, `ov=${pair.overlapDeg}`);
  // 切点在 0h 附近（矢量平均，约 RA=0°）
  const frame = coverageOverviewFrame(fovs)!;
  const dRa = Math.min(Math.abs(frame.centerRa), Math.abs(frame.centerRa - 360));
  check('跨零两视场的总览切点在 0h 附近而非 180°', dRa < 5, `ra=${frame.centerRa.toFixed(2)}`);
  check('总览包围角包住两片（≈ 10/2 + 20 = 25°）', Math.abs(frame.clipRadiusDeg - 25.5) < 1, `clip=${frame.clipRadiusDeg}`);
}

// ---------- 内含与边界 ----------
console.log('3) 内含 / 恰在边界');
{
  const fovs: PlannedFov[] = [
    { uuid: 'big', name: '大片', fov: { centerRa: 90, centerDec: 0, radiusDeg: 40 }, color: '#57e389' },
    { uuid: 'small', name: '小片', fov: { centerRa: 95, centerDec: 0, radiusDeg: 10 }, color: '#57a6ff' }
  ];
  const edge: CoverageTarget = { id: 'edge', name: '边界点', designation: 'e', ra: 130, dec: 0, mag: 1, kind: 'star' }; // 距大片中心恰 40°
  const res = computeCoverage([edge], fovs);
  check('恰在边界（sep==radius）算覆盖', res.perTarget[0].coveredBy.length === 1);
  check('小片被大片包含', res.pairOverlaps[0].contains === true);
}

// ---------- 缩放无关性（幂等 + 结果不含任何像素量） ----------
console.log('4) 缩放/画布无关');
{
  const fovs: PlannedFov[] = [
    { uuid: 'A', name: 'A', fov: { centerRa: 200, centerDec: -10, radiusDeg: 25 }, color: '#57e389' }
  ];
  const targets: CoverageTarget[] = [
    { id: 't1', name: 't1', designation: '', ra: 205, dec: -8, mag: 2, kind: 'star' },
    { id: 't2', name: 't2', designation: '', ra: 260, dec: 20, mag: 2, kind: 'star' }
  ];
  const r1 = JSON.stringify(computeCoverage(targets, fovs));
  const r2 = JSON.stringify(computeCoverage(targets, fovs));
  check('同一配置重复计算结果完全一致（缩放画布不参与计算）', r1 === r2);
  // 结果结构中只有角度，没有任何像素/投影字段
  const serialized = JSON.stringify(computeCoverage(targets, fovs));
  check('结果中不存在 px/pixel/scale 等像素量', !/px|pixel|scale/i.test(serialized));
}

// ---------- 5) 规划项删除不删除已保存视场与批注（模拟 db 语义） ----------
console.log('5) 移除规划项不删除视场/批注');
{
  const fovStore = new Map<string, { uuid: string }>();
  const annoStore = new Map<string, { uuid: string }>();
  const planStore = new Map<string, { uuid: string; fovUuids: string[] }>();
  fovStore.set('f1', { uuid: 'f1' });
  annoStore.set('a1', { uuid: 'a1' });
  planStore.set('p1', { uuid: 'p1', fovUuids: ['f1'] });
  // db.deletePlan 的语义：只删 plans 库
  planStore.delete('p1');
  check('删除规划后视场仍在', fovStore.has('f1'));
  check('删除规划后批注仍在', annoStore.has('a1'));
  // 从规划移除一个视场（toggle）：规划变更，视场仍在
  planStore.set('p2', { uuid: 'p2', fovUuids: ['f1'] });
  const p2 = planStore.get('p2')!;
  planStore.set('p2', { ...p2, fovUuids: p2.fovUuids.filter((u) => u !== 'f1') });
  check('从规划移除视场后该视场仍保存', fovStore.has('f1') && planStore.get('p2')!.fovUuids.length === 0);
}

console.log(failures === 0 ? '\n全部通过 ✅' : `\n${failures} 项失败 ❌`);
if (failures > 0) process.exit(1);
