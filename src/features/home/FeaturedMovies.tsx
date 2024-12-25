import { Link } from "react-router-dom";

import { useFeatureMovies } from "./useFeatureMovies";

import Heading from "@/components/Heading";
import FeaturedMovieBig from "./FeaturedMovieBig";
import FeaturedMovieSmall from "./FeaturedMovieSmall";
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
      <div className="h-[50rem] grid grid-cols-[1fr_55rem] gap-6">
        <FeaturedMovieBig movie={movies[0]} />
        <FeaturedMovieSmall movie={movies[1]} />
        <FeaturedMovieSmall movie={movies[2]} />
      </div>
    </section>
  );
}

export default FeaturedMovies;
