import { useQuery } from "@tanstack/react-query";

import { getGenres } from "@/services/apiGenres";

export function useShowGenres() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["tv-genres"],
    queryFn: () => getGenres("tv"),
  });

  // Return the fetched data
  return { isLoading, data, error };
}
