import { useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from "@/components/header/Hamburger";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

function MobileNavCont() {
  // Setting the state for the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Returned JSX
  return (
    <div>
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <nav
        className={`fixed inset-0 bg-black -z-10 flex flex-col justify-start items-center transition-all p-6 pt-24
          ${
            isMenuOpen
              ? "opacity-1 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`transition-all w-full mb-6 ${
            isMenuOpen
              ? "translate-y-0 delay-100 opacity-1"
              : "translate-y-60 delay-0 opacity-0"
          }`}
        >
          <Heading as="h2">Navigation</Heading>
          <ul className="m-0 flex flex-col gap-4 text-3xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/shows">Shows</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div
          className={`transition-all w-full ${
            isMenuOpen
              ? "translate-y-0 delay-200 opacity-1"
              : "translate-y-60 delay-0 opacity-0"
          }`}
        >
          <Heading as="h2">User</Heading>
          <div className="flex flex-col gap-4 items-start">
            <Button>
              <a href="/profile">Profile</a>
            </Button>
            <Button>
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MobileNavCont;
