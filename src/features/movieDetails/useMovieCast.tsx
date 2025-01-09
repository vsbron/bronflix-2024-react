import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getMovieCastCrew } from "@/services/apiActors";

export function useMovieCast() {
  // Getting the id from the url params
  const { movieId } = useParams();

  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["movie-case", movieId],
    queryFn: () => getMovieCastCrew(movieId!),
  });

  // Return fetched data
  return { isLoading, data, error };
}
