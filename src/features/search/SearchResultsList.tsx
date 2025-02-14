import { useSearchParams } from "react-router-dom";

import { SearchResultsListProps } from "@/lib/types";
import { ISearchedMedia } from "@/lib/typesAPI";

import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import Separator from "@/components/ui/Separator";

import SearchNoResults from "@/features/search/SearchNoResults";
import SearchPagination from "@/features/search/SearchPagination";
import SearchPreview from "@/features/search/SearchPreview";
import { useSearchResults } from "@/features/search/useSearchResults";

function SearchResultsList({ query }: SearchResultsListProps) {
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

  // Page change handler
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ q: query, page: newPage.toString() });
  };

  // Returned JSX
  return (
    <section>
      <Heading>Search results</Heading>
      {query.length > 2 && data.total_results > 0 ? (
        <>
          <h3>
            Showing results for: <em>"{query}"</em>
          </h3>
          <p className="text-2xl mt-2">
            Page {page} • Total results: {data.total_results}
          </p>

          <Separator className="my-10" />
          <div className="grid grid-cols-2 gap-x-24 gap-y-12 w-3/4">
            {data.results.map((media: ISearchedMedia) => (
              <SearchPreview media={media} key={media.id} />
            ))}
          </div>
          <Separator className="my-10" />
          <SearchPagination
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </>
      ) : (
        <SearchNoResults query={query} />
      )}
    </section>
  );
}

export default SearchResultsList;
