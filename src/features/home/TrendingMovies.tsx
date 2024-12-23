import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import { MOVIES_IMG_URL } from "../../lib/constants";
import { useTrendingMovies } from "./useTrendingMovies";

function TrendingMovies() {
  // Getting the random movie
  const { isLoading, movies, error } = useTrendingMovies();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie</div>;

  console.log(movies);

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING MOVIES</Heading>
      <div className="flex gap-6 h-[32rem]">
        {movies.map((movie: any) => (
          <Link to={`/movies/${movie.id}`} className="block h-full basis-96">
            <div
              style={{
                backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
              }}
              className="rounded-lg bg-cover h-full"
            ></div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TrendingMovies;
