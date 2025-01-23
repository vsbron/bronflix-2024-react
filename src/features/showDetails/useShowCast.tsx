import { useQuery } from "@tanstack/react-query";

import { getShowCastCrew } from "@/services/apiPerson";

export function useShowCast(showId: string) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["show-cast-crew", showId],
    queryFn: () => getShowCastCrew(showId!),
  });

  // Return fetched data
  return { isLoading, data, error };
}
