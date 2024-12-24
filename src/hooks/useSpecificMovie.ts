import { useQuery } from "@tanstack/react-query";

import { getMovie } from "../services/apiMovies";

export function useSpecificMovie(id: string) {
  // Getting the query function
  const {
    isLoading,
    data: movie,
    error,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovie(id),
  });

  // Returning all the values
  return { isLoading, movie, error };
}
