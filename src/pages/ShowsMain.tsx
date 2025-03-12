import { Helmet } from "react-helmet-async";

import {
  META_MAIN_SHOWS_DESC,
  META_MAIN_SHOWS_KEYW,
  META_MAIN_SHOWS_TITLE,
} from "@/lib/metaTags";

import Heading from "@/components/ui/Heading";

function ShowsMain() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_MAIN_SHOWS_TITLE}</title>
        <meta name="description" content={META_MAIN_SHOWS_DESC} />
        <meta name="keywords" content={META_MAIN_SHOWS_KEYW} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
      <section>
        <Heading>BroNflix shows</Heading>
      </section>
    </>
  );
}

export default ShowsMain;
