import { useQuery } from "@tanstack/react-query";

import { getMoviesSimilar } from "@/services/apiMovies";

export function useMovieSimilar(movieId: string) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-similar", movieId],
    queryFn: () => getMoviesSimilar(movieId),
  });

  // Return fetched data
  return { isLoading, data, error };
}
