// 覆盖规划总览：在【一张全球面投影】上叠加所有已选视场的边界，
// 并按球面计算结果标出每个内置目标的覆盖状态（单次/重复/未覆盖）。
//
// 重要边界：
//  - 本组件只负责"展示" CoverageResult；覆盖判定来自 lib/coverage.ts 的
//    纯球面 haversine 计算，这里绝不读取投影像素、不比较像素坐标，
//    也不把两张投影图片做任何拼接。
//  - 全球投影使用 d3 geoEqualEarth，视场多边形以 J2000 经纬度球面圆
//    （geoCircle）给出，d3 默认在对跖子午线做球面切割，
//    跨赤经零点（如中心 RA=358°）的视场会被正确切成两块而不是横贯地图。
//  - 地图只通过 viewBox 缩放显示；覆盖数据不随画布尺寸变化。

import { useMemo } from 'react';
import { geoCircle, geoEqualEarth, geoGraticule10, geoPath, type GeoProjection } from 'd3-geo';
import type { CoveragePlan, CoveragePlanItem } from '../types';
import type { CoverageResult, TargetCover } from '../lib/coverage';
import { COLOR_DUPLICATED, COLOR_UNCOVERED, planColor } from '../lib/coverage';
import { formatDec, formatRA } from '../lib/geoMath';

interface CoverageOverviewProps {
  plan: CoveragePlan;
  result: CoverageResult;
  selectedId: string | null;
  hoverId: string | null;
  onHover: (id: string | null) => void;
  /** 点击任一内置目标：进入三视图；itemId 指定要回到哪个视场 */
  onReviewTarget: (targetId: string, itemId?: string) => void;
  /** 直接回到某个规划视场的三视图 */
  onReviewItem: (itemId: string) => void;
}

const W = 1000;
const H = 500;

