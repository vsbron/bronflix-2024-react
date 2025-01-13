import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IMovie } from "@/lib/typesAPI";
import { getMovie } from "@/services/apiMovies";

import MovieCastCrew from "@/features/movieDetails/MovieCastCrew";
import MovieCollectionLink from "@/features/movieDetails/MovieCollectionLink";
import MovieDetails from "@/features/movieDetails/MovieDetails";
import MoviesSimilar from "@/features/movieDetails/MoviesSimilar";

// Movie data loader
export const movieLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IMovie> => {
  // Getting the movie using API function
  const movie = await getMovie(params.movieId!);
  // Return movie
  return movie;
};

// The component
function Movie() {
  // Getting the movie data from the loader
  const movie = useLoaderData() as IMovie;

  console.log(movie.belongs_to_collection);

  // Checking whether movie is a part of movie collection
  const collection = movie.belongs_to_collection;

  // Returned JSX
  return (
    <>
      <MovieDetails movie={movie} />
      {!!collection && <MovieCollectionLink collection={collection} />}
      <MovieCastCrew movieId={movie.id} />
      <MoviesSimilar movieId={movie.id} />
    </>
  );
}

export default Movie;
