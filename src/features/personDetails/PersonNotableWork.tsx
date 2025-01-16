import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";

function PersonNotableWork({ movies }: { movies: any }) {
  // Returned JSX
  return (
    <div>
      <Heading as="h3">Notable work</Heading>
      <Previews
        rawPreviews={movies}
        width="18rem"
        height="27rem"
        type="movies"
        merged={true}
      />
    </div>
  );
}

export default PersonNotableWork;
