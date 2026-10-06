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
 * 覆盖规划：一组已保存视场的【引用】集合（按 SavedFov.uuid）。
 * 规划项只保存引用：从规划中移除一项不会删除已保存视场本身，
 * 也不影响批注；删除已保存视场时才会反向清理引用。
 */
export interface CoveragePlan {
  uuid: string;
  name: string;
  createdAt: number;
  fovUuids: string[];
}
