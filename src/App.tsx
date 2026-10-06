// 应用主组件：React + TypeScript 管理状态与坐标，
// Three.js 显示三维天球，D3 geo 绘制两种方位投影，
// astronomy-engine 完成其明确支持的坐标转换，IndexedDB 本地存视场与批注。

import { useEffect, useMemo, useState } from 'react';
import GlobeView from './components/GlobeView';
import ProjectionView from './components/ProjectionView';
import Controls from './components/Controls';
import InfoPanel from './components/InfoPanel';
import CoverageOverview from './components/CoverageOverview';
import { SkyEpoch } from './lib/astronomy';
import { computeSky, isTargetVisible, type SkyModel } from './lib/computeSky';
import { fovBoundary } from './lib/geoMath';
import { computeCoverage, nearestItem } from './lib/coverage';
import { STAR_CATALOG } from './data/catalog';
import {
  buildExportJson,
  buildStandaloneSvg,
  downloadPngFromSvg,
  downloadText,
  type ExportMeta
} from './lib/exporter';
import {
  deleteAnnotation,
  deleteFov,
  getAllAnnotations,
  getAllFovs,
  getCoveragePlan,
  putAnnotation,
  putCoveragePlan,
  putFov
} from './lib/db';
import { DEMO_SCENARIOS } from './data/scenarios';
import { OBSERVING_SITES } from './data/sites';
import type { Annotation, FovConfig, SavedFov, SiteState, CoveragePlan } from './types';

const DEFAULT_SITE: SiteState = OBSERVING_SITES[0];
const DEFAULT_TIME = '2026-09-30T13:00:00Z';
const DEFAULT_FOV: FovConfig = { centerRa: 213.9, centerDec: 19.2, radiusDeg: 30 };

function uuid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
}

const EMPTY_PLAN: CoveragePlan = { id: 'main', items: [], updatedAt: 0 };

