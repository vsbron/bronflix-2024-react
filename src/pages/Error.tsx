import { Helmet } from "react-helmet-async";

import { META_ERROR_DESC, META_ERROR_TITLE } from "@/lib/metaTags";

import ProceedOptions from "@/components/errorBoundary/ProceedOptions";
import Heading from "@/components/ui/Heading";

function Error() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_ERROR_TITLE}</title>
        <meta name="description" content={META_ERROR_DESC} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/*Content */}
      <section>
        <Heading as="h1">Error</Heading>
        <p>Oops! Something went wrong</p>
        <ProceedOptions />
      </section>
    </>
  );
}

export default Error;
