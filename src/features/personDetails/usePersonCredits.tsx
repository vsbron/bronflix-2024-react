import { useQuery } from "@tanstack/react-query";

import { getPersonCredits } from "@/services/apiPerson";

export function usePersonCredits(personId: number) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["person-credits", personId],
    queryFn: () => getPersonCredits(personId),
  });

  // Return fetched data
  return { isLoading, data, error };
}
