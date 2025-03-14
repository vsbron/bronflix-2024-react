import { FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { MEDIA_URL, MIN_SEARCH_CHARS } from "@/lib/constants";
import { ISearchResultsObjSmall } from "@/lib/typesAPI";

import SearchBriefResults from "@/components/header/SearchBriefResults";

// Initiating controller for fetch function
let controller: AbortController | null = null;

function Search() {
  // Setting the states for hovering effect, input text, form status and results list
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [briefResults, setBriefResults] =
    useState<ISearchResultsObjSmall | null>(null);

  // Getting the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Fetch data based on a search query function
  const fetchSearch = async () => {
    // Set the abort controller
    controller = new AbortController();
    const signal = controller.signal;

    try {
      // Fetching the data
      const res = await fetch(
        `${MEDIA_URL}search/multi?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${inputText}`,
        { signal }
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
        console.error("Fetch aborted"); // Log for controlled aborts
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
  const handleSearch = (e: FormEvent) => {
    e.preventDefault(); // Prevent default behavior
    if (!inputText.trim()) return; // Guard clause
    setIsSubmitting(true); // Enabling submitting state
    controller?.abort(); // Cancel the running fetch from
    navigate(`/search?q=${encodeURIComponent(inputText)}`); // Redirecting user to search page
    clearSearch(); // Reset the search component
    setIsSubmitting(false); // Disabling submitting state
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
      <button
        type="submit"
        className="block w-12"
        disabled={isSubmitting}
        aria-label="Search"
      >
        <MagnifyingGlassIcon />
      </button>
      <input
        type="text"
        className={`bg-stone-50 text-stone-950 rounded-full outline-none py-.5 text-[1.4rem] ${
          isHovered
            ? "w-[28rem] opacity-100 pl-5 pr-[3rem]"
            : "w-0 opacity-0 p-0"
        } transition-all duration-200`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Search for movies, shows or person..."
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
        aria-label="Clear search"
      >
        <XMarkIcon />
      </button>
      {briefResults !== null && (
        <SearchBriefResults
          clearSearch={clearSearch}
          results={briefResults}
          inputText={inputText}
        />
      )}
    </form>
  );
}

export default Search;
