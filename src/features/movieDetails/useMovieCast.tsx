import { useQuery } from "@tanstack/react-query";

import { getMediaCastCrew } from "@/services/apiGeneral";

export function useMovieCast(movieId: number) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["movie-cast-crew", movieId],
    queryFn: () => getMediaCastCrew(movieId, "movie"),
  });

  // Return fetched data
  return { isLoading, data, error };
}
