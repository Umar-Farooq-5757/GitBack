import axios from "axios";
import { getCache, saveCache } from "../db/cache.ts";
import { cacheKeys } from "../db/repository";

const api = axios.create({
  baseURL: "/api/github",
  timeout: 10000,
});

// --------------------
// Repository
// --------------------

export async function getRepository(
  owner: string,
  repo: string,
) {
  const key = cacheKeys.repository(
    owner,
    repo,
  );

  const cached = await getCache(key);

  if (cached) {
    console.log("Loaded from IndexedDB");

    return cached;
  }

  const { data } = await api.get(
    "/graphql",

    {
      params: {
        owner,
        repo,
      },
    },
  );

  await saveCache(
    key,

    data.data,
  );
  return data.data;
}

// --------------------
// Contributors
// --------------------

export async function getContributors(owner: string, repo: string) {
  const { data } = await api.get("/contributors", {
    params: {
      owner,
      repo,
    },
  });

  return data.data;
}

// --------------------
// Activity
// --------------------

export async function getActivity(owner: string, repo: string) {
  const { data } = await api.get("/activity", {
    params: {
      owner,
      repo,
    },
  });

  return data.data;
}

// --------------------
// Compare
// --------------------

export async function compareRepositories(
  owner: string,
  repo: string,
  base: string,
  head: string,
) {
  const { data } = await api.get("/compare", {
    params: {
      owner,
      repo,
      base,
      head,
    },
  });

  return data.data;
}
