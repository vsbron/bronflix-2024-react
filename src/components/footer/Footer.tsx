function Footer() {
  // Returned JSX
  return (
    <footer className="border-t border-stone-700 mt-20 mr-12 pt-12 pb-8 text-stone-500 text-[1.5rem]">
      <div>Footer Navigation</div>
      <div>Powered by: React, The MovieDB, Netlify</div>
      <div>
        Copyright:{" "}
        <span>
          Built by VSBroN as a portfolio project (
          <a
            href="https://github.com/vsbron/bronflix-2024-react"
            target="_blank"
            className="text-stone-500 hover:text-stone-400 transition-colors"
          >
            source
          </a>
          )
        </span>
        <span> | </span>
        <span>© 2024. All rights reserved</span>
      </div>
      <div>
        Legal info: Any redistribution or reproduction of part or all of the
        contents in any form is prohibited. You may not, except with our express
        written permission, distribute or commercially exploit the content. Nor
        may you transmit it or store it in any other website or other form of
        electronic retrieval system.
      </div>
    </footer>
  );
}

export default Footer;
