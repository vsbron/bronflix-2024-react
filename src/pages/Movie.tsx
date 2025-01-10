import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import MovieDetails from "@/features/movieDetails/MovieDetails";
import { IMovie } from "@/lib/typesAPI";
import { getMovie } from "@/services/apiMovies";
import RelatedMovies from "@/features/movieDetails/RelatedMovies";
import MovieCastCrew from "@/features/movieDetails/MovieCastCrew";

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

  // Checking if movie is a part of the collection
  const isCollection = !!movie.belongs_to_collection?.id;

  // Returned JSX
  return (
    <>
      <MovieDetails movie={movie} />
      <MovieCastCrew movie={movie} />
      {isCollection && (
        <RelatedMovies
          collectionId={movie.belongs_to_collection.id}
          movieId={movie.id}
        />
      )}
    </>
  );
}

export default Movie;
