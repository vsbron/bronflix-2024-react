import { useRef } from "react";

import { useShowsTrending } from "./useShowsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import { PreparePreviews } from "@/components/previews/PreparePreviews";

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
  const preparedPreviews = PreparePreviews({
    rawPreviews: shows,
    pages: 2,
    height: "h-[19rem]",
    type: "tv",
    isTwoRows: true,
  });

  // Returned JSX
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
