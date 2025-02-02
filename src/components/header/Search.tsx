import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Search() {
  // Setting the states for hovering effect, input text and form status
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Getting the navigate function from useNavigate hook
  const navigate = useNavigate();

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
