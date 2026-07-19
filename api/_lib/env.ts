export const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
    throw new Error(
        "Missing GITHUB_TOKEN environment variable."
    );
}