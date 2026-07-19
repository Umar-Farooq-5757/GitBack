import { GITHUB_TOKEN } from "./env";

const BASE_URL = "https://api.github.com";

export async function restRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("GitHub REST request failed.");
  }
  return response.json();
}
