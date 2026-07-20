export function getGithubToken(): string {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("Missing GITHUB_TOKEN environment variable.");
  }

  return token;
}