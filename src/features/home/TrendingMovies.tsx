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
      <div className="flex gap-6 h-96">
        {movies.map((movie: any) => (
          <div
            style={{
              backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
            }}
            className="rounded-lg h-[100%] basis-72 bg-cover"
          ></div>
        ))}
      </div>
    </section>
  );
}

export default TrendingMovies;
