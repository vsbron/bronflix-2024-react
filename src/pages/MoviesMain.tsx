import { Helmet } from "react-helmet-async";

import {
  META_MAIN_MOVIES_DESC,
  META_MAIN_MOVIES_KEYW,
  META_MAIN_MOVIES_TITLE,
} from "@/lib/metaTags";

import Heading from "@/components/ui/Heading";

function MoviesMain() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_MAIN_MOVIES_TITLE}</title>
        <meta name="description" content={META_MAIN_MOVIES_DESC} />
        <meta name="keywords" content={META_MAIN_MOVIES_KEYW} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
      <section>
        <Heading>BroNflix movies</Heading>
      </section>
    </>
  );
}

export default MoviesMain;
