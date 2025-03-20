import { useSearchParams } from "react-router-dom";

import { MAX_RESULTS_PER_PAGE } from "@/lib/constants";
import { SearchResultsListProps } from "@/lib/types";

import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import Separator from "@/components/ui/Separator";
import PaginationNav from "@/features/PaginationNav";
import ResultsTwoColumns from "@/features/ResultsTwoColumns";
import SearchNoResults from "@/features/search/SearchNoResults";
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
  const totalPages = Math.ceil(data.total_results / MAX_RESULTS_PER_PAGE);

  // Page change handler
  const handlePageChange = (newPage: number) => {
    setSearchParams({ q: query, page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Returned JSX
  return (
    <section>
      <Heading>Search results</Heading>
      {query.length > 2 && data.total_results > 0 ? (
        <>
          <h4>
            Showing results for: <em>"{query}"</em>
          </h4>
          <p className="text-2xl mt-2">
            Page {page} • Total results: {data.total_results}
          </p>

          <Separator className="my-10" />
          <ResultsTwoColumns media={data.results} />
          <Separator className="my-10" />
          <PaginationNav
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
