import Dexie from "dexie";

import type {
  RepositoryOverview,
  LanguagesResponse,
  BranchesResponse,
  ReleasesResponse,
  CommitsResponse,
  ContributorsResponse,
  ActivityResponse,
  CompareResponse,
  ApiResponse,
} from "../types/github";

/* ============================================================
   CONFIG
============================================================ */

const API_BASE = import.meta.env.VITE_API_URL || "";

/*
Development:

http://localhost:5173

Production:

https://your-project.vercel.app
*/

/* ============================================================
   DEXIE DATABASE
============================================================ */

class GitBackDatabase extends Dexie {
  cache!: Dexie.Table<
    {
      key: string;
      data: unknown;
      expires: number;
    },
    string
  >;

  constructor() {
    super("GitBack");

    this.version(1).stores({
      cache: "key, expires",
    });
  }
}

const db = new GitBackDatabase();

/* ============================================================
   CACHE
============================================================ */

const CACHE_TIME = 1000 * 60 * 10;
// 10 minutes

async function getCache<T>(key: string): Promise<T | null> {
  const item = await db.cache.get(key);

  if (!item) return null;

  if (Date.now() > item.expires) {
    await db.cache.delete(key);
    return null;
  }

  return item.data as T;
}

async function saveCache<T>(key: string, value: T) {
  await db.cache.put({
    key,
    data: value,
    expires: Date.now() + CACHE_TIME,
  });
}

/* ============================================================
   FETCH WRAPPER
============================================================ */

async function request<T>(url: string): Promise<T> {
  const cache = await getCache<T>(url);

  if (cache) return cache;

  const response = await fetch(API_BASE + url);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  const json = (await response.json()) as ApiResponse<T>;

console.log("SERVER RESPONSE");
console.log(json);

  if (!json.success) {
    throw new Error("API Error");
  }

  await saveCache(url, json.data);

  return json.data;
}

/* ============================================================
   GRAPHQL
============================================================ */

export async function getRepository(
  owner: string,
  repo: string,
): Promise<RepositoryOverview> {
  return request(`/api/github/graphql?owner=${owner}&repo=${repo}`);
}

export async function getLanguages(
  owner: string,
  repo: string,
): Promise<LanguagesResponse> {
  return request(
    `/api/github/graphql?owner=${owner}&repo=${repo}&section=languages`,
  );
}

export async function getBranches(
  owner: string,
  repo: string,
): Promise<BranchesResponse> {
  return request(
    `/api/github/graphql?owner=${owner}&repo=${repo}&section=branches`,
  );
}

export async function getReleases(
  owner: string,
  repo: string,
): Promise<ReleasesResponse> {
  return request(
    `/api/github/graphql?owner=${owner}&repo=${repo}&section=releases`,
  );
}

export async function getCommits(
  owner: string,
  repo: string,
): Promise<CommitsResponse> {
  return request(
    `/api/github/graphql?owner=${owner}&repo=${repo}&section=commits`,
  );
}

/* ============================================================
   REST
============================================================ */

export async function getContributors(
  owner: string,
  repo: string,
): Promise<ContributorsResponse> {
  return request(`/api/github/contributors?owner=${owner}&repo=${repo}`);
}

export async function getActivity(
  owner: string,
  repo: string,
): Promise<ActivityResponse> {
  return request(`/api/github/activity?owner=${owner}&repo=${repo}`);
}

export async function compareRepositories(
  owner: string,
  repo: string,
  base: string,
  head: string,
): Promise<CompareResponse> {
  return request(
    `/api/github/compare?owner=${owner}&repo=${repo}&base=${base}&head=${head}`,
  );
}

/* ============================================================
   CACHE HELPERS
============================================================ */

export async function clearCache() {
  await db.cache.clear();
}

export async function deleteCache(key: string) {
  await db.cache.delete(key);
}
