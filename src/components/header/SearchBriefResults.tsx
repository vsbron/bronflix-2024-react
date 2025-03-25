import { Link } from "react-router-dom";

import { useMobileNav } from "@/context/MobileNavContext";
import { useResponsive } from "@/hooks/useResponsive";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { SearchBriefResultsProps } from "@/lib/types";
import { ISearchedMediaSmall } from "@/lib/typesAPI";

import SearchPreviewSmall from "@/features/search/SearchPreviewSmall";

function SearchBriefResults({
  clearSearch,
  results,
  inputText,
}: SearchBriefResultsProps) {
  // Getting the MD media query from custom hook
  const { isMD } = useResponsive();

  // Getting the mobile nav state and close function from custom hook
  const { isMenuOpen, closeMenu } = useMobileNav();

  // Returned JSX
  return (
    <div
      className={`absolute -bottom-4 right-0 translate-y-full rounded-3xl z-50 bg-stone-800 w-[28rem] px-6 py-4 flex flex-col text-2xl ${
        isMD ? "left-0 w-full" : ""
      } ${BASE_GAP_CLASS}`}
      onClick={clearSearch}
    >
      {results.totalResults > 0 ? (
        <>
          {results.briefData.map((media: ISearchedMediaSmall) => (
            <SearchPreviewSmall media={media} key={media.id} />
          ))}
          <Link
            to={`/search?q=${encodeURIComponent(inputText)}`}
            className="text-center pt-3 border-t border-stone-50 hover:text-red-300"
            onClick={() => {
              isMenuOpen && closeMenu();
            }}
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
