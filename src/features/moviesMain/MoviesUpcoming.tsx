import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMoviesUpcoming } from "@/features/moviesMain/useMoviesUpcoming";

function MoviesUpcoming() {
  // Getting the upcoming movies and ref for ribbon element
  const { isLoading, movies, error } = useMoviesUpcoming();

  console.log(movies);

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
    <section>
      <Heading as="h2">Upcoming Movies</Heading>
      <Previews
        rawPreviews={movies}
        width="26rem"
        height="40rem"
        type="movies"
      />
    </section>
  );
}

export default MoviesUpcoming;
