import { useRef } from "react";

import { useActorsTrending } from "./useActorsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import { preparePreviews } from "@/utils/preparePreviews";

function ActorsTrending() {
  // Getting the trending actors and ref for ribbon element
  const { isLoading, actors, error } = useActorsTrending();
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !actors)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching top rated actors"}
      </div>
    );

  // Prepare preview ribbons
  const preparedPreviews = preparePreviews({
    rawPreviews: actors,
    pages: 2,
    height: "h-[25rem]",
    type: "actors",
  });

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading as="h2">TRENDING ACTORS</Heading>
      <Ribbon length={actors.length} ribbon={ribbonRef}>
        {preparedPreviews}
      </Ribbon>
    </section>
  );
}

export default ActorsTrending;
