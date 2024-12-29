import { useRef } from "react";

import { useShowsTopRated } from "./useShowsTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import { preparePreviews } from "@/utils/preparePreviews";

function ShowsTopRated() {
  // Getting the top rated shows and ref for ribbon element
  const { isLoading, shows, error } = useShowsTopRated();
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching top rated shows"}
      </div>
    );

  // Prepare preview ribbons
  const preparedPreviews = preparePreviews({
    rawPreviews: shows,
    pages: 2,
    height: "h-[24rem]",
    type: "tv",
  });

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading as="h2">TRENDING SHOWS</Heading>
      <Ribbon length={shows.length} ribbon={ribbonRef}>
        {preparedPreviews}
      </Ribbon>
    </section>
  );
}

export default ShowsTopRated;
