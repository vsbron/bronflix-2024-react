import { Helmet } from "react-helmet-async";

import {
  META_MAIN_PEOPLE_DESC,
  META_MAIN_PEOPLE_KEYW,
  META_MAIN_PEOPLE_TITLE,
} from "@/lib/metaTags";

import Heading from "@/components/ui/Heading";

function PeopleMain() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_MAIN_PEOPLE_TITLE}</title>
        <meta name="description" content={META_MAIN_PEOPLE_DESC} />
        <meta name="keywords" content={META_MAIN_PEOPLE_KEYW} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
      <section>
        <Heading>BroNflix people</Heading>
      </section>
    </>
  );
}

export default PeopleMain;
