import { Link } from "react-router-dom";

import { useTrendingMovies } from "./useTrendingMovies";

import Heading from "@/components/Heading";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IMovie } from "@/lib/types";

function TrendingMovies() {
  // Getting the trending movies
  const { isLoading, movies, error } = useTrendingMovies();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies</div>;

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING MOVIES</Heading>
      {movies?.length ? (
        <div className="flex gap-6 h-[32rem]">
          {movies.map((movie: IMovie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="block h-full basis-96"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
                }}
                className="rounded-lg bg-cover h-full"
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

export default TrendingMovies;
