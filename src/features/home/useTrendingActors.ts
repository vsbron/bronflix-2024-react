import { useQuery } from "@tanstack/react-query";
import { getTrendingActors } from "@/services/apiActors";

export function useTrendingActors() {
  // Getting the query function
  const {
    isLoading,
    data: actors,
    error,
  } = useQuery({
    queryKey: ["actors"],
    queryFn: getTrendingActors,
  });

  // Returning all the values
  return { isLoading, actors, error };
}
