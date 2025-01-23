import { useQuery } from "@tanstack/react-query";

import { getMediaSimilar } from "@/services/apiGeneral";

export function useMovieSimilar(movieId: string) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-similar", movieId],
    queryFn: () => getMediaSimilar(movieId, "movie"),
  });

  // Return fetched data
  return { isLoading, data, error };
}
