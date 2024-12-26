import { useQuery } from "@tanstack/react-query";

import { MOVIES_FEATURED_QUANTITY } from "@/lib/constants";
import { IMovie } from "@/lib/types";
import { getMovies } from "@/services/apiMovies";
import { shuffleArray } from "@/utils/helpers";

export function useMoviesFeatured() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-trending"],
    queryFn: () => getMovies("popular"),
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
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));
  }

  return { isLoading, movies, error };
}
