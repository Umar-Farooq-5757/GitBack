import type { VercelRequest, VercelResponse } from "@vercel/node";

import { restRequest } from "../_lib/rest";
import { success, failure } from "../_lib/response";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { owner, repo } = req.query;

    if (typeof owner !== "string" || typeof repo !== "string") {
      return failure(res, "Missing owner or repo", 400);
    }

    const contributors = await restRequest(
      `/repos/${owner}/${repo}/contributors?per_page=100`,
    );

    return success(res, contributors);
  } catch (err) {
    return failure(res, err instanceof Error ? err.message : "Unknown error");
  }
}
