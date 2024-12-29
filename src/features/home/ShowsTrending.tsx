import { useRef } from "react";

import { useShowsTrending } from "./useShowsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import { preparePreviews } from "@/utils/preparePreviews";

function ShowsTrending() {
  // Getting the trending shows and ref for ribbon element
  const { isLoading, shows, error } = useShowsTrending();
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching trending shows"}
      </div>
    );

  // Prepare preview ribbons
  const preparedPreviews = preparePreviews({
    rawPreviews: shows,
    pages: 2,
    height: "h-[19rem]",
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

export default ShowsTrending;
