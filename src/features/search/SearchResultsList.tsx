import { useSearchParams } from "react-router-dom";

import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import Separator from "@/components/ui/Separator";
import SearchPagination from "@/features/search/SearchPagination";
import SearchPreview from "@/features/search/SearchPreview";
import { useSearchResults } from "@/features/search/useSearchResults";

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

  // Calculating tht total number of pages
  const totalPages = Math.ceil(data.total_results / 20);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ q: query, page: newPage.toString() });
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
      <Separator className="my-10" />
      <SearchPagination
        page={page}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </section>
  );
}

export default SearchResultsList;
