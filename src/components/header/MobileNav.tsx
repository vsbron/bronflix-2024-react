import { Link } from "react-router-dom";

import logo from "@/assets/bronflix-logo.svg";
import { MobileNavProps } from "@/lib/types";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Logo from "./Logo";
import { SITE_NAME } from "@/lib/constants";

function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  // Returned JSX
  return (
    <nav
      className={`fixed inset-0 bg-black -z-10 flex flex-col justify-start items-center transition-all p-6 pt-24
          ${
            isMenuOpen
              ? "opacity-1 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
    >
      <img
        src={logo}
        width="250"
        height="365"
        className="absolute bottom-4 -right-4 -z-10 opacity-20 -rotate-12"
        alt={SITE_NAME}
        title={`${SITE_NAME} logo`}
      />
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
  );
}

export default MobileNav;
