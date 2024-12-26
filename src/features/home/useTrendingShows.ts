import { useQuery } from "@tanstack/react-query";

import { SHOWS_TRENDING_QUANTITY } from "@/lib/constants";
import { IShow } from "@/lib/types";
import { getTrendingShows } from "@/services/apiShows";
import { shuffleArray } from "@/utils/helpers";

export function useTrendingShows() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-trending"],
    queryFn: getTrendingShows,
  });

  // Transform the data once it's loaded
  let shows: IShow[] = [];
  if (data) {
    // Shuffle and select 8 trending shows
    shows = shuffleArray(data).slice(0, SHOWS_TRENDING_QUANTITY);
  }

  return { isLoading, shows, error };
}
