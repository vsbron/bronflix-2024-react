import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import useMovieCollections from "@/features/moviesMain/useMovieCollections";

function MoviesCollections() {
  // Getting the movie collections data
  const { isLoading, collections, error } = useMovieCollections();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !collections) return <div className="text-red-500">{error}</div>;

  // Returned JSX
  return (
    <>
      <Heading as="h2">Top Movie Franchises</Heading>
      <Previews
        rawPreviews={collections}
        height="24rem"
        type="collection"
        isTwoRows={true}
      />
    </>
  );
}

export default MoviesCollections;
