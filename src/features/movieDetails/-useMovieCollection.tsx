import { getMovieCollection } from "@/services/apiMovies";
import { useQuery } from "@tanstack/react-query";

export function useMovieCollection(collectionId: number) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["movie-case", collectionId],
    queryFn: () => getMovieCollection(collectionId),
  });

  // Return fetched data
  return { isLoading, data, error };
}
