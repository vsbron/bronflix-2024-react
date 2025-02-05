import { getSearchResults } from "@/services/apiSearch";
import { useQuery } from "@tanstack/react-query";

export function useSearchResults(query: string) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getSearchResults(query),
  });

  // Return fetched data
  return { isLoading, data, error };
}
