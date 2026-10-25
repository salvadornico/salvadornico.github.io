import { cached } from "../services/kv-cache.ts";
import { getRecentlyPlayed } from "../services/steam.service.ts";
import { getRecentlyWatched } from "../services/trakt.service.ts";

export type EnjoyedThing = {
  name: string;
  link: string;
  image?: string;
};

const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export const getEnjoying = async (): Promise<EnjoyedThing[]> => {
  const results = await Promise.allSettled([
    cached(["enjoying", "steam"], CACHE_TTL, () => getRecentlyPlayed(4)),
    cached(["enjoying", "trakt"], CACHE_TTL, () => getRecentlyWatched(4)),
  ]);

  return results.flatMap((result) => {
    if (result.status === "fulfilled") return result.value;
    console.error("Failed to load enjoyed things", result.reason);
    return [];
  });
};
