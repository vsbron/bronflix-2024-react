import { useQuery, useQueryClient } from "@tanstack/react-query";

import { SEARCH_RESULTS_PAGE } from "@/lib/constants";
import { getSearchResults } from "@/services/apiSearch";

export function useSearchResults(query: string, page: number) {
  // Getting the query client for pre-fetching
  const queryClient = useQueryClient();

  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["search", query, page],
    queryFn: () => getSearchResults(query, page),
  });

  // Adding the query, but with increased page number (if not on the last page)
  page < data!.total_pages &&
    queryClient.prefetchQuery({
      queryKey: ["search", query, page + 1],
      queryFn: () => getSearchResults(query, page + 1),
    });
  // Adding the query, but with decreased page number (if not on the first page)
  page > 1 &&
    queryClient.prefetchQuery({
      queryKey: ["search", query, page - 1],
      queryFn: () => getSearchResults(query, page - 1),
    });

  // Return fetched data
  return { isLoading, data, error };
}
