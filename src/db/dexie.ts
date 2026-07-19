import Dexie, { type Table } from "dexie";

export interface CacheEntry {
  key: string;
  data: unknown;
  updatedAt: number;
}

class GitHubDatabase extends Dexie {
  cache!: Table<CacheEntry>;
  constructor() {
    super("GitHubInsights");
    this.version(1).stores({
      cache: "key, updatedAt",
    });
  }
}
export const db = new GitHubDatabase();
