import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import MovieDetails from "@/features/movieDetails/MovieDetails";
import { IMovie } from "@/lib/types";
import { getMovie } from "@/services/apiMovies";

// Movie data loader
export const movieLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IMovie> => {
  // Getting the movie using API function
  const movie = await getMovie(params.movieId!);
  // Return movie
  return movie;
};

function Movie() {
  // Getting the movie data from the loader
  const movie = useLoaderData() as IMovie;

  // Returned JSX
  return <MovieDetails movie={movie} />;
}

export default Movie;
