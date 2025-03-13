import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMoviesUpcoming } from "@/features/moviesMain/useMoviesUpcoming";

function MoviesCollections() {
  // Getting the upcoming movies and ref for ribbon element
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
    <section>
      <Heading as="h2">Top Movie Franchises</Heading>
      <Previews rawPreviews={movies} pages={2} height="40rem" type="movies" />
    </section>
  );
}

export default MoviesCollections;
