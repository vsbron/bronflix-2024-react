import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import {
  MEDIA_URL,
  MIN_SEARCH_CHARS,
  PREVIEWS_GAP_CLASS,
} from "@/lib/constants";
import { SearchResultsObjSmall } from "@/lib/typesAPI";

import SearchPreviewSmall from "@/features/search/SearchPreviewSmall";

function Search() {
  // Setting the states for hovering effect, input text, form status and error message
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [briefResults, setBriefResults] =
    useState<SearchResultsObjSmall | null>(null);

  // Getting the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Fetch data based on a search query function
  const fetchSearch = async () => {
    // Trimming query
    if (!inputText.trim()) return;

    try {
      // Fetching the data
      const res = await fetch(
        `${MEDIA_URL}/search/multi?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${inputText}`
      );

      // Guard clause
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      // Handling the fetched data
      const data = await res.json();
      const briefData = data.results.slice(0, 3);
      const totalResults = data.total_results;

      // Set the state with first three results and the total results number
      setBriefResults({ briefData, totalResults });
    } catch (e: unknown) {
      // Checking if error message is because of cleanup function
      if (e instanceof DOMException && e.name === "AbortError") {
        console.log("Fetch aborted"); // Log for controlled aborts
      } else {
        // Else, handle error
        const errorMessage = e instanceof Error ? e.message : String(e);
        console.error(errorMessage);
      }
    }
  };

  // Memoized debounced fetchSearch function
  const debouncedFetchSearch = useCallback(debounce(fetchSearch, 300), [
    inputText,
  ]);

  // Use Effect for calling fetch function when query is updated
  useEffect(() => {
    // Calling the async function if the query length is longer than three characters, otherwise clear the results
    inputText.trim().length > MIN_SEARCH_CHARS
      ? debouncedFetchSearch()
      : setBriefResults(null);

    // Cleanup function on component unmount
    return () => {
      debouncedFetchSearch.cancel();
    };
  }, [inputText, debouncedFetchSearch]);

  // Search submission handler
  const handleSearch = (e: React.FormEvent) => {
    // Prevent default behavior
    e.preventDefault();

    // Enabling submitting state
    setIsSubmitting(true);

    // Redirecting user to search page
    navigate(`/search?q=${encodeURIComponent(inputText)}`);

    // Reset the search input field
    setInputText("");

    // Disabling submitting state
    setIsSubmitting(false);
  };

  // Search clear function
  const clearSearch = () => {
    setInputText("");
    setBriefResults(null);
    setIsHovered(false);
  };

  // Returned JSX
  return (
    <form
      className="flex gap-4 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => inputText === "" && setIsHovered(false)}
      onSubmit={(e) => handleSearch(e)}
    >
      <button type="submit" className="block w-12" disabled={isSubmitting}>
        <MagnifyingGlassIcon />
      </button>
      <input
        type="text"
        className={`bg-stone-50 text-stone-950 rounded-full outline-none py-.5 text-[1.4rem] ${
          isHovered ? "w-96 opacity-100 pl-4 pr-[3rem]" : "w-0 opacity-0 p-0"
        } transition-all duration-200`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Search..."
      />
      <button
        type="reset"
        className={`block w-8 text-stone-950 absolute right-3 top-2 z-10 transition-opacity ${
          inputText.length > 0
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={clearSearch}
        disabled={isSubmitting}
      >
        <XMarkIcon />
      </button>
      {briefResults !== null && (
        <div
          className={`absolute -bottom-4 translate-y-full rounded-3xl z-50 bg-stone-800 left-16 right-0 px-6 py-4 flex flex-col text-2xl ${PREVIEWS_GAP_CLASS}`}
          onClick={clearSearch}
        >
          {briefResults.totalResults > 0 ? (
            <>
              {briefResults.briefData.map((media) => (
                <SearchPreviewSmall media={media} key={media.id} />
              ))}
              <Link
                to={`/search?q=${encodeURIComponent(inputText)}`}
                className="text-center pt-3 border-t border-stone-50 hover:text-red-300"
              >
                See all results ({briefResults.totalResults})
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
      )}
    </form>
  );
}

export default Search;
