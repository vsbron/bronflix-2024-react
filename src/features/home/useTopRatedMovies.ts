import { useQuery } from "@tanstack/react-query";

import { MOVIES_TOP_RATED_QUANTITY } from "@/lib/constants";
import { IMovie } from "@/lib/types";
import { getTopRatedMovies } from "@/services/apiMovies";
import { shuffleArray } from "@/utils/helpers";

export function useTopRatedMovies() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-top-rated"],
    queryFn: getTopRatedMovies,
  });

  // Transform the data once it's loaded
  let movies: IMovie[] = [];
  if (data) {
    // Shuffle and select top rated movies
    movies = shuffleArray(data)
      .slice(0, MOVIES_TOP_RATED_QUANTITY)
      .map((movie: IMovie) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      }));
  }

  return { isLoading, movies, error };
}
