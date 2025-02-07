import { Link } from "react-router-dom";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { SearchBriefResultsProps } from "@/lib/types";
import { SearchedMediaSmall } from "@/lib/typesAPI";

import SearchPreviewSmall from "@/features/search/SearchPreviewSmall";

function SearchBriefResults({
  clearSearch,
  results,
  inputText,
}: SearchBriefResultsProps) {
  // Returned JSX
  return (
    <div
      className={`absolute -bottom-4 translate-y-full rounded-3xl z-50 bg-stone-800 left-16 right-0 px-6 py-4 flex flex-col text-2xl ${BASE_GAP_CLASS}`}
      onClick={clearSearch}
    >
      {results.totalResults > 0 ? (
        <>
          {results.briefData.map((media: SearchedMediaSmall) => (
            <SearchPreviewSmall media={media} key={media.id} />
          ))}
          <Link
            to={`/search?q=${encodeURIComponent(inputText)}`}
            className="text-center pt-3 border-t border-stone-50 hover:text-red-300"
          >
            See all results ({results.totalResults})
          </Link>
        </>
      ) : (
        <div className="text-stone-500">
          No results found for
          <br />
          <em>"{inputText}"</em>.
          <span className="block mt-2">Try a different search term.</span>
        </div>
      )}
    </div>
  );
}

export default SearchBriefResults;
