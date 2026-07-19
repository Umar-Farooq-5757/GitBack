import { useEffect, useState } from "react";
import { getActivity } from "../api/github";

export function useActivity(
  owner: string,
  repo: string,
) {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActivity(owner, repo)
      .then(setActivity)
      .finally(() => setLoading(false));
  }, [owner, repo]);

  return {
    activity,
    loading,
  };
}
