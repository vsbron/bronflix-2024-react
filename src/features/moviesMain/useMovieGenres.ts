import { useQuery } from "@tanstack/react-query";

import { getGenres } from "@/services/apiGenres";

export function useMovieGenres() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-genres"],
    queryFn: () => getGenres("movie"),
  });

  // Return the fetched data
  return { isLoading, data, error };
}
