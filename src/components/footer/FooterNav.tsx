import { Link } from "react-router-dom";

import FooterHeading from "./FooterHeading";

function FooterNav() {
  // Returned JSX
  return (
    <>
      <FooterHeading>Discover more</FooterHeading>
      <div className="flex">
        <ul className="basis-[40%] m-0 flex flex-col gap-1.5">
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
            <Link to="/actors">Actors</Link>
          </li>
          <li>
            <Link to="/site-map">Site Map</Link>
          </li>
        </ul>
        <ul className="basis-[40%] m-0 flex flex-col gap-1.5">
          <li>
            <Link to="/app-info">App Info</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/terms">Terms Of Use</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterNav;
