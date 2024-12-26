import { Link } from "react-router-dom";

import { useMoviesTopRated } from "./useMoviesTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IMovie } from "@/lib/types";

function MoviesTopRated() {
  // Getting the trending movies
  const { isLoading, movies, error } = useMoviesTopRated();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return <div className="text-red-500">Error fetching movies</div>;

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TOP RATED MOVIES</Heading>
      {movies?.length ? (
        <div className="flex gap-6 h-[40rem]">
          {movies.map((movie: IMovie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="block h-full basis-[30rem]"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
                }}
                className="rounded-lg h-full preview-bg"
              ></div>
            </Link>
          ))}
        </div>
      ) : (
        <div>Sorry, no movies available</div>
      )}
    </section>
  );
}

export default MoviesTopRated;
