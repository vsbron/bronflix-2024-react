import { ShowSimilarProps } from "@/lib/types";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useShowSimilar } from "@/features/showDetails/useShowSimilar";

function ShowSimilar({ showId }: ShowSimilarProps) {
  // Getting the similar shows data from the React Query
  const { isLoading, data: similarShows, error } = useShowSimilar(showId);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !similarShows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching similar shows"}
      </div>
    );
  if (similarShows.length === 0) return null;

  // Returned JSX
  return (
    <section>
      <Heading as="h3">Shows you may also like</Heading>
      <Previews
        rawPreviews={similarShows}
        height="20rem"
        type="tv"
        isTwoRows={true}
      />
    </section>
  );
}

export default ShowSimilar;
