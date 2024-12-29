import { useRef } from "react";
import { Link } from "react-router-dom";

import { useMoviesTopRated } from "./useMoviesTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import ScorePreview from "@/components/previews/ScorePreview";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IMovieList } from "@/lib/types";

function MoviesTopRated() {
  // Getting the top rated movies and ref for ribbon element
  const { isLoading, movies, error } = useMoviesTopRated();
  const ribbonRef = useRef<HTMLDivElement>(null);

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
        <Ribbon length={movies.length} ribbon={ribbonRef}>
          {movies.map((movie: IMovieList) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="block h-[40rem] basis-[29rem] flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer"
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
        </Ribbon>
      )}
    </section>
  );
}

export default MoviesTopRated;
