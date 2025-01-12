import { useShowsTopRated } from "./useShowsTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Previews from "@/components/previews/Previews";

function ShowsTopRated() {
  // Getting the top rated shows and ref for ribbon element
  const { isLoading, shows, error } = useShowsTopRated();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching top rated shows"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TOP RATED SHOWS</Heading>
      <Previews
        rawPreviews={shows}
        pages={2}
        height="24rem"
        type="tv"
        isTwoRows={true}
      />
    </section>
  );
}

export default ShowsTopRated;
