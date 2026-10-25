import type { EnjoyedThing } from "../data/enjoying.ts";

type OwnedGame = {
  appid: number;
  name: string;
  rtime_last_played?: number;
};

type StoreItemAssets = {
  asset_url_format: string;
  library_capsule?: string;
  header?: string;
};

// Newer games store images under hashed paths, so they have to be looked up
const getCoverUrls = async (
  appids: number[],
): Promise<Map<number, string | undefined>> => {
  const url = new URL(
    "https://api.steampowered.com/IStoreBrowseService/GetItems/v1/",
  );
  url.searchParams.set(
    "input_json",
    JSON.stringify({
      ids: appids.map((appid) => ({ appid })),
      context: { language: "english", country_code: "US" },
      data_request: { include_assets: true },
    }),
  );

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Steam store responded ${res.status}`);
  const { response } = await res.json();
  const items: { appid: number; assets?: StoreItemAssets }[] =
    response?.store_items ?? [];

  return new Map(items.map(({ appid, assets }) => {
    // Portrait capsules match Trakt posters, but older games don't have one
    const file = assets?.library_capsule ?? assets?.header;
    const image = assets && file
      ? "https://shared.akamai.steamstatic.com/store_item_assets/" +
        assets.asset_url_format.replace("${FILENAME}", file)
      : undefined;
    return [appid, image];
  }));
};

export const getRecentlyPlayed = async (count = 4): Promise<EnjoyedThing[]> => {
  const key = Deno.env.get("STEAM_API_KEY");
  const steamId = Deno.env.get("STEAM_ID");
  if (!key || !steamId) throw new Error("STEAM_API_KEY or STEAM_ID not set");

  const url = new URL(
    "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/",
  );
  url.search = new URLSearchParams({
    key,
    steamid: steamId,
    include_appinfo: "true",
    include_played_free_games: "true",
    format: "json",
  }).toString();

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Steam responded ${res.status}`);
  const { response } = await res.json();
  const games: OwnedGame[] = response?.games ?? [];

  const recent = games
    .filter((game) => game.rtime_last_played)
    .sort((a, b) => b.rtime_last_played! - a.rtime_last_played!)
    .slice(0, count);

  const covers = await getCoverUrls(recent.map((game) => game.appid));

  return recent.map((game) => ({
    name: game.name,
    link: `https://store.steampowered.com/app/${game.appid}`,
    image: covers.get(game.appid),
  }));
};
