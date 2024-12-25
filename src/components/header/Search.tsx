import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Search() {
  // Setting the state for hovering effect
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Returned JSX
  return (
    <div
      className="flex gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="block w-12">
        <MagnifyingGlassIcon />
      </span>
      <input
        type="text"
        className={`bg-stone-50 text-stone-950 rounded-full outline-none py-.5 text-[1.4rem] ${
          isHovered ? "w-96 opacity-100 px-4" : "w-0 opacity-0 p-0"
        } transition-all duration-200`}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
