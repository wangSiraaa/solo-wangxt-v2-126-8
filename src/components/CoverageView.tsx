// 覆盖规划总览：在一张【等距方位投影】上叠加各规划视场的球面小圆边界，
// 并标注每个内置目标的覆盖状态（未覆盖 / 单次 / 重复）。
//
// 重要：这里的覆盖颜色与列表数据全部来自 lib/coverage.ts 的球面角距计算，
// 投影仅负责把球面几何画到 SVG 上；不拼接任何两张投影图片，
// 也不读取像素。画布缩放、viewBox 缩放、换一种投影都不改变统计结果。

import { useMemo } from 'react';
import {
  buildOverviewProjection,
  FOV_DISC_PX,
  graticuleObject,
  projectPoint,
  sphericalCircle,
  VIEW_SIZE
} from '../lib/projections';
import { formatDec, formatRA } from '../lib/geoMath';
import type {
  CoverageResult,
  CoverageTarget,
  OverviewFrame,
  PlannedFov
} from '../lib/coverage';

interface CoverageViewProps {
  planName: string;
  fovs: PlannedFov[];
  coverage: CoverageResult;
  frame: OverviewFrame;
  magLimit: number;
  onChangeMag: (v: number) => void;
  selectedId: string | null;
  hoverId: string | null;
  onHover: (id: string | null) => void;
  /** 点击目标：覆盖目标回到对应视场；未覆盖目标以其为中心回三视图 */
  onFocusTarget: (t: CoverageTarget, fovUuid: string | null) => void;
  /** 点击视场图例：回到该视场三视图 */
  onFocusFov: (f: PlannedFov) => void;
}

const C = VIEW_SIZE / 2;

