import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { MEDIA_URL } from "@/lib/constants";

function Search() {
  // Setting the states for hovering effect, input text, form status and error message
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [briefResults, setBriefResults] = useState<any>({});
  const [error, setError] = useState<string | null>(null);

  // Getting the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Use Effect that fetches the brief search results as user enters the search query
  useEffect(() => {
    // Creating controller for cleanup function
    const controller = new AbortController();
    const { signal } = controller;

    // Async function for data fetch
    const fetchSearch = async () => {
      try {
        // Fetching the data
        const res = await fetch(
          `${MEDIA_URL}/search/multi?api_key=${
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
          console.log("Fetch aborted"); // Log for controlled aborts
        } else {
          // Else, handle error
          const errorMessage = e instanceof Error ? e.message : String(e);
          console.error(errorMessage);
          setError(errorMessage);
        }
      }
    };

    // Calling the async function
    fetchSearch();

    // Cleanup function
    return () => {
      controller.abort(); // Abort fetch on unmount
    };
  }, [inputText]);

  // Search submission handler
  const handleSearch = (e: React.FormEvent) => {
    // Prevent default behavior
    e.preventDefault();

    // Enabling submitting state
    setIsSubmitting(true);

    // Redirecting user to search page
    navigate(`/search?q=${encodeURIComponent(inputText)}`);

    // Disabling submitting state
    setIsSubmitting(false);
  };

  // Returned JSX
  return (
    <form
      className="flex gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onSubmit={(e) => handleSearch(e)}
    >
      <button className="block w-12" disabled={isSubmitting}>
        <MagnifyingGlassIcon />
      </button>
      <input
        type="text"
        className={`bg-stone-50 text-stone-950 rounded-full outline-none py-.5 text-[1.4rem] ${
          isHovered ? "w-96 opacity-100 px-4" : "w-0 opacity-0 p-0"
        } transition-all duration-200`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
}

export default Search;
