import ProceedOptions from "@/components/errorBoundary/ProceedOptions";
import Heading from "@/components/ui/Heading";

function Error() {
  // Returned JSX
  return (
    <section>
      <Heading as="h1">Error</Heading>
      <p>Oops! Something went wrong</p>
      <ProceedOptions />
    </section>
  );
}

export default Error;
