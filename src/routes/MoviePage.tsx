import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import MovieDetails from "@/features/movieDetails/MovieDetails";

import Wrapper from "@/components/Wrapper";
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

function MoviePage() {
  // Getting the movie data from the loader
  const movie = useLoaderData() as IMovie;

  // Returned JSX
  return (
    <Wrapper>
      <MovieDetails movie={movie} />
    </Wrapper>
  );
}

export default MoviePage;
