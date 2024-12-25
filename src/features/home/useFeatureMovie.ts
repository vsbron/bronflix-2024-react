import { useQuery } from "@tanstack/react-query";
import { getRandomMovie } from "../../services/apiMovies";

export function useFeatureMovie() {
  // Getting the query function
  const {
    isLoading,
    data: movie,
    error,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: getRandomMovie,
  });

  // Returning all the values
  return { isLoading, movie, error };
}
