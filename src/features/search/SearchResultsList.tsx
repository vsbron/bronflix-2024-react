import { useSearchParams } from "react-router-dom";

import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import SearchPreview from "@/features/search/SearchPreview";
import { useSearchResults } from "@/features/search/useSearchResults";
import Separator from "@/components/ui/Separator";

function SearchResultsList({ query }: { query: string }) {
  // Getting the page number from search params
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  // Getting the search results data
  const { isLoading, data, error } = useSearchResults(query, page);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching cast & crew data"}
      </div>
    );

  const nextPage = () => {
    searchParams.set("page", "2");
    setSearchParams(searchParams);
  };

  // Returned JSX
  return (
    <section>
      <Heading>Search results</Heading>
      <h3>
        Showing results for: <em>"{query}"</em>
      </h3>
      <p className="text-2xl mt-2">
        Page {page} • Total results: {data.total_results}
      </p>
      <Separator className="my-10" />
      <div className="grid grid-cols-2 gap-x-24 gap-y-12 w-3/4">
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
      </div>
      <div onClick={nextPage}>Next</div>
    </section>
  );
}

export default SearchResultsList;
