import { useSearchParams } from "react-router-dom";

import {
  MAX_PAGINATION,
  MAX_RESULTS,
  MAX_RESULTS_PER_PAGE,
} from "@/lib/constants";
import { GenreMediaListProps } from "@/lib/types";
import { IMovieList } from "@/lib/typesAPI";

import Loader from "@/components/ui/Loader";
import Separator from "@/components/ui/Separator";
import { useGenreMediaData } from "@/features/useGenreMediaData";
import SearchPreview from "@/features/search/SearchPreview";
import SearchPagination from "@/features/search/SearchPagination";

function GenreMediaList({ genreId, type }: GenreMediaListProps) {
  // Getting the page number from search params
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  // Getting the media from chosen genre from React Query
  const { isLoading, data, error } = useGenreMediaData(type, genreId, page);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching media data"}
      </div>
    );

  // Calculating the total number of pages
  const totalPages =
    data.total_results > MAX_RESULTS
      ? MAX_PAGINATION
      : Math.ceil(data.total_results / MAX_RESULTS_PER_PAGE);

  // Page change handler
  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Returned JSX
  return (
    <>
      <div className="grid grid-cols-2 gap-x-24 gap-y-12 w-3/4">
        {data.results.map((media: IMovieList) => (
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
  );
}

export default GenreMediaList;
