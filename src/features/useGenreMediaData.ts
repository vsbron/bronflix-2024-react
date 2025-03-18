import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getGenresMedia } from "@/services/apiGenres";

export function useGenreMediaData(genreId: string, page: number) {
  // Getting the query client for pre-fetching
  const queryClient = useQueryClient();

  // Fetching the data using React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["genres-media", genreId, page],
    queryFn: () => getGenresMedia(genreId, page),
  });

  // Adding the query, but with increased page number (if not on the last page)
  page < data?.total_pages! &&
    queryClient.prefetchQuery({
      queryKey: ["genres-media", genreId, page + 1],
      queryFn: () => getGenresMedia(genreId, page + 1),
    });
  // Adding the query, but with decreased page number (if not on the first page)
  page > 1 &&
    queryClient.prefetchQuery({
      queryKey: ["genres-media", genreId, page - 1],
      queryFn: () => getGenresMedia(genreId, page - 1),
    });

  // Return fetched data
  return { isLoading, data, error };
}
