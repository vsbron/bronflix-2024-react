import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useSearchResults } from "@/features/search/useSearchResults";
import SearchPreview from "@/features/search/SearchPreview";

function SearchResultsList({ query }: { query: string }) {
  // Getting the search results data
  const { isLoading, data, error } = useSearchResults(query);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching cast & crew data"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading>Search results</Heading>
      <h3>
        Showing results for: <em>"{query}"</em>
      </h3>
      {data.total_results > 0 ? (
        data.results.map((media: any) => (
          <SearchPreview media={media} key={media.id} />
        ))
      ) : (
        <div className="text-stone-500">
          No results found for
          <br />
          <em>"{query}"</em>.
          <span className="block mt-2">Try a different search term.</span>
        </div>
      )}
    </section>
  );
}

export default SearchResultsList;
