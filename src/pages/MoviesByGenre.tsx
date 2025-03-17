import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IMovieList } from "@/lib/typesAPI";
import { getMoviesGenre } from "@/services/apiMovies";

import Heading from "@/components/ui/Heading";

// Movie collection data loader
export const moviesByGenreLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IMovieList[]> => {
  // Getting the movies using API function
  const movies = await getMoviesGenre(params.genreId!);
  // Return movies
  return movies;
};

function MoviesByGenre() {
  // Getting the movies data from the loader
  const movies = useLoaderData() as IMovieList[];

  // Returned JSX
  return (
    <>
      <Heading>Movies by Genre</Heading>
      {movies.map((movie: IMovieList) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </>
  );
}

export default MoviesByGenre;
