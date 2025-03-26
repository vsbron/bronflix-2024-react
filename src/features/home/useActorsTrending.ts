import { useQuery } from "@tanstack/react-query";

import { useResponsive } from "@/hooks/useResponsive";
import {
  ACTORS_TRENDING_QUANTITY,
  ACTORS_TRENDING_QUANTITY_MD,
} from "@/lib/constants";
import { IPersonList } from "@/lib/typesAPI";
import { getTrendingActors } from "@/services/apiPerson";
import { shuffleArray } from "@/utils/helpers";

export function useActorsTrending() {
  // Getting the MD media query from custom hook
  const { isMD } = useResponsive();

  const { isLoading, data, error } = useQuery({
    queryKey: ["actors-trending"],
    queryFn: getTrendingActors,
  });

  // Transform the data once it's loaded
  let actors: IPersonList[] = [];
  if (data) {
    // Shuffle trending actors
    actors = shuffleArray(data).slice(
      0,
      isMD ? ACTORS_TRENDING_QUANTITY_MD : ACTORS_TRENDING_QUANTITY
    );
  }

  return { isLoading, actors, error };
}
