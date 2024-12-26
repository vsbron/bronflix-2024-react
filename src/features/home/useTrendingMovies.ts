import { useQuery } from "@tanstack/react-query";

import { MOVIES_TRENDING_QUANTITY } from "@/lib/constants";
import { IMovie } from "@/lib/types";
import { getTrendingMovies } from "@/services/apiMovies";
import { shuffleArray } from "@/utils/helpers";

export function useTrendingMovies() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-trending"],
    queryFn: getTrendingMovies,
  });

  // Transform the data once it's loaded
  let movies: IMovie[] = [];
  if (data) {
    // Shuffle and select trending movies
    movies = shuffleArray(data)
      .slice(0, MOVIES_TRENDING_QUANTITY)
      .map((movie: IMovie) => ({
        id: movie.id,
        poster_path: movie.poster_path,
      }));
  }

  return { isLoading, movies, error };
}
