import { useQuery } from "@tanstack/react-query";

import { ACTORS_TRENDING_QUANTITY } from "@/lib/constants";
import { IActor } from "@/lib/types";
import { getTrendingActors } from "@/services/apiActors";
import { shuffleArray } from "@/utils/helpers";

export function useTrendingActors() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["actors-trending"],
    queryFn: getTrendingActors,
  });

  // Transform the data once it's loaded
  let actors: IActor[] = [];
  if (data) {
    // Shuffle and select trending actors
    actors = shuffleArray(data).slice(0, ACTORS_TRENDING_QUANTITY);
  }

  return { isLoading, actors, error };
}
