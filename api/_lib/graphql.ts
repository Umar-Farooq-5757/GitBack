import { getGithubToken } from "./env";

const token = getGithubToken();
const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
console.log("TOKEN EXISTS:", !!token);
export async function graphqlRequest<T>(
  query: string,
  variables: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(
    GITHUB_GRAPHQL_ENDPOINT,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  );

  const json = await response.json();
  console.log(json);

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }
  return json.data;
}