export default function CoverageView(p: CoverageViewProps) {
  const { frame, coverage } = p;

  const built = useMemo(
    () => buildOverviewProjection(frame.centerRa, frame.centerDec, frame.clipRadiusDeg),
    [frame.centerRa, frame.centerDec, frame.clipRadiusDeg]
  );

  // 各视场的球面小圆投影路径（跨 0h / 极区均由 d3 球面裁剪处理；
  // 一条路径同时做半透明填充与描边，不是两张投影图片的拼接）
  const fovPaths = useMemo(
    () =>
      p.fovs.map((f) => ({
        f,
        d: built.path(sphericalCircle(f.fov.centerRa, f.fov.centerDec, f.fov.radiusDeg))
      })),
    [built, p.fovs]
  );

  const grat = useMemo(() => built.path(graticuleObject()), [built]);

  // 星等筛选只作用于恒星（与三视图一致）；日月行星始终作为动态参考
  const passMag = (t: CoverageTarget) => t.kind !== 'star' || t.mag <= p.magLimit;

  const rows = useMemo(() => coverage.perTarget.filter((r) => passMag(r.target)), [coverage, p.magLimit]);
  const uncovered = rows.filter((r) => r.coveredBy.length === 0);
  const duplicated = rows.filter((r) => r.coveredBy.length >= 2);

  // 目标投影位置（裁剪角外的点 projectPoint 返回 null，即不在规划范围内的目标）
  const markers = useMemo(() => {
    const out: Array<{ t: CoverageTarget; count: number; x: number; y: number }> = [];
    for (const r of rows) {
      const pt = projectPoint(built.projection, r.target.ra, r.target.dec);
      if (!pt) continue;
      out.push({ t: r.target, count: r.coveredBy.length, x: pt[0], y: pt[1] });
    }
    return out;
  }, [built, rows]);

  return (
    <div className="coverage-view">
      <div className="cov-head">
        <div>
          <strong>覆盖总览 · {p.planName}</strong>
          <span className="cov-sub">
            切点 {formatRA(frame.centerRa)} / {formatDec(frame.centerDec)} · 球面包围角 {frame.clipRadiusDeg.toFixed(1)}° ·
            覆盖判定＝球面角距（haversine），与画布缩放无关
          </span>
        </div>
        <label className="cov-mag">
          星等上限（仅恒星）≤ {p.magLimit.toFixed(1)}
          <input
            type="range"
            min={-2}
            max={6}
            step={0.1}
            value={p.magLimit}
            onChange={(e) => p.onChangeMag(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="cov-body">
        <div className="cov-canvas">
          <svg width={VIEW_SIZE} height={VIEW_SIZE} viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`} className="proj-svg"
            onMouseLeave={() => p.onHover(null)}>
            <defs>
              <clipPath id="cov-disc">
                <circle cx={C} cy={C} r={FOV_DISC_PX} />
              </clipPath>
            </defs>

            <circle cx={C} cy={C} r={FOV_DISC_PX} fill="#0b1020" stroke="#3b4a6b" strokeWidth={1.5} />

            <g clipPath="url(#cov-disc)">
              <path d={grat} fill="none" stroke="#27406a" strokeWidth={0.6} opacity={0.9} />

              {/* 视场：半透明填充（重叠处颜色自然加深）+ 球面小圆边界 */}
              {fovPaths.map(({ f, d }) => (
                <path
                  key={f.uuid}
                  d={d}
                  fill={f.color}
                  fillOpacity={0.13}
                  stroke={f.color}
                  strokeWidth={1.8}
                  className="cov-fov-edge"
                  onClick={() => p.onFocusFov(f)}
                >
                  <title>{`${f.name}：RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°（点击回到该视场三视图）`}</title>
                </path>
              ))}

              {/* 切点十字 */}
              <g stroke="#8aa0c8" strokeWidth={1}>
                <line x1={C - 7} y1={C} x2={C + 7} y2={C} />
                <line x1={C} y1={C - 7} x2={C} y2={C + 7} />
              </g>

              {/* 目标 */}
              {markers.map(({ t, count, x, y }) => {
                const status = count === 0 ? 'none' : count === 1 ? 'once' : 'multi';
                const ring = status === 'none' ? '#ff5d5d' : status === 'multi' ? '#ffd54a' : '#8aa0c8';
                const base = Math.max(2, Math.min(6.5, 6 - t.mag * 0.8));
                const r = t.kind === 'star' ? base : Math.max(base, 5);
                return (
                  <g
                    key={t.id}
                    transform={`translate(${x},${y})`}
                    className="star-marker"
                    onMouseEnter={() => p.onHover(t.id)}
                    onClick={() => p.onFocusTarget(t, coverage.perTarget.find((x) => x.target.id === t.id)?.coveredBy[0]?.fov.uuid ?? null)}
                  >
                    <title>
                      {`${t.name}${t.kind === 'star' ? '' : '（动态位置）'}：` +
                        (count === 0
                          ? '未覆盖'
                          : count === 1
                            ? `由 ${coverage.perTarget.find((x) => x.target.id === t.id)?.coveredBy[0].fov.name} 覆盖`
                            : `重复覆盖 ×${count}`)}
                    </title>
                    {(status !== 'once' || t.id === p.selectedId || t.id === p.hoverId) && (
                      <circle r={r + 3.2} fill="none" stroke={ring} strokeWidth={status === 'once' ? 1 : 1.6} />
                    )}
                    {t.kind === 'star' ? (
                      <circle r={r} fill={count === 0 ? '#ff8f8f' : '#ffffff'} />
                    ) : t.kind === 'planet' ? (
                      <rect x={-r} y={-r} width={r * 2} height={r * 2} fill="#9ecbff" />
                    ) : (
                      <polygon points={`0,${-r} ${r},0 0,${r} ${-r},0`} fill={t.kind === 'sun' ? '#ffd27d' : '#dfe6f2'} />
                    )}
                  </g>
                );
              })}
            </g>
          </svg>
          <p className="cov-note">
            彩色区域＝各视场球面小圆（重叠处颜色加深）；<span className="tag-red">红环</span>＝未覆盖目标，
            <span className="tag-gold">金环</span>＝被 ≥2 个视场重复覆盖。点击视场边界或任意目标可回到对应三视图。
          </p>
        </div>

        <div className="cov-side">
          <div className="cov-stats">
            <span>内置目标 {coverage.totalTargets}</span>
            <span className="tag-once">单次覆盖 {coverage.coveredOnce}</span>
            <span className="tag-gold">重复 {coverage.coveredMulti}</span>
            <span className="tag-red">未覆盖 {uncovered.length}</span>
          </div>

          <ul className="cov-legend">
            {p.fovs.map((f) => (
              <li key={f.uuid}>
                <span className="dot" style={{ background: f.color }} />
                <button className="link-btn" title={`RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°（点击载入该视场三视图）`} onClick={() => p.onFocusFov(f)}>
                  {f.name}
                </button>
                <span className="cov-fov-coord">
                  r {f.fov.radiusDeg}°
                </span>
              </li>
            ))}
          </ul>

          {coverage.pairOverlaps.some((q) => q.overlaps) && (
            <div className="cov-pairs">
              <h4>视场重叠</h4>
              {coverage.pairOverlaps
                .filter((q) => q.overlaps)
                .map((q) => (
                  <div key={`${q.a.uuid}-${q.b.uuid}`} className="cov-pair-row">
                    <span className="dot" style={{ background: q.a.color }} />
                    <span className="dot" style={{ background: q.b.color }} />
                    <span>
                      {q.a.name} × {q.b.name}：中心角距 {q.centerSepDeg.toFixed(1)}°，重复纵深 ≈ {q.overlapDeg.toFixed(1)}°
                      {q.contains ? '（内含）' : ''}
                    </span>
                  </div>
                ))}
            </div>
          )}

          <div className="cov-lists">
            <h4 className="tag-red-h">未覆盖（{uncovered.length}）</h4>
            {uncovered.length === 0 ? (
              <p className="cov-empty">规划范围内没有未覆盖目标。</p>
            ) : (
              <ul className="cov-target-list">
                {uncovered.map((r) => (
                  <li key={r.target.id}>
                    <button className="link-btn" onClick={() => p.onFocusTarget(r.target, null)}>
                      {r.target.name}
                      {r.target.kind !== 'star' && <em className="dyn">动态</em>}
                    </button>
                    <span className="cov-coord">{formatRA(r.target.ra)} {formatDec(r.target.dec)}</span>
                  </li>
                ))}
              </ul>
            )}

            <h4 className="tag-gold-h">重复覆盖（{duplicated.length}）</h4>
            {duplicated.length === 0 ? (
              <p className="cov-empty">没有目标落入两个或更多视场。</p>
            ) : (
              <ul className="cov-target-list">
                {duplicated.map((r) => (
                  <li key={r.target.id} className="cov-dup-row">
                    <button className="link-btn" onClick={() => p.onFocusTarget(r.target, r.coveredBy[0].fov.uuid)}>
                      {r.target.name}
                      {r.target.kind !== 'star' && <em className="dyn">动态</em>}
                      <span className="cov-count">×{r.coveredBy.length}</span>
                    </button>
                    <span className="cov-chips">
                      {r.coveredBy.map((c) => (
                        <button
                          key={c.fov.uuid}
                          className="cov-chip"
                          style={{ borderColor: c.fov.color, color: c.fov.color }}
                          title={`在 ${c.fov.name} 内，距中心 ${c.separationDeg.toFixed(2)}°（点击回到该视场）`}
                          onClick={() => p.onFocusTarget(r.target, c.fov.uuid)}
                        >
                          {c.fov.name}
                        </button>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
