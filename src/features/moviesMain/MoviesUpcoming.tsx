import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMoviesUpcoming } from "@/features/moviesMain/useMoviesUpcoming";

function MoviesUpcoming() {
  // Getting the upcoming movies
  const { isLoading, movies, error } = useMoviesUpcoming();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching upcoming movies"}
      </div>
    );

  // Returned JSX
  return (
    <>
      <Heading as="h2">Upcoming Movies</Heading>
      {movies.length > 0 ? (
        <Previews
          rawPreviews={movies}
          width="26rem"
          height="40rem"
          type="movies"
        />
      ) : (
        <div>
          Sorry, there are no upcoming movies in our database at the moment.{" "}
          <br />
          Please check back later.{" "}
        </div>
      )}
    </>
  );
}

export default MoviesUpcoming;
