import { useQuery } from "@tanstack/react-query";

import { getMediaSimilar } from "@/services/apiGeneral";

export function useShowSimilar(showId: string) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["show-similar", showId],
    queryFn: () => getMediaSimilar(showId, "tv"),
  });

  // Return fetched data
  return { isLoading, data, error };
}
