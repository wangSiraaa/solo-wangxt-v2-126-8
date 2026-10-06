// 共享数据类型

export interface FovConfig {
  /** 中心 J2000 赤经（度） */
  centerRa: number;
  /** 中心 J2000 赤纬（度） */
  centerDec: number;
  /** 视场角半径（度），按球面角距定义 */
  radiusDeg: number;
}

export interface SiteState {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  height: number;
}

export interface SavedFov {
  uuid: string;
  name: string;
  createdAt: number;
  fov: FovConfig;
  siteId: string;
  /** 观测时间 UTC ISO 字符串 */
  timeUtcIso: string;
  note?: string;
}

export interface Annotation {
  uuid: string;
  createdAt: number;
  /** 批注锚点 J2000 赤经赤纬（度），坐标绑定，不绑像素 */
  ra: number;
  dec: number;
  text: string;
  color: string;
}

/**
 * 覆盖规划项：从已保存视场中选出的一个范围。
 * 保存视场几何【快照】而非只存引用——即使原已保存视场日后被删除，
 * 规划本身的球面覆盖结果仍可复算；规划项增删也不触碰已保存视场与批注。
 */
export interface CoveragePlanItem {
  /** 规划项自身 id（与来源视场 uuid 独立） */
  itemId: string;
  /** 来源已保存视场 uuid，仅用于溯源 */
  sourceFovUuid: string;
  /** 名称快照 */
  name: string;
  /** J2000 视场快照 */
  fov: FovConfig;
  addedAt: number;
}

/** 大图覆盖规划（当前只维护一份，固定 id），独立存于 IndexedDB */
export interface CoveragePlan {
  id: 'main';
  items: CoveragePlanItem[];
  updatedAt: number;
}
