import { useQuery } from "@tanstack/react-query";

import { MOVIES_FEATURED_QUANTITY } from "@/lib/constants";
import { IMovieList } from "@/lib/types";
import { getMovies } from "@/services/apiMovies";
import { shuffleArray } from "@/utils/helpers";

export function useMoviesFeatured() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-trending"],
    queryFn: () => getMovies("popular"),
  });

  // Transform the data once it's loaded
  let movies: IMovieList[] = [];
  if (data) {
    // Shuffle and select featured movies
    movies = shuffleArray(data)
      .slice(0, MOVIES_FEATURED_QUANTITY)
      .map((movie: IMovieList) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        release_date: movie.release_date,
        original_language: movie.original_language,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        genre_ids: movie.genre_ids,
      }));
  }

  return { isLoading, movies, error };
}
