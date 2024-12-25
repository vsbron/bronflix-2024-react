import { useQuery } from "@tanstack/react-query";

import { getTrendingMovies } from "@/services/apiMovies";

export function useTrendingMovies() {
  // Getting the query function
  const {
    isLoading,
    data: movies,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getTrendingMovies,
  });

  // Returning all the values
  return { isLoading, movies, error };
}
