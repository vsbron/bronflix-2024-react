import { useQuery } from "@tanstack/react-query";

import { getRandomMovies } from "@/services/apiMovies";

export function useFeatureMovies() {
  // Getting the query function
  const {
    isLoading,
    data: movies,
    error,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: getRandomMovies,
  });

  // Returning all the values
  return { isLoading, movies, error };
}
