import { Link } from "react-router-dom";

import { useMoviesTopRated } from "./useMoviesTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import ScorePreview from "@/components/previews/ScorePreview";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IMovieList } from "@/lib/types";

function MoviesTopRated() {
  // Getting the top rated movies
  const { isLoading, movies, error } = useMoviesTopRated();

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading as="h2">TOP RATED MOVIES</Heading>
      {isLoading ? (
        <Loader />
      ) : error || !movies || !movies.length ? (
        <div className="text-red-500">
          {error?.message || "Error fetching top rated movies"}
        </div>
      ) : (
        // Content
        <div className="flex gap-6 h-[40rem]">
          {movies.map((movie: IMovieList) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="block h-full basis-[30rem]"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
                }}
                className="rounded-lg h-full preview-bg relative"
              >
                <ScorePreview score={movie.vote_average!} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default MoviesTopRated;
