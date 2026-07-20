import type { VercelRequest, VercelResponse } from "@vercel/node";
import { graphqlRequest } from "../_lib/graphql";
import { success, failure } from "../_lib/response";
import { REPOSITORY_QUERY } from "../_lib/queries";

interface RepositoryQueryResponse {
  repository: {
    name: string;
    nameWithOwner: string;
    description: string | null;
    homepageUrl: string | null;

    owner: {
      login: string;
      avatarUrl: string;
    };

    stargazerCount: number;
    forkCount: number;

    watchers: {
      totalCount: number;
    };

    openIssues: {
      totalCount: number;
    };

    pullRequests: {
      totalCount: number;
    };

    discussions: {
      totalCount: number;
    };

    createdAt: string;
    updatedAt: string;
    pushedAt: string;

    repositoryTopics: {
      nodes: {
        topic: {
          name: string;
        };
      }[];
    };

    languages: {
      totalSize: number;
      edges: {
        size: number;
        node: {
          name: string;
          color: string | null;
        };
      }[];
    };

    refs: {
      nodes: {
        name: string;
        target?: {
          oid: string;
        } | null;
      }[];
    };

    releases: {
      nodes: {
        tagName: string;
        name: string | null;
        publishedAt: string | null;
        isPrerelease: boolean;
        author?: {
          login: string;
        } | null;
      }[];
    };

    defaultBranchRef?: {
      target?: {
        history?: {
          nodes: {
            oid: string;
            abbreviatedOid: string;
            committedDate: string;
            messageHeadline: string;
            author: {
              name: string;
              avatarUrl: string | null;
              user?: {
                login: string;
              } | null;
            };
          }[];
        };
      };
    } | null;
  } | null;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  try {
    const { owner, repo } = req.query;

    if (
      typeof owner !== "string" ||
      typeof repo !== "string"
    ) {
      return failure(res, "Missing owner or repo.", 400);
    }

    const data = await graphqlRequest<RepositoryQueryResponse>(
      REPOSITORY_QUERY,
      { owner, repo },
    );

    if (!data.repository) {
      return failure(res, "Repository not found.", 404);
    }

    const repository = data.repository;

    const totalLanguageSize =
      repository.languages?.totalSize || 1;

    const response = {
      name: repository.name,

      fullName: repository.nameWithOwner,

      description: repository.description,

      homepage: repository.homepageUrl,

      owner: {
        login: repository.owner.login,
        avatar: repository.owner.avatarUrl,
      },

      stars: repository.stargazerCount,

      forks: repository.forkCount,

      watchers: repository.watchers.totalCount,

      issues: repository.openIssues.totalCount,

      pullRequests: repository.pullRequests.totalCount,

      discussions: repository.discussions.totalCount,

      createdAt: repository.createdAt,

      updatedAt: repository.updatedAt,

      pushedAt: repository.pushedAt,

      topics:
        repository.repositoryTopics.nodes.map(
          (topic) => topic.topic.name,
        ),

      languages:
        (repository.languages?.edges ?? []).map(
          (language) => ({
            name: language.node.name,

            color: language.node.color,

            size: language.size,

            percentage: Number(
              (
                (language.size / totalLanguageSize) *
                100
              ).toFixed(2),
            ),
          }),
        ),

      branches:
        (repository.refs?.nodes ?? []).map(
          (branch) => ({
            name: branch.name,

            sha: branch.target?.oid ?? null,
          }),
        ),

      releases:
        (repository.releases?.nodes ?? []).map(
          (release) => ({
            tag: release.tagName,

            title: release.name,

            publishedAt: release.publishedAt,

            prerelease: release.isPrerelease,

            author:
              release.author?.login ?? null,
          }),
        ),

      commits:
        (
          repository.defaultBranchRef?.target
            ?.history?.nodes ?? []
        ).map((commit) => ({
          sha: commit.oid,

          shortSha: commit.abbreviatedOid,

          message: commit.messageHeadline,

          author:
            commit.author.user?.login ??
            commit.author.name,

          avatar: commit.author.avatarUrl,

          date: commit.committedDate,
        })),
    };

    return success(res, response);
  } catch (err) {
    return failure(
      res,
      err instanceof Error
        ? err.message
        : "Unknown error",
      500,
    );
  }
}