import FooterHeading from "./FooterHeading";

function FooterPowered() {
  // Returned JSX
  return (
    <div>
      <FooterHeading>Powered By</FooterHeading>
      <div className="flex gap-10 items-center mt-5">
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          aria-label="React"
        >
          <svg width="30" height="30">
            <use href="/set-powered.svg#react"></use>
          </svg>
        </a>
        <a
          href="https://typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
          aria-label="TypeScript"
        >
          <svg width="30" height="30">
            <use href="/set-powered.svg#typescript"></use>
          </svg>
        </a>
        <a
          href="https://netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Netlify"
        >
          <svg width="30" height="30">
            <use href="/set-powered.svg#netlify"></use>
          </svg>
        </a>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
          aria-label="TheMovieDB"
        >
          <svg width="150" height="30">
            <use href="/set-powered.svg#movie-db"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default FooterPowered;
