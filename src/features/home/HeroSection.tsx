import { useMoviesFeatured } from "./useMoviesFeatured";

import FeaturedMovies from "./MoviesFeatured";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

function HeroSection() {
  // Getting the featured movies
  const { isLoading, movies, error } = useMoviesFeatured();

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading>WHAT'S HOT</Heading>
      {isLoading ? (
        <Loader />
      ) : error || !movies || !movies.length ? (
        <div className="text-red-500">
          {error?.message || "Error fetching featured movies"}
        </div>
      ) : (
        // Content
        <FeaturedMovies movies={movies} />
      )}
    </section>
  );
}

export default HeroSection;
