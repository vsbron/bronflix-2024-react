import { useQuery } from "@tanstack/react-query";

import { SHOWS_TRENDING_QUANTITY } from "@/lib/constants";
import { IShowList } from "@/lib/typesAPI";
import { getShows } from "@/services/apiShows";
import { shuffleArray } from "@/utils/helpers";

export function useShowsTrending() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-trending"],
    queryFn: () => getShows("popular"),
  });

  // Transform the data once it's loaded
  let shows: IShowList[] = [];
  if (data) {
    // Shuffle and select trending shows
    shows = shuffleArray(data)
      .slice(0, SHOWS_TRENDING_QUANTITY)
      .map((show: IShowList) => ({
        id: show.id,
        name: show.name,
        backdrop_path: show.backdrop_path,
        vote_average: show.vote_average,
      }));
  }

  return { isLoading, shows, error };
}