export default function CoverageOverview(props: CoverageOverviewProps) {
  const { plan, result } = props;
  const hasItems = plan.items.length > 0;

  // 全球面投影与路径生成器（与规划内容无关，只构建一次）
  const { projection, path } = useMemo(() => {
    const p = geoEqualEarth();
    p.fitExtent(
      [
        [16, 14],
        [W - 16, H - 14]
      ],
      { type: 'Sphere' }
    );
    return { projection: p, path: geoPath(p) };
  }, []);

  // 视场球面小圆（边界 + 半透明填充）；跨 0h 由 d3 对跖子午线切割处理
  const fovPolys = useMemo(
    () =>
      plan.items.map((item, i) => {
        const geo = geoCircle()
          .center([item.fov.centerRa, item.fov.centerDec])
          .radius(item.fov.radiusDeg)
          .precision(0.05)();
        const center = projection([item.fov.centerRa, item.fov.centerDec]);
        return {
          item,
          color: planColor(i),
          d: path(geo as never) ?? '',
          cx: center ? center[0] : 0,
          cy: center ? center[1] : 0
        };
      }),
    [plan.items, projection, path]
  );

  // 规划项 id -> 配色序号（重复覆盖列表中的小圆点配色用）
  const colorIndex = useMemo(() => {
    const m = new Map<string, number>();
    plan.items.forEach((it, i) => m.set(it.itemId, i));
    return m;
  }, [plan.items]);

  // 全部内置目标：按球面计算结果分类投影
  const markers = useMemo(() => {
    return result.covers.map((c) => {
      const p = projection([c.target.ra, c.target.dec]);
      return {
        c,
        x: p ? p[0] : 0,
        y: p ? p[1] : 0,
        state: c.items.length === 0 ? 'uncovered' : c.items.length >= 2 ? 'duplicated' : 'covered'
      };
    });
  }, [result, projection]);

  const reviewCover = (c: TargetCover, itemId?: string) => {
    props.onReviewTarget(c.target.id, itemId ?? c.items[0]?.itemId);
  };

  return (
    <div className="cov-overview">
      <div className="cov-head">
        <h2 className="view-label">大图覆盖规划总览（J2000 全球面，多视场叠加）</h2>
        <div className="cov-badges">
          <span className="cov-badge">内置目标 {result.totalTargets}</span>
          <span className="cov-badge once">单次覆盖 {hasItems ? result.coveredOnceCount : 0}</span>
          <span className="cov-badge dup">重复覆盖 {hasItems ? result.duplicated.length : 0}</span>
          <span className="cov-badge miss">未覆盖 {hasItems ? result.uncovered.length : result.totalTargets}</span>
          <span className="cov-badge">规划视场 {plan.items.length}</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="cov-svg" onMouseLeave={() => props.onHover(null)}>
        {/* 球面底 */}
        <path d={path({ type: 'Sphere' } as never) ?? ''} fill="#0b1020" stroke="#3b4a6b" strokeWidth={1.2} />
        {/* 经纬网（10° 间隔） */}
        <path d={path(geoGraticule10() as never) ?? ''} fill="none" stroke="#223255" strokeWidth={0.5} />

        {/* 视场填充（重叠处颜色自然加深，可直观看出重复区，但判定仍以列表/角距为准） */}
        {fovPolys.map(({ item, color, d }) => (
          <path key={`fill-${item.itemId}`} d={d} fill={color} opacity={0.1} />
        ))}

        {/* 内置目标：先画单次覆盖的暗点作底，再画未覆盖/重复覆盖 */}
        {markers
          .filter((m) => m.state === 'covered')
          .map(({ c, x, y }) => (
            <Marker
              key={c.target.id}
              x={x}
              y={y}
              r={2.4}
              fill="#8fa6cf"
              c={c}
              selected={props.selectedId === c.target.id}
              hovered={props.hoverId === c.target.id}
              onHover={props.onHover}
              onReview={reviewCover}
            />
          ))}
        {markers
          .filter((m) => m.state === 'uncovered')
          .map(({ c, x, y }) => (
            <Marker
              key={c.target.id}
              x={x}
              y={y}
              r={3.8}
              fill={COLOR_UNCOVERED}
              c={c}
              selected={props.selectedId === c.target.id}
              hovered={props.hoverId === c.target.id}
              onHover={props.onHover}
              onReview={reviewCover}
            />
          ))}
        {markers
          .filter((m) => m.state === 'duplicated')
          .map(({ c, x, y }) => (
            <Marker
              key={c.target.id}
              x={x}
              y={y}
              r={4.4}
              fill={COLOR_DUPLICATED}
              ring={COLOR_UNCOVERED}
              c={c}
              selected={props.selectedId === c.target.id}
              hovered={props.hoverId === c.target.id}
              onHover={props.onHover}
              onReview={reviewCover}
            />
          ))}

        {/* 悬停/选中标签（未覆盖与重复覆盖目标） */}
        {markers
          .filter(
            (m) =>
              m.state !== 'covered' &&
              (props.hoverId === m.c.target.id || props.selectedId === m.c.target.id)
          )
          .map(({ c, x, y }) => (
            <text key={`lb-${c.target.id}`} x={x + 7} y={y + 3} className="cov-label" fontSize={11}>
              {c.target.name}
            </text>
          ))}

        {/* 视场边界 + 中心标记 + 名称（边界最后描边，压在星点之上） */}
        {fovPolys.map(({ item, color, d, cx, cy }) => (
          <g key={`bd-${item.itemId}`} className="cov-fov-group" onClick={() => props.onReviewItem(item.itemId)}>
            <path d={d} fill="none" stroke={color} strokeWidth={1.6} />
            <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke={color} strokeWidth={1} />
            <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke={color} strokeWidth={1} />
            <text x={cx} y={cy - 8} fontSize={11} fill={color} className="cov-fov-name" textAnchor="middle">
              {item.name}
            </text>
          </g>
        ))}
      </svg>

      <div className="cov-legend">
        <span><i className="cov-dot" style={{ background: '#8fa6cf' }} />单次覆盖</span>
        <span><i className="cov-dot" style={{ background: COLOR_DUPLICATED }} />重复覆盖（≥2 视场）</span>
        <span><i className="cov-dot" style={{ background: COLOR_UNCOVERED }} />未覆盖</span>
        {fovPolys.map(({ item, color }, i) => (
          <span key={item.itemId}>
            <i className="cov-dot" style={{ background: color }} />
            {item.name}（{result.itemStats[i]?.count ?? 0}）
          </span>
        ))}
        <span className="cov-note">
          覆盖判定 = J2000 球面 haversine 角距 ≤ 视场半径，与投影方式、画布缩放、像素位置无关；
          点击星点 / 视场边界 / 目标名可回到相应视场三视图。
        </span>
      </div>

      {hasItems ? (
        <div className="cov-lists">
          <div className="cov-list-box miss">
            <h4>
              未覆盖的内置目标（{result.uncovered.length}）
              <span className="cov-list-hint">点击进入球面上最近的规划视场</span>
            </h4>
            {result.uncovered.length === 0 ? (
              <p className="cov-empty-line">全部内置目标至少被一个规划视场覆盖 ✓</p>
            ) : (
              <ul className="cov-list">
                {result.uncovered.map((c) => (
                  <li key={c.target.id} className="cov-row">
                    <button
                      className="link-btn cov-target-btn"
                      title={`${formatRA(c.target.ra)} / ${formatDec(c.target.dec)}`}
                      onClick={() => reviewCover(c)}
                      onMouseEnter={() => props.onHover(c.target.id)}
                      onMouseLeave={() => props.onHover(null)}
                    >
                      {c.target.name}
                      <small>
                        {c.target.designation} · {c.target.ra.toFixed(1)}°,{c.target.dec.toFixed(1)}°
                      </small>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="cov-list-box dup">
            <h4>
              重复覆盖的内置目标（{result.duplicated.length}）
              <span className="cov-list-hint">点目标名进入首个视场，点色点进入对应视场</span>
            </h4>
            {result.duplicated.length === 0 ? (
              <p className="cov-empty-line">没有目标被多个视场重复覆盖 ✓</p>
            ) : (
              <ul className="cov-list">
                {result.duplicated.map((c) => (
                  <li key={c.target.id} className="cov-row">
                    <button
                      className="link-btn cov-target-btn"
                      title={`${formatRA(c.target.ra)} / ${formatDec(c.target.dec)}`}
                      onClick={() => reviewCover(c)}
                      onMouseEnter={() => props.onHover(c.target.id)}
                      onMouseLeave={() => props.onHover(null)}
                    >
                      {c.target.name}
                      <small>
                        {c.target.designation} ×{c.items.length}
                      </small>
                    </button>
                    <span className="cov-item-dots">
                      {c.items.map((it) => (
                        <button
                          key={it.itemId}
                          className="cov-item-dot"
                          style={{ background: planColor(colorIndex.get(it.itemId) ?? 0) }}
                          title={`回到「${it.name}」三视图`}
                          onClick={() => reviewCover(c, it.itemId)}
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <p className="cov-empty">
          还没有规划项：在左侧「大图覆盖规划」中，从已保存视场点 ＋ 把多个相邻天区加入规划。
        </p>
      )}
    </div>
  );
}

/** 单个目标标记（点击回到相应视场三视图） */
function Marker(props: {
  x: number;
  y: number;
  r: number;
  fill: string;
  ring?: string;
  c: TargetCover;
  selected: boolean;
  hovered: boolean;
  onHover: (id: string | null) => void;
  onReview: (c: TargetCover, itemId?: string) => void;
}) {
  const { x, y, r, fill, ring, c } = props;
  const itemTitle = (it: CoveragePlanItem | undefined) => (it ? `回到「${it.name}」三视图` : '回到球面上最近的规划视场');
  return (
    <g
      transform={`translate(${x},${y})`}
      className="cov-marker"
      onMouseEnter={() => props.onHover(c.target.id)}
      onClick={(e) => {
        e.stopPropagation();
        props.onReview(c);
      }}
    >
      <title>{`${c.target.name}（${c.target.designation}）\n${itemTitle(c.items[0])}`}</title>
      {props.selected && <circle r={r + 6} fill="none" stroke="#ffd54a" strokeWidth={2} />}
      {props.hovered && !props.selected && <circle r={r + 4} fill="none" stroke="#9fd0ff" strokeWidth={1.2} />}
      {ring && <circle r={r + 1.6} fill="none" stroke={ring} strokeWidth={1} />}
      <circle r={r} fill={fill} />
    </g>
  );
}
