/* ============================================================================
   COMMON
============================================================================ */

export interface User {
  id: string;
  login: string;
  avatarUrl: string;
  url: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

/* ============================================================================
   OVERVIEW
============================================================================ */

export interface RepositoryOverview {
  id: string;
  name: string;
  owner: User;

  description: string | null;

  homepageUrl: string | null;

  url: string;

  visibility: "PUBLIC" | "PRIVATE" | "INTERNAL";

  isFork: boolean;

  isArchived: boolean;

  isTemplate: boolean;

  createdAt: string;

  updatedAt: string;

  pushedAt: string | null;

  defaultBranch: string;

  license: string | null;

  primaryLanguage: string | null;

  stars: number;

  forks: number;

  watchers: number;

  subscribers: number;

  issues: number;

  pullRequests: number;

  discussions: number;

  releases: number;

  branches: number;

  tags: number;

  repositorySize: number;

  topics: string[];
}

/* ============================================================================
   LANGUAGES
============================================================================ */

export interface Language {
  name: string;

  bytes: number;

  percentage: number;

  color?: string;
}

export interface LanguagesResponse {
  totalBytes: number;

  languages: Language[];
}

/* ============================================================================
   BRANCHES
============================================================================ */

export interface Branch {
  name: string;

  protected: boolean;

  latestCommit: string;
}

export interface BranchesResponse {
  total: number;

  branches: Branch[];
}

/* ============================================================================
   RELEASES
============================================================================ */

export interface ReleaseReaction {
  total: number;

  thumbsUp: number;

  heart: number;

  rocket: number;

  hooray: number;

  laugh: number;

  eyes: number;
}

export interface Release {
  id: string;

  tag: string;

  title: string;

  author: User;

  publishedAt: string;

  isPrerelease: boolean;

  isDraft: boolean;

  body: string;

  reactions: ReleaseReaction;
}

export interface ReleasesResponse {
  total: number;

  releases: Release[];
}

/* ============================================================================
   COMMITS
============================================================================ */

export interface Commit {
  sha: string;

  shortSha: string;

  message: string;

  author: User;

  committedAt: string;

  verified: boolean;
}

export interface CommitsResponse {
  total: number;

  commits: Commit[];
}

/* ============================================================================
   CONTRIBUTORS
============================================================================ */

export interface Contributor {
  id: number;

  login: string;

  avatarUrl: string;

  profileUrl: string;

  contributions: number;

  type: string;
}

export interface ContributorsResponse {
  total: number;

  contributors: Contributor[];
}

/* ============================================================================
   ACTIVITY
============================================================================ */

export type ActivityType =
  | "push"
  | "force_push"
  | "branch_creation"
  | "branch_deletion"
  | "merge"
  | "tag";

export interface ActivityEvent {
  id: number;

  type: ActivityType;

  actor: User;

  branch: string;

  before: string;

  after: string;

  timestamp: string;
}

export interface ActivityResponse {
  total: number;

  events: ActivityEvent[];
}

/* ============================================================================
   COMPARE
============================================================================ */

export interface CompareCommit {
  sha: string;

  shortSha: string;

  message: string;

  author: User;

  committedAt: string;
}

export interface CompareFile {
  filename: string;

  status: string;

  additions: number;

  deletions: number;

  changes: number;
}

export interface CompareResponse {
  status: string;

  aheadBy: number;

  behindBy: number;

  totalCommits: number;

  commits: CompareCommit[];

  files: CompareFile[];
}

/* ============================================================================
   API RESPONSES
============================================================================ */

export interface ApiResponse<T> {
  success: boolean;

  data: T;
}

export interface ApiError {
  success: false;

  message: string;
}
