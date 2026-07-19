import { GITHUB_TOKEN } from "./env";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

export async function graphqlRequest<T>(
  query: string,
  variables: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(
    GITHUB_GRAPHQL_ENDPOINT,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  );

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }
  return json.data;
}
