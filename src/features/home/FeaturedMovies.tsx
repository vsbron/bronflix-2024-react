import { useFeatureMovies } from "./useFeatureMovies";

import FeaturedMoviesRibbon from "./FeaturedMoviesRibbon";
import { FeaturedMovieBig, FeaturedMovieSmall } from "./FeaturedMoviesTiles";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

function FeaturedMovies() {
  // Getting the random movie
  const { isLoading, movies, error } = useFeatureMovies();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return <div className="text-red-500">Error fetching movie</div>;

  // Returned JSX
  return (
    <section>
      <Heading>WHAT'S HOT</Heading>
      <div className="grid grid-cols-[1fr_55rem] gap-6">
        <FeaturedMovieBig movie={movies[0]} />
        <FeaturedMovieSmall movie={movies[1]} />
        <FeaturedMovieSmall movie={movies[2]} />
        <FeaturedMoviesRibbon movies={movies.slice(2, -1)} />
      </div>
    </section>
  );
}

export default FeaturedMovies;
