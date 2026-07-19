import type { VercelRequest, VercelResponse } from "@vercel/node";
import { graphqlRequest } from "../_lib/graphql";
import { success, failure } from "../_lib/response";
import { REPOSITORY_QUERY } from "../_lib/queries";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  try {
    const {
      owner,
      repo,
    } = req.query;
    if (
      !owner ||
      !repo ||
      typeof owner !== "string" ||
      typeof repo !== "string"
    ) {
      return failure(
        res,
        "Missing owner or repo.",
        400,
      );
    }

    const data = await graphqlRequest(
      REPOSITORY_QUERY,
      {
        owner,
        repo,
      },
    );

    return success(
      res,
      data,
    );
  } catch (err) {
    return failure(
      res,
      err instanceof Error ? err.message : "Unknown error",
      500,
    );
  }
}
