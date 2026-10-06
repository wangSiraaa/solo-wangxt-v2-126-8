// IndexedDB 本地持久化：保存视场配置与天球坐标锚定的批注。
// 无后端；所有数据仅存于浏览器。Promise 风格的极简封装。

import type { Annotation, CoveragePlan, SavedFov } from '../types';

const DB_NAME = 'local-starchart';
const DB_VERSION = 2;
const STORE_FOVS = 'fovs';
const STORE_ANNOTATIONS = 'annotations';
const STORE_PLANS = 'plans';

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_FOVS)) {
        db.createObjectStore(STORE_FOVS, { keyPath: 'uuid' });
      }
      if (!db.objectStoreNames.contains(STORE_ANNOTATIONS)) {
        db.createObjectStore(STORE_ANNOTATIONS, { keyPath: 'uuid' });
      }
      if (!db.objectStoreNames.contains(STORE_PLANS)) {
        db.createObjectStore(STORE_PLANS, { keyPath: 'uuid' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function tx<T>(storeName: string, mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(storeName, mode);
        const req = fn(t.objectStore(storeName));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

export async function putFov(fov: SavedFov): Promise<void> {
  await tx(STORE_FOVS, 'readwrite', (s) => s.put(fov));
}

export async function getAllFovs(): Promise<SavedFov[]> {
  const all = await tx<SavedFov[]>(STORE_FOVS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => b.createdAt - a.createdAt);
}

export async function deleteFov(uuid: string): Promise<void> {
  await tx(STORE_FOVS, 'readwrite', (s) => s.delete(uuid));
  // 反向清理：删除已保存视场时，从所有规划的引用列表中移除它；
  // 规划本身与其他视场、批注都保留。
  const plans = await tx<CoveragePlan[]>(STORE_PLANS, 'readonly', (s) => s.getAll());
  await Promise.all(
    plans
      .filter((p) => p.fovUuids.includes(uuid))
      .map((p) => tx(STORE_PLANS, 'readwrite', (s) => s.put({ ...p, fovUuids: p.fovUuids.filter((u) => u !== uuid) })))
  );
}

export async function putAnnotation(a: Annotation): Promise<void> {
  await tx(STORE_ANNOTATIONS, 'readwrite', (s) => s.put(a));
}

export async function getAllAnnotations(): Promise<Annotation[]> {
  const all = await tx<Annotation[]>(STORE_ANNOTATIONS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => a.createdAt - b.createdAt);
}

export async function deleteAnnotation(uuid: string): Promise<void> {
  await tx(STORE_ANNOTATIONS, 'readwrite', (s) => s.delete(uuid));
}

// ---------------- 覆盖规划（仅引用已保存视场的 uuid） ----------------

export async function putPlan(plan: CoveragePlan): Promise<void> {
  await tx(STORE_PLANS, 'readwrite', (s) => s.put(plan));
}

export async function getAllPlans(): Promise<CoveragePlan[]> {
  const all = await tx<CoveragePlan[]>(STORE_PLANS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => b.createdAt - a.createdAt);
}

export async function deletePlan(uuid: string): Promise<void> {
  // 只删除规划记录本身，绝不触碰 fovs / annotations 两个对象库
  await tx(STORE_PLANS, 'readwrite', (s) => s.delete(uuid));
}
