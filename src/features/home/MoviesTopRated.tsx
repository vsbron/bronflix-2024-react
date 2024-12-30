import { useRef } from "react";

import { useMoviesTopRated } from "./useMoviesTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import { PreparePreviews } from "@/components/previews/PreparePreviews";

function MoviesTopRated() {
  // Getting the top rated movies and ref for ribbon element
  const { isLoading, movies, error } = useMoviesTopRated();
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !movies)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching top rated movies"}
      </div>
    );

  // Prepare preview ribbons
  const preparedPreviews = PreparePreviews({
    rawPreviews: movies,
    pages: 3,
    height: "h-[40rem]",
    type: "movies",
  });

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading as="h2">TOP RATED MOVIES</Heading>
      <Ribbon length={movies.length} ribbon={ribbonRef}>
        {preparedPreviews}
      </Ribbon>
    </section>
  );
}

export default MoviesTopRated;
