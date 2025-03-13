import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMoviesUpcoming } from "@/features/moviesMain/useMoviesUpcoming";
import { COLLECTION_IDS, MEDIA_URL } from "@/lib/constants";
import useFetchCollections from "./useFetchCollections";

function MoviesCollections() {
  // Getting the upcoming movies and ref for ribbon element
  const { isLoading, collections, error } = useFetchCollections();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !collections) return <div className="text-red-500">{error}</div>;

  console.log(collections);

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Top Movie Franchises</Heading>
      <Previews
        rawPreviews={collections}
        height="24rem"
        type="collection"
        isTwoRows={true}
      />
    </section>
  );
}

export default MoviesCollections;

const fetchCollections = async () => {
  try {
    const responses = await Promise.all(
      COLLECTION_IDS.map((id) =>
        fetch(
          `${MEDIA_URL}collection/${id}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        ).then((res) => res.json())
      )
    );
    return responses;
  } catch (error) {
    console.error("Error fetching collections:", error);
  }
};
