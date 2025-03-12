import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMoviesNowPlaying } from "./useMoviesNowPlaying";

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
    <section>
      <Heading as="h2">In Theaters Now</Heading>
      <Previews
        rawPreviews={movies}
        width="26rem"
        height="40rem"
        type="movies"
      />
    </section>
  );
}

export default MoviesNowPlaying;
