import { useMoviesFeatured } from "./useMoviesFeatured";

import FeaturedMovies from "./MoviesFeatured";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

function HeroSection() {
  // Getting the featured movies
  const { isLoading, movies, error } = useMoviesFeatured();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return <div className="text-red-500">Error fetching movies</div>;

  // Returned JSX
  return (
    <section>
      <Heading>WHAT'S HOT</Heading>
      <FeaturedMovies movies={movies} />
    </section>
  );
}

export default HeroSection;
