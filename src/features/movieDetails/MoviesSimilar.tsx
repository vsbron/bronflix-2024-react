import { useMovieSimilar } from "./useMovieSimilar";
import { MoviesSimilarProps } from "@/lib/types";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Previews from "@/components/previews/Previews";

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

  // Returned JSX
  return (
    <section>
      <Heading as="h3">You may also like</Heading>
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
