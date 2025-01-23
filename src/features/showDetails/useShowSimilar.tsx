import { useQuery } from "@tanstack/react-query";

import { getShowSimilar } from "@/services/apiShows";

export function useShowSimilar(showId: string) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["show-similar", showId],
    queryFn: () => getShowSimilar(showId),
  });

  // Return fetched data
  return { isLoading, data, error };
}
