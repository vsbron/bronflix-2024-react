import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

import logo from "@/assets/bronflix-logo.svg";
import { useMobileNav } from "@/context/MobileNavContext";
import { BASE_GAP_CLASS, SITE_NAME } from "@/lib/constants";
import { clearUserData, useUser } from "@/redux/reducers/userReducer";
import { auth } from "@/utils/firebase";

import Authentication from "@/components/header/Authentication";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

function MobileNav() {
  // Getting the user id
  const { uid } = useUser();

  // Getting the Mobile Nav state from the Context
  const { isMenuOpen, closeMenu } = useMobileNav();

  // Getting the dispatch function
  const dispatch = useDispatch();
  const location = useLocation();

  // Use effect that closes menu each time when URL changes
  useEffect(() => {
    isMenuOpen && closeMenu();
  }, [location.pathname]);

  // Sign Out handler (signs out and redirects to main page)
  const handleSignOut = () => {
    signOut(auth);
    dispatch(clearUserData());
  };

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
      {/* Logo */}
      <img
        src={logo}
        width="250"
        height="365"
        className="absolute bottom-4 -right-4 -z-10 opacity-20 -rotate-12"
        alt={SITE_NAME}
        title={`${SITE_NAME} logo`}
      />
      {/* Main nav */}
      <div
        className={`transition-all w-full mb-4 ${
          isMenuOpen
            ? "translate-y-0 delay-100 opacity-1"
            : "translate-y-60 delay-0 opacity-0"
        }`}
      >
        <Heading as="h2">Navigation</Heading>
        <ul
          className="m-0 flex flex-col gap-4 text-3xl"
          onClick={closeMenu}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/shows">Shows</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      {/* Profile nav */}
      <div
        className={`transition-all w-full ${
          isMenuOpen
            ? "translate-y-0 delay-200 opacity-1"
            : "translate-y-60 delay-0 opacity-0"
        }`}
      >
        <Heading as="h2">User</Heading>
        <div className={`flex flex-col ${BASE_GAP_CLASS} items-start`}>
          {uid ? (
            <>
              <Button onClick={closeMenu}>
                <NavLink to="/profile">Profile</NavLink>
              </Button>
              <Button onClick={handleSignOut} label="Sign out">
                <span>Sign Out</span>
              </Button>
            </>
          ) : (
            <Authentication col={true} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
