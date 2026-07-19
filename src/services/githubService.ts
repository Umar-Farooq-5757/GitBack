import { graphql } from "@octokit/graphql";

export async function fetchRepositoryData(owner: string, name: string) {
  const response = await graphql({
    query: `
      query GetRepoData($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      stargazerCount
      forkCount
      owner {
        login
      }
      primaryLanguage {
        name
        color
      }
    }
  }
    `,
    owner,
    name,
    headers: {
      authorization: `token ${import.meta.env.VITE_GITHUB_PAT}`,
    },
  });

  return response;
}