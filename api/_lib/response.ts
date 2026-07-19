import type { VercelResponse } from "@vercel/node";

export function success(
  res: VercelResponse,
  data: unknown,
) {
  return res.status(200).json({
    success: true,
    data,
  });
}

export function failure(
  res: VercelResponse,
  message: string,
  status = 500,
) {
  return res.status(status).json({
    success: false,
    error: message,
  });
}
