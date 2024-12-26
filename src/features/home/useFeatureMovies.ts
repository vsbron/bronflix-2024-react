import { useQuery } from "@tanstack/react-query";

import { MOVIES_FEATURED_QUANTITY } from "@/lib/constants";
import { IMovie } from "@/lib/types";
import { getTrendingMovies } from "@/services/apiMovies";
import { shuffleArray } from "@/utils/helpers";

export function useFeatureMovies() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-trending"],
    queryFn: getTrendingMovies,
  });

  // Transform the data once it's loaded
  let movies: IMovie[] = [];
  if (data) {
    // Shuffle and select featured movies
    movies = shuffleArray(data)
      .slice(0, MOVIES_FEATURED_QUANTITY)
      .map((movie: IMovie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
      }));
  }

  return { isLoading, movies, error };
}
