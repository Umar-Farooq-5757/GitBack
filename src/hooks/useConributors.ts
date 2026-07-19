import { useEffect, useState } from "react";
import { getContributors } from "../api/github";
import type { Contributor } from "../types/github";

export function useContributors(owner: string, repo: string) {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getContributors(owner, repo)
      .then((data) => setContributors(data.contributors))
      .finally(() => setLoading(false));
  }, [owner, repo]);
  return {
    contributors,
    loading,
  };
}
