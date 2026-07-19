import { useEffect, useState } from "react";
import { getActivity } from "../api/github";
import type { ActivityEvent } from "../types/github";

export function useActivity(
  owner: string,
  repo: string,
) {
  const [activity, setActivity] =
    useState<ActivityEvent[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActivity(owner, repo)
      .then((data) => setActivity(data.events))
      .finally(() => setLoading(false));
  }, [owner, repo]);

  return {
    activity,
    loading,
  };
}