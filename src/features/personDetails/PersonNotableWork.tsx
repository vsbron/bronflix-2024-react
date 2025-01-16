import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";

function PersonNotableWork({ movies }: { movies: any }) {
  // Returned JSX
  return (
    <div>
      <Heading as="h3">Notable work</Heading>
      <Previews
        rawPreviews={movies}
        width="23rem"
        height="35rem"
        type="movies"
      />
    </div>
  );
}

export default PersonNotableWork;