export default function App() {
  const [site, setSite] = useState<SiteState>(DEFAULT_SITE);
  const [timeIso, setTimeIso] = useState(DEFAULT_TIME);
  const [fov, setFov] = useState<FovConfig>(DEFAULT_FOV);
  const [magLimit, setMagLimit] = useState(4.5);
  const [horizonClip, setHorizonClip] = useState(false);
  const [showHorizon, setShowHorizon] = useState(true);
  const [showGraticule, setShowGraticule] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [focusToken, setFocusToken] = useState<{ id: string; nonce: number } | null>(null);
  const [savedFovs, setSavedFovs] = useState<SavedFov[]>([]);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [plan, setPlan] = useState<CoveragePlan>(EMPTY_PLAN);

  // 初始载入 IndexedDB
  useEffect(() => {
    getAllFovs().then(setSavedFovs).catch(() => undefined);
    getAllAnnotations().then(setAnnotations).catch(() => undefined);
    getCoveragePlan()
      .then((p) => {
        if (p) setPlan(p);
      })
      .catch(() => undefined);
  }, []);

  // 历元（位置+时间）；SkyEpoch 内部调用 astronomy-engine 建旋转矩阵
  const epoch = useMemo(() => {
    const date = new Date(timeIso);
    if (Number.isNaN(date.getTime())) return null;
    return new SkyEpoch(date, site);
  }, [site.latitude, site.longitude, site.height, timeIso]);

  const boundaryPts = useMemo(() => fovBoundary(fov.centerRa, fov.centerDec, fov.radiusDeg, 128), [fov]);

  const sky: SkyModel | null = useMemo(() => {
    if (!epoch) return null;
    return computeSky(epoch, fov, magLimit, horizonClip, boundaryPts);
  }, [epoch, fov, magLimit, horizonClip, boundaryPts]);

  const graticule = useMemo(() => epoch?.graticuleHorizontal(), [epoch]);

  const selectedTarget = useMemo(
    () => (selectedId && sky ? sky.targets.find((t) => t.id === selectedId) ?? null : null),
    [selectedId, sky]
  );

  // 点击任一视图：同步选中 + 三维视图聚焦
  const selectTarget = (id: string | null) => {
    setSelectedId(id);
    if (id) setFocusToken({ id, nonce: Date.now() });
  };

  const applyScenario = (scenarioId: string) => {
    const s = DEMO_SCENARIOS.find((x) => x.id === scenarioId);
    if (!s) return;
    const st = OBSERVING_SITES.find((x) => x.id === s.siteId) ?? DEFAULT_SITE;
    setSite({ ...st });
    setTimeIso(s.timeUtcIso);
    setFov({ centerRa: s.centerRaDeg, centerDec: s.centerDecDeg, radiusDeg: s.fovRadiusDeg });
    setMagLimit(s.magLimit);
    setHorizonClip(s.horizonClip);
    if (s.suggestSelectId) {
      setSelectedId(s.suggestSelectId);
      setFocusToken({ id: s.suggestSelectId, nonce: Date.now() });
    }
  };

  // 视场存取
  const saveFov = (name: string) => {
    const rec: SavedFov = {
      uuid: uuid(),
      name,
      createdAt: Date.now(),
      fov: { ...fov },
      siteId: site.id,
      timeUtcIso: timeIso
    };
    putFov(rec).then(() => getAllFovs().then(setSavedFovs));
  };
  const removeFov = (id: string) => deleteFov(id).then(() => getAllFovs().then(setSavedFovs));
  const loadFov = (f: SavedFov) => setFov({ ...f.fov });

  // 批注
  const addAnnotation = (text: string, color: string) => {
    if (!selectedTarget) {
      alert('请先在任一视图中点击一个目标，批注将锚定在该目标的 J2000 坐标上。');
      return;
    }
    const a: Annotation = { uuid: uuid(), createdAt: Date.now(), ra: selectedTarget.ra, dec: selectedTarget.dec, text, color };
    putAnnotation(a).then(() => getAllAnnotations().then(setAnnotations));
  };
  const removeAnnotation = (id: string) => deleteAnnotation(id).then(() => getAllAnnotations().then(setAnnotations));

  // ---- 大图覆盖规划 ----
  // 覆盖结果是纯球面计算（haversine 角距），与时间、台站、星等、投影、画布均无关。
  const coverageResult = useMemo(() => computeCoverage(plan), [plan]);

  const savePlan = (items: CoveragePlan['items']) => {
    const next: CoveragePlan = { id: 'main', items, updatedAt: Date.now() };
    setPlan(next);
    putCoveragePlan(next).catch(() => undefined);
  };

  // 从已保存视场加入规划：复制视场几何快照；同一已保存视场不重复加入。
  const addPlanItem = (f: SavedFov) => {
    if (plan.items.some((it) => it.sourceFovUuid === f.uuid)) return;
    savePlan([
      ...plan.items,
      {
        itemId: uuid(),
        sourceFovUuid: f.uuid,
        name: f.name,
        fov: { ...f.fov },
        addedAt: Date.now()
      }
    ]);
  };

  // 移出规划项：只写 coverage 库，绝不触碰 fovs 与 annotations。
  const removePlanItem = (itemId: string) => {
    savePlan(plan.items.filter((it) => it.itemId !== itemId));
  };

  /** 把三视图切到某个规划视场快照并滚动到三视图区 */
  const focusPlanItem = (itemId: string) => {
    const item = plan.items.find((it) => it.itemId === itemId);
    if (!item) return;
    setFov({ ...item.fov });
    document.getElementById('three-views')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /**
   * 总览中点击内置目标：回到相应视场的三视图并选中该目标。
   * 指定 itemId 时进入该视场；否则取目标落入的首个视场；
   * 目标未被任何视场覆盖时，进入球面上最近的规划视场。
   */
  const reviewTarget = (targetId: string, itemId?: string) => {
    const star = STAR_CATALOG.find((s) => s.id === targetId);
    if (!star) return;
    let targetItem = itemId ? plan.items.find((it) => it.itemId === itemId) : undefined;
    if (!targetItem) {
      const cover = coverageResult.covers.find((c) => c.target.id === targetId);
      targetItem = cover && cover.items.length > 0 ? cover.items[0] : nearestItem(star.ra, star.dec, plan)?.item;
    }
    if (targetItem) setFov({ ...targetItem.fov });
    setSelectedId(targetId);
    setFocusToken({ id: targetId, nonce: Date.now() });
    document.getElementById('three-views')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // 导出
  const exportMeta = (label: string): ExportMeta | null => {
    if (!sky) return null;
    return {
      projectionLabel: label,
      site,
      timeUtcIso: timeIso,
      fov,
      julianDay: sky.julianDay,
      gmstHours: sky.gmstHours,
      horizonClip,
      magLimit
    };
  };

  const doExportSvg = (kind: 'stereographic' | 'equidistant') => {
    if (!sky) return;
    const label = kind === 'stereographic' ? '立体投影 Stereographic' : '等距方位投影 Azimuthal Equidistant';
    const meta = exportMeta(label)!;
    const visible = sky.targets.filter((t) => isTargetVisible(t, horizonClip));
    const svg = buildStandaloneSvg(kind, sky, visible, annotations, meta);
    downloadText(`星图_${kind}_${timeIso.slice(0, 10)}.svg`, svg, 'image/svg+xml;charset=utf-8');
  };
  const doExportPng = async (kind: 'stereographic' | 'equidistant') => {
    if (!sky) return;
    const label = kind === 'stereographic' ? '立体投影 Stereographic' : '等距方位投影 Azimuthal Equidistant';
    const meta = exportMeta(label)!;
    const visible = sky.targets.filter((t) => isTargetVisible(t, horizonClip));
    const svg = buildStandaloneSvg(kind, sky, visible, annotations, meta);
    await downloadPngFromSvg(svg, `星图_${kind}_${timeIso.slice(0, 10)}.png`);
  };
  const doExportJson = () => {
    if (!sky) return;
    const meta = exportMeta('数据导出 JSON')!;
    const visible = sky.targets.filter((t) => isTargetVisible(t, horizonClip));
    downloadText(`星表视场_${timeIso.slice(0, 10)}.json`, buildExportJson(sky, visible, annotations, meta), 'application/json');
  };

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>本地星图工具</h1>
          <p>
            球面（Three.js） · 立体投影 · 等距方位投影（D3 geo）三视对照 — 同一片天区、同一组目标
          </p>
        </div>
        <div className="export-bar">
          <button className="btn" onClick={() => doExportSvg('stereographic')}>导出 立体 SVG</button>
          <button className="btn" onClick={() => doExportSvg('equidistant')}>导出 等距 SVG</button>
          <button className="btn" onClick={() => doExportPng('stereographic')}>导出 PNG</button>
          <button className="btn" onClick={doExportJson}>导出 JSON</button>
        </div>
      </header>

      <div className="main-grid">
        <aside className="sidebar">
          <Controls
            site={site}
            timeUtcIso={timeIso}
            fov={fov}
            magLimit={magLimit}
            horizonClip={horizonClip}
            showHorizon={showHorizon}
            showGraticule={showGraticule}
            savedFovs={savedFovs}
            annotations={annotations}
            plan={plan}
            onChangeSite={setSite}
            onChangeTime={setTimeIso}
            onChangeFov={setFov}
            onChangeMag={setMagLimit}
            onToggleHorizonClip={setHorizonClip}
            onToggleShowHorizon={setShowHorizon}
            onToggleGraticule={setShowGraticule}
            onApplyScenario={applyScenario}
            onSaveFov={saveFov}
            onLoadFov={loadFov}
            onDeleteFov={removeFov}
            onAddAnnotation={addAnnotation}
            onDeleteAnnotation={removeAnnotation}
            onAddPlanItem={addPlanItem}
            onRemovePlanItem={removePlanItem}
            onReviewPlanItem={focusPlanItem}
          />
        </aside>

        <main className="content">
          {sky ? (
            <>
              <section className="view-row cov-section">
                <CoverageOverview
                  plan={plan}
                  result={coverageResult}
                  selectedId={selectedId}
                  hoverId={hoverId}
                  onHover={setHoverId}
                  onReviewTarget={reviewTarget}
                  onReviewItem={focusPlanItem}
                />
              </section>

              <div id="three-views">
              <section className="view-row globe-section">
                <h2 className="view-label">球面视图 · 本地地平天球（Three.js）</h2>
                <GlobeView
                  sky={sky}
                  fov={fov}
                  horizonClip={horizonClip}
                  showGraticule={showGraticule}
                  annotations={annotations}
                  selectedId={selectedId}
                  hoverId={hoverId}
                  onSelect={selectTarget}
                  onHover={setHoverId}
                  focusToken={focusToken}
                  graticuleHorizontal={graticule}
                />
              </section>

              <section className="view-row proj-section">
                <ProjectionView
                  kind="stereographic"
                  sky={sky}
                  fov={fov}
                  horizonClip={horizonClip}
                  showHorizon={showHorizon}
                  annotations={annotations}
                  selectedId={selectedId}
                  hoverId={hoverId}
                  onSelect={selectTarget}
                  onHover={setHoverId}
                />
                <ProjectionView
                  kind="equidistant"
                  sky={sky}
                  fov={fov}
                  horizonClip={horizonClip}
                  showHorizon={showHorizon}
                  annotations={annotations}
                  selectedId={selectedId}
                  hoverId={hoverId}
                  onSelect={selectTarget}
                  onHover={setHoverId}
                />
              </section>

              <InfoPanel
                target={selectedTarget}
                centerAlt={sky.centerAlt}
                centerAz={sky.centerAz}
                gmstHours={sky.gmstHours}
                julianDay={sky.julianDay}
              />
              </div>
            </>
          ) : (
            <div className="bad-time">时间格式无效，请检查 UTC 时间输入。</div>
          )}
        </main>
      </div>

      <footer className="app-footer">
        纯前端本地应用，无后端、无网络请求 · 星表 J2000.0 近似坐标 · 地平坐标转换 astronomy-engine（Rotation_EQJ_HOR，无大气折射）·
        角距一律按球面 haversine 计算，图上像素距离不代表实际角距
      </footer>
    </div>
  );
}
