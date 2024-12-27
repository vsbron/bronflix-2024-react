import { useQuery } from "@tanstack/react-query";

import { MOVIES_TOP_RATED_QUANTITY } from "@/lib/constants";
import { IMovieList } from "@/lib/types";
import { getMovies } from "@/services/apiMovies";
import { shuffleArray } from "@/utils/helpers";

export function useMoviesTopRated() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-top-rated"],
    queryFn: () => getMovies("top_rated"),
  });

  // Transform the data once it's loaded
  let movies: IMovieList[] = [];
  if (data) {
    // Shuffle and select top rated movies
    movies = shuffleArray(data)
      .slice(0, MOVIES_TOP_RATED_QUANTITY)
      .map((movie: IMovieList) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      }));
  }

  return { isLoading, movies, error };
}
