import { Helmet } from "react-helmet-async";

import { META_SEARCH_DESC, META_SEARCH_TITLE } from "@/lib/metaTags";

import Heading from "@/components/ui/Heading";

function SearchResults() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_SEARCH_TITLE}</title>
        <meta name="description" content={META_SEARCH_DESC} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/*Content */}
      <section>
        <Heading>Search results</Heading>
      </section>
    </>
  );
}

export default SearchResults;
