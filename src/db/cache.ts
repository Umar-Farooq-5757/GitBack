import { db } from "./dexie";

const CACHE_DURATION = 24 * 60 * 60 * 1000;

export async function getCache<T>(key: string): Promise<T | null> {
  const item = await db.cache.get(key);

  if (!item) {
    return null;
  }

  const expired = Date.now() - item.updatedAt > CACHE_DURATION;

  if (expired) {
    await db.cache.delete(key);
    return null;
  }
  return item.data as T;
}

export async function saveCache(
  key: string,
  data: unknown,
) {
  await db.cache.put({
    key,
    data,
    updatedAt: Date.now(),
  });
}

export async function clearCache() {
  await db.cache.clear();
}
