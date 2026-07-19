import { useEffect, useState } from "react";
import { getContributors } from "../api/github";

export function useContributors(
  owner: string,
  repo: string,
) {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getContributors(owner, repo)
      .then(setContributors)

      .finally(() => setLoading(false));
  }, [owner, repo]);
  return {
    contributors,
    loading,
  };
}
