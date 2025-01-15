import { CollectionMoviesProps } from "@/lib/types";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";

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
