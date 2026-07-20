export const REPOSITORY_QUERY = `
query Repository(
  $owner: String!
  $repo: String!
) {
  repository(
    owner: $owner
    name: $repo
  ) {
    id
    name
    nameWithOwner
    description
    homepageUrl
    createdAt
    updatedAt
    pushedAt
    isPrivate
    isArchived
    isFork
    isMirror
    visibility
    diskUsage
    url

    primaryLanguage {
      name
      color
    }

    owner {
      login
      avatarUrl
      url
    }

    licenseInfo {
      name
      spdxId
    }

    repositoryTopics(first: 20) {
      nodes {
        topic {
          name
        }
      }
    }

    stargazerCount
    forkCount

    watchers {
      totalCount
    }

    openIssues: issues(states: OPEN) {
      totalCount
    }

    pullRequests {
      totalCount
    }

    discussions {
      totalCount
    }

    languages(
      first: 20
      orderBy: {
        field: SIZE
        direction: DESC
      }
    ) {
      totalSize

      edges {
        size

        node {
          name
          color
        }
      }
    }

    refs(
      refPrefix: "refs/heads/"
      first: 100
      orderBy: {
        field: ALPHABETICAL
        direction: ASC
      }
    ) {
      totalCount

      nodes {
        name

        target {
          oid
        }
      }
    }

    releases(
      first: 25
      orderBy: {
        field: CREATED_AT
        direction: DESC
      }
    ) {
      totalCount

      nodes {
        tagName
        name
        createdAt
        publishedAt
        isDraft
        isPrerelease
        description

        author {
          login
          avatarUrl
        }
      }
    }

    defaultBranchRef {
      name

      target {
        ... on Commit {

          history(first: 25) {
            totalCount

            nodes {
              oid
              abbreviatedOid
              committedDate
              messageHeadline
              additions
              deletions
              changedFilesIfAvailable

              author {
                name
                avatarUrl

                user {
                  login
                }
              }
            }
          }

        }
      }
    }
  }
}
`;