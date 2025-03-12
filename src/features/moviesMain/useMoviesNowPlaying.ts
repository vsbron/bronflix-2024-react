import { useQuery } from "@tanstack/react-query";

import { MOVIES_FEATURED_QUANTITY } from "@/lib/constants";
import { IMovieList } from "@/lib/typesAPI";
import { getMovies } from "@/services/apiMovies";
import { shuffleArray } from "@/utils/helpers";

export function useMoviesNowPlaying() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-now-playing"],
    queryFn: () => getMovies("now_playing"),
  });

  // Transform the data once it's loaded
  let movies: IMovieList[] = [];
  if (data) {
    // Shuffle now playing movies
    movies = shuffleArray(data).slice(0, MOVIES_FEATURED_QUANTITY);
  }

  return { isLoading, movies, error };
}
