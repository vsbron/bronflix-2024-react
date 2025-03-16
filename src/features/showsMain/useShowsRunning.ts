import { useQuery } from "@tanstack/react-query";

import { MOVIES_FEATURED_QUANTITY } from "@/lib/constants";
import { IShowList } from "@/lib/typesAPI";
import { getShows } from "@/services/apiShows";
import { shuffleArray } from "@/utils/helpers";

export function useShowsRunning() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shows-running"],
    queryFn: () => getShows("on_the_air"),
  });

  // Transform the data once it's loaded
  let shows: IShowList[] = [];
  if (data) {
    // Shuffle running shows
    shows = shuffleArray(data).slice(0, MOVIES_FEATURED_QUANTITY);
  }

  return { isLoading, shows, error };
}
