import { ShowSimilarProps } from "@/lib/types";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useShowSimilar } from "@/features/showDetails/useShowSimilar";

function ShowSimilar({ showId }: ShowSimilarProps) {
  // Getting the similar movies data from the React Query
  const { isLoading, data: similarMovies, error } = useShowSimilar(showId);

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

export default ShowSimilar;
