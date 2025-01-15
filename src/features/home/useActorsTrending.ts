import { useQuery } from "@tanstack/react-query";

import { ACTORS_TRENDING_QUANTITY } from "@/lib/constants";
import { IPersonList } from "@/lib/typesAPI";
import { getTrendingActors } from "@/services/apiPerson";
import { shuffleArray } from "@/utils/helpers";

export function useActorsTrending() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["actors-trending"],
    queryFn: getTrendingActors,
  });

  // Transform the data once it's loaded
  let actors: IPersonList[] = [];
  if (data) {
    // Shuffle trending actors
    actors = shuffleArray(data).slice(0, ACTORS_TRENDING_QUANTITY);
  }

  return { isLoading, actors, error };
}
