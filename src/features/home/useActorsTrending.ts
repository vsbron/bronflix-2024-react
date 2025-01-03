import { useQuery } from "@tanstack/react-query";

import { ACTORS_TRENDING_QUANTITY } from "@/lib/constants";
import { IPersonList } from "@/lib/typesAPI";
import { getTrendingActors } from "@/services/apiActors";
import { shuffleArray } from "@/utils/helpers";

export function useActorsTrending() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["actors-trending"],
    queryFn: getTrendingActors,
  });

  // Transform the data once it's loaded
  let actors: IPersonList[] = [];
  if (data) {
    // Shuffle and select trending actors
    actors = shuffleArray(data)
      .slice(0, ACTORS_TRENDING_QUANTITY)
      .map((actor: IPersonList) => ({
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path,
      }));
  }

  return { isLoading, actors, error };
}
