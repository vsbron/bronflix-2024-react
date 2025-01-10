import { useQuery } from "@tanstack/react-query";

import { getMovieCastCrew } from "@/services/apiActors";
import { IMovie } from "@/lib/typesAPI";

export function useMovieCast(movie: IMovie) {
  // Getting the id from the url params
  const { id: movieId } = movie;

  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["movie-case", movieId],
    queryFn: () => getMovieCastCrew(movieId!),
  });

  // Return fetched data
  return { isLoading, data, error };
}
