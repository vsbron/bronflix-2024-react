import { useState } from "react";

function MobileNav() {
  // Setting the state for the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Returned JSX
  return (
    <div>
      <div
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        className="cursor-pointer"
      >
        Hamburger
      </div>
      <div
        className={`fixed inset-0 bg-black -z-10 flex flex-col justify-center items-center
          ${
            isMenuOpen
              ? "opacity-1 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      >
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Shows</li>
          <li>Profile</li>
          <li>Sign Out</li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
