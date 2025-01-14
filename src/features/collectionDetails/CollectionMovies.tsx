import Heading from "@/components/Heading";
import Previews from "@/components/previews/Previews";
import { IMovie } from "@/lib/typesAPI";

function CollectionMovies({ movies }: { movies: IMovie[] }) {
  return (
    <section>
      <Heading as="h2">Movies in the collection</Heading>
      <Previews
        rawPreviews={movies}
        width="25rem"
        height="37rem"
        type="movies"
      />
    </section>
  );
}

export default CollectionMovies;
