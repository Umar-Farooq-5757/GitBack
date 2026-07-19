import type { VercelRequest, VercelResponse } from "@vercel/node";
import { restRequest } from "../_lib/rest";
import { success, failure } from "../_lib/response";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  try {
    const {
      owner,
      repo,
      base,
      head,
    } = req.query;
    if (
      typeof owner !== "string" ||
      typeof repo !== "string" ||
      typeof base !== "string" ||
      typeof head !== "string"
    ) {
      return failure(
        res,
        "Missing parameters",
        400,
      );
    }
    const comparison = await restRequest(
      `/repos/${owner}/${repo}/compare/${base}...${head}`,
    );
    return success(
      res,
      comparison,
    );
  } catch (err) {
    return failure(
      res,
      err instanceof Error ? err.message : "Unknown error",
    );
  }
}
