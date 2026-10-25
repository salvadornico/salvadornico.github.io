import type { EnjoyedThing } from "../data/enjoying.ts";

type TraktMedia = {
  title: string;
  ids: { slug: string };
  images?: { poster?: string[] };
};

type HistoryItem = { show: TraktMedia };

const toThing = ({ show }: HistoryItem): EnjoyedThing => {
  const poster = show.images?.poster?.[0];

  return {
    name: show.title,
    link: `https://trakt.tv/shows/${show.ids.slug}`,
    // Trakt returns image URLs without a protocol
    image: poster ? `https://${poster}` : undefined,
  };
};

export const getRecentlyWatched = async (
  count = 4,
): Promise<EnjoyedThing[]> => {
  const clientId = Deno.env.get("TRAKT_CLIENT_ID");
  const username = Deno.env.get("TRAKT_USERNAME");
  if (!clientId || !username) {
    throw new Error("TRAKT_CLIENT_ID or TRAKT_USERNAME not set");
  }

  // Fetch extra history so binge-watched shows can be collapsed into one entry
  const res = await fetch(
    `https://api.trakt.tv/users/${username}/history/shows?limit=50&extended=images`,
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "salvadornico.com",
        "trakt-api-version": "2",
        "trakt-api-key": clientId,
      },
    },
  );
  if (!res.ok) throw new Error(`Trakt responded ${res.status}`);
  const history: HistoryItem[] = await res.json();

  const seen = new Map<string, EnjoyedThing>();
  for (const item of history) {
    const thing = toThing(item);
    if (!seen.has(thing.link)) seen.set(thing.link, thing);
    if (seen.size === count) break;
  }
  return [...seen.values()];
};
