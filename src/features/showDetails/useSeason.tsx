import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getSeason } from "@/services/apiShows";

export function useSeason(seasonNumber: string) {
  // Getting the show ID from URL
  const { showId } = useParams();

  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["season", showId, seasonNumber],
    queryFn: () => getSeason(showId!, seasonNumber),
  });

  // Return fetched data
  return { isLoading, data, error };
}
