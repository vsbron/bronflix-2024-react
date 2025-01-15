import { useQuery } from "@tanstack/react-query";

import { getMovieCastCrew } from "@/services/apiPerson";

export function useMovieCast(movieId: string) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["movie-cast-crew", movieId],
    queryFn: () => getMovieCastCrew(movieId!),
  });

  // Return fetched data
  return { isLoading, data, error };
}
