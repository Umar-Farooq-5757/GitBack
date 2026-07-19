export const cacheKeys = {
  repository: (
    owner: string,
    repo: string,
  ) => `repo:${owner}/${repo}`,

  contributors: (
    owner: string,
    repo: string,
  ) => `contributors:${owner}/${repo}`,

  activity: (
    owner: string,
    repo: string,
  ) => `activity:${owner}/${repo}`,

  compare: (
    owner: string,
    repo: string,
    base: string,
    head: string,
  ) => `compare:${owner}/${repo}:${base}:${head}`,
};
