import { CollectionMoviesProps } from "@/lib/types";

import Heading from "@/components/Heading";
import Previews from "@/components/previews/Previews";

function CollectionMovies({ movies }: CollectionMoviesProps) {
  // Returned JSX
  return (
    <section>
      <Heading as="h2">Movies in the collection</Heading>
      <Previews
        rawPreviews={movies}
        width="23rem"
        height="35rem"
        type="movies"
      />
    </section>
  );
}

export default CollectionMovies;
