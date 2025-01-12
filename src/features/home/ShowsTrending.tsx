import { useShowsTrending } from "./useShowsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Previews from "@/components/previews/Previews";

function ShowsTrending() {
  // Getting the trending shows and ref for ribbon element
  const { isLoading, shows, error } = useShowsTrending();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching trending shows"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING SHOWS</Heading>
      <Previews
        rawPreviews={shows}
        pages={2}
        height="19rem"
        type="tv"
        isTwoRows={true}
      />
    </section>
  );
}

export default ShowsTrending;
