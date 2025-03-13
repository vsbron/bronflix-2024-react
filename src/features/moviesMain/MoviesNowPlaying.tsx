import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMoviesNowPlaying } from "@/features/moviesMain/useMoviesNowPlaying";

function MoviesNowPlaying() {
  // Getting the now playing movies and ref for ribbon element
  const { isLoading, movies, error } = useMoviesNowPlaying();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching now playing movies"}
      </div>
    );

  // Returned JSX
  return (
    <>
      <Heading as="h2">In Theaters Now</Heading>
      <Previews
        rawPreviews={movies}
        width="23rem"
        height="35rem"
        type="movies"
      />
    </>
  );
}

export default MoviesNowPlaying;
