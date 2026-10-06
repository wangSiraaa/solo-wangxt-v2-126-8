// IndexedDB 本地持久化：保存视场配置、天球坐标锚定的批注、大图覆盖规划。
// 无后端；所有数据仅存于浏览器。Promise 风格的极简封装。
//
// 三个对象库相互独立：
//   fovs         已保存视场（用户的视场库）
//   annotations  批注（锚定 J2000 天球坐标）
//   coverage     覆盖规划（内含视场快照）
// 从规划中移除一个规划项只写 coverage 库，绝不删除 fovs / annotations 中的记录。

import type { Annotation, CoveragePlan, SavedFov } from '../types';

const DB_NAME = 'local-starchart';
const DB_VERSION = 2;
const STORE_FOVS = 'fovs';
const STORE_ANNOTATIONS = 'annotations';
const STORE_COVERAGE = 'coverage';

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
      // v2：覆盖规划库（keyPath 为规划 id）
      if (!db.objectStoreNames.contains(STORE_COVERAGE)) {
        db.createObjectStore(STORE_COVERAGE, { keyPath: 'id' });
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

// ---------------- 覆盖规划（独立对象库） ----------------

export async function getCoveragePlan(): Promise<CoveragePlan | null> {
  return tx<CoveragePlan | undefined>(STORE_COVERAGE, 'readonly', (s) => s.get('main')).then(
    (r) => r ?? null
  );
}

export async function putCoveragePlan(plan: CoveragePlan): Promise<void> {
  await tx(STORE_COVERAGE, 'readwrite', (s) => s.put(plan));
}
