import { useQuery } from "@tanstack/react-query";

import { MOVIES_FEATURED_QUANTITY } from "@/lib/constants";
import { IShowList } from "@/lib/typesAPI";
import { shuffleArray } from "@/utils/helpers";
import { getShows } from "@/services/apiShows";

export function useShowsOnAirToday() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-on-air"],
    queryFn: () => getShows("airing_today"),
  });

  // Transform the data once it's loaded
  let shows: IShowList[] = [];
  if (data) {
    // Shuffle on-air shows
    shows = shuffleArray(data).slice(0, MOVIES_FEATURED_QUANTITY);
  }

  return { isLoading, shows, error };
}
