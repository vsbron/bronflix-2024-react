import { useQuery } from "@tanstack/react-query";

import { useResponsive } from "@/hooks/useResponsive";
import {
  SHOWS_TRENDING_QUANTITY,
  SHOWS_TRENDING_QUANTITY_MD,
} from "@/lib/constants";
import { IShowList } from "@/lib/typesAPI";
import { getShows } from "@/services/apiShows";
import { shuffleArray } from "@/utils/helpers";

export function useShowsTrending() {
  // Getting the MD media query from custom hook
  const { isMD } = useResponsive();

  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-trending"],
    queryFn: () => getShows("popular"),
  });

  // Transform the data once it's loaded
  let shows: IShowList[] = [];
  if (data) {
    // Shuffle trending shows
    shows = shuffleArray(data).slice(
      0,
      isMD ? SHOWS_TRENDING_QUANTITY_MD : SHOWS_TRENDING_QUANTITY
    );
  }

  return { isLoading, shows, error };
}
