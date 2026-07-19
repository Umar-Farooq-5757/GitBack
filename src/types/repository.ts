export interface Language {
  name: string;
  color: string;
  size: number;
  percentage: number;
}

export interface Branch {
  name: string;
  sha: string;
  protected: boolean;
}

export interface Release {
  tag: string;
  title: string;
  publishedAt: string;
  author: string;
  prerelease: boolean;
}

export interface Commit {
  sha: string;
  shortSha: string;
  message: string;
  author: string;
  avatar: string;
  date: string;
}

export interface Repository {
  name: string;
  fullName: string;
  description: string;
  homepage: string;
  owner: {
    login: string;
    avatar: string;
  };
  stars: number;
  forks: number;
  watchers: number;
  issues: number;
  pullRequests: number;
  discussions: number;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  topics: string[];
  languages: Language[];
  branches: Branch[];
  releases: Release[];
  commits: Commit[];
}
