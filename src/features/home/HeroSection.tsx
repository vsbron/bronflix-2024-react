import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import MoviesFeatured from "@/features/home/MoviesFeatured";
import { useMoviesFeatured } from "@/features/home/useMoviesFeatured";

function HeroSection() {
  // Getting the featured movies
  const { isLoading, movies, error } = useMoviesFeatured();

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading>WHAT'S HOT?</Heading>
      {isLoading ? (
        <Loader />
      ) : error || !movies || !movies.length ? (
        <div className="text-red-500">
          {error?.message || "Error fetching featured movies"}
        </div>
      ) : (
        // Content
        <MoviesFeatured movies={movies} />
      )}
    </section>
  );
}

export default HeroSection;
