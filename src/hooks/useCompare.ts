import { useEffect, useState } from "react";
import { compareRepositories } from "../api/github";

export function useCompare(
  owner: string,
  repo: string,
  base: string,
  head: string,
) {
  const [comparison, setComparison] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    compareRepositories(
      owner,
      repo,
      base,
      head,
    )
      .then(setComparison)
      .finally(() => setLoading(false));
  }, [owner, repo, base, head]);

  return {
    comparison,
    loading,
  };
}
