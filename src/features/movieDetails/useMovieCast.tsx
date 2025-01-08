import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getMovieCast } from "@/services/apiActors";

export function useMovieCast() {
  // Getting the id from the url params
  const { movieId } = useParams();

  // Fetching the data using React Query
  const {
    isLoading,
    data: cast,
    error,
  } = useQuery({
    queryKey: ["movie-case", movieId],
    queryFn: () => getMovieCast(movieId!),
  });

  // Return fetched data
  return { isLoading, cast, error };
}
