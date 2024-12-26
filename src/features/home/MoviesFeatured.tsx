import { useMoviesFeatured } from "./useMoviesFeatured";

import FeaturedMoviesRibbon from "./MoviesFeaturedRibbon";
import { MovieFeaturedBig, MovieFeaturedSmall } from "./MoviesFeaturedTiles";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

function MoviesFeatured() {
  // Getting the random movie
  const { isLoading, movies, error } = useMoviesFeatured();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return <div className="text-red-500">Error fetching movie</div>;

  // Returned JSX
  return (
    <section>
      <Heading>WHAT'S HOT</Heading>
      <div className="grid grid-cols-[1fr_55rem] gap-6">
        <MovieFeaturedBig movie={movies[0]} />
        <MovieFeaturedSmall movie={movies[1]} />
        <MovieFeaturedSmall movie={movies[2]} />
        <FeaturedMoviesRibbon movies={movies.slice(2, -1)} />
      </div>
    </section>
  );
}

export default MoviesFeatured;
