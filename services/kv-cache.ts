type CacheEntry<T> = {
  value: T;
  fetchedAt: number;
};

let kvPromise: Promise<Deno.Kv> | undefined;
const getKv = () => (kvPromise ??= Deno.openKv());

/**
 * Returns the cached value for `key` if it is younger than `ttlMs`, otherwise
 * calls `fetcher` and caches the result. If `fetcher` throws, a stale cached
 * value is returned instead (if there is one).
 */
export const cached = async <T>(
  key: Deno.KvKey,
  ttlMs: number,
  fetcher: () => Promise<T>,
): Promise<T> => {
  const kv = await getKv();
  const entry = await kv.get<CacheEntry<T>>(key);

  if (entry.value && Date.now() - entry.value.fetchedAt < ttlMs) {
    return entry.value.value;
  }

  try {
    const value = await fetcher();
    await kv.set(key, { value, fetchedAt: Date.now() });
    return value;
  } catch (error) {
    if (entry.value) {
      console.error(`Refreshing ${key.join("/")} failed, serving stale`, error);
      return entry.value.value;
    }
    throw error;
  }
};
