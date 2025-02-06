import { getSearchResults } from "@/services/apiSearch";
import { useQuery } from "@tanstack/react-query";

export function useSearchResults(query: string, page: number) {
  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["search", query, page],
    queryFn: () => getSearchResults(query, page),
  });

  // Return fetched data
  return { isLoading, data, error };
}
