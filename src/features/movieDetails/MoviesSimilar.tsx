import { MoviesSimilarProps } from "@/lib/types";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMovieSimilar } from "@/features/movieDetails/useMovieSimilar";

function MoviesSimilar({ movieId }: MoviesSimilarProps) {
  // Getting the similar movies data from the React Query
  const { isLoading, data: similarMovies, error } = useMovieSimilar(movieId);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !similarMovies)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching similar movies"}
      </div>
    );
  if (similarMovies.length === 0) return null;

  // Returned JSX
  return (
    <section>
      <Heading as="h3">Movies you may also like</Heading>
      <Previews
        rawPreviews={similarMovies}
        width="18rem"
        height="27rem"
        type="movies"
      />
    </section>
  );
}

export default MoviesSimilar;
