import { useQuery } from "@tanstack/react-query";

import { getMediaCastCrew } from "@/services/apiGeneral";

export function useShowCast(showId: number) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["show-cast-crew", showId],
    queryFn: () => getMediaCastCrew(showId, "tv"),
  });

  // Return fetched data
  return { isLoading, data, error };
}
