import { useShowsTrending } from "./useShowsTrending";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";

function ShowsPopular() {
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
      <Heading as="h2">POPULAR SHOWS</Heading>
      <Previews rawPreviews={shows} height="19rem" type="tv" isTwoRows={true} />
    </section>
  );
}

export default ShowsPopular;
