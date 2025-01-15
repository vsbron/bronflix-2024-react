import { useMoviesTopRated } from "./useMoviesTopRated";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";

function MoviesTopRated() {
  // Getting the top rated movies and ref for ribbon element
  const { isLoading, movies, error } = useMoviesTopRated();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching top rated movies"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TOP RATED MOVIES</Heading>
      <Previews rawPreviews={movies} pages={3} height="40rem" type="movies" />
    </section>
  );
}

export default MoviesTopRated;
