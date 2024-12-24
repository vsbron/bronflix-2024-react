import { useQuery } from "@tanstack/react-query";
import { getTrendingShows } from "../../services/apiShows";

export function useTrendingShows() {
  // Getting the query function
  const {
    isLoading,
    data: shows,
    error,
  } = useQuery({
    queryKey: ["shows"],
    queryFn: getTrendingShows,
  });

  // Returning all the values
  return { isLoading, shows, error };
}
