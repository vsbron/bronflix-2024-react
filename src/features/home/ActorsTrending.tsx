import { useRef } from "react";

import { useActorsTrending } from "./useActorsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import { PreparePreviews } from "@/components/previews/PreparePreviews";

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
  const preparedPreviews = PreparePreviews({
    rawPreviews: actors,
    pages: 2,
    height: "h-[25rem]",
    type: "actors",
  });

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING ACTORS</Heading>
      <Ribbon length={actors.length}>{preparedPreviews}</Ribbon>
    </section>
  );
}

export default ActorsTrending;
