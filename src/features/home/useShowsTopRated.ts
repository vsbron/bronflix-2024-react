import { useQuery } from "@tanstack/react-query";

import {
  SHOWS_TOP_RATED_QUANTITY,
  SHOWS_TOP_RATED_QUANTITY_MD,
} from "@/lib/constants";
import { IShowList } from "@/lib/typesAPI";
import { getShows } from "@/services/apiShows";
import { shuffleArray } from "@/utils/helpers";
import { useResponsive } from "@/hooks/useResponsive";

export function useShowsTopRated() {
  // Getting the MD media query from custom hook
  const { isMD } = useResponsive();

  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-top-rated"],
    queryFn: () => getShows("top_rated"),
  });

  // Transform the data once it's loaded
  let shows: IShowList[] = [];
  if (data) {
    // Shuffle top rated shows
    shows = shuffleArray(data).slice(
      0,
      isMD ? SHOWS_TOP_RATED_QUANTITY_MD : SHOWS_TOP_RATED_QUANTITY
    );
  }

  return { isLoading, shows, error };
}
