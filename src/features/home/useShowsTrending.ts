import { useQuery } from "@tanstack/react-query";

import { SHOWS_TRENDING_QUANTITY } from "@/lib/constants";
import { IShow } from "@/lib/types";
import { getTrendingShows } from "@/services/apiShows";
import { shuffleArray } from "@/utils/helpers";

export function useShowsTrending() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-trending"],
    queryFn: getTrendingShows,
  });

  // Transform the data once it's loaded
  let shows: IShow[] = [];
  if (data) {
    // Shuffle and select 8 trending shows
    shows = shuffleArray(data)
      .slice(0, SHOWS_TRENDING_QUANTITY)
      .map((show: IShow) => ({
        id: show.id,
        name: show.name,
        backdrop_path: show.backdrop_path,
      }));
  }

  return { isLoading, shows, error };
}