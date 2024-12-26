import { Link } from "react-router-dom";
import FooterHeading from "./FooterHeading";

function Footer() {
  // Returned JSX
  return (
    <footer className="border-t border-stone-700 mt-20 mr-12 pt-12 pb-8 text-stone-500 text-[1.5rem] grid grid-cols-5 gap-x-4 gap-y-12">
      <div className="col-span-2 row-span-2">
        <FooterHeading>Discover more</FooterHeading>
        <div className="flex">
          <ul className="basis-[25%]">
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
          </ul>
          <ul className="basis-[25%]">
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
              <Link to="/site-map">Site Map</Link>
            </li>
          </ul>
          <ul className="basis-[25%]">
            <li>
              <a href="" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2">
        <FooterHeading>Powered By</FooterHeading>
        <div>React, The MovieDB, Netlify</div>
      </div>
      <div className="col-span-2">
        <FooterHeading>Partners</FooterHeading>
        <div>Google, GiTHub, UP/TO/DATE</div>
      </div>
      <div className="col-span-2 text-[1.4rem] leading-snug">
        <FooterHeading>Copyright</FooterHeading>
        Built by VSBroN as a portfolio project
        <br />
        This project is available on{" "}
        <a href="https://github.com/vsbron/bronflix-2024-react" target="_blank">
          GitHub
        </a>
        <br />© 2024. All rights reserved
      </div>
      <div className="col-span-2 text-[1.4rem]  leading-snug">
        <FooterHeading>Legal info</FooterHeading>
        <div>
          Any redistribution or reproduction of part or all of the contents in
          any form is prohibited.
          <br />
          You may not, except with our express written permission, distribute or
          commercially exploit the content.
          <br />
          Nor may you transmit it or store it in any other website or other form
          of electronic retrieval system.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
