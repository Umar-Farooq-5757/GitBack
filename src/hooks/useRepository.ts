import { useEffect, useState } from "react";
import { getRepository } from "../api/github";

export function useRepository(
  owner: string,
  repo: string,
) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const repository = await getRepository(
          owner,
          repo,
        );
        setData(repository);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [owner, repo]);

  return {
    data,
    loading,
    error,
  };
}
