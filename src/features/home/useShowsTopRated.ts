import { useQuery } from "@tanstack/react-query";

import { SHOWS_TOP_RATED_QUANTITY } from "@/lib/constants";
import { IShowList } from "@/lib/typesAPI";
import { getShows } from "@/services/apiShows";
import { shuffleArray } from "@/utils/helpers";

export function useShowsTopRated() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-top-rated"],
    queryFn: () => getShows("top_rated"),
  });

  // Transform the data once it's loaded
  let shows: IShowList[] = [];
  if (data) {
    // Shuffle top rated shows
    shows = shuffleArray(data).slice(0, SHOWS_TOP_RATED_QUANTITY);
  }

  return { isLoading, shows, error };
}
