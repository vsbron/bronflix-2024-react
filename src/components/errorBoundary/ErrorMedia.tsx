import Heading from "../Heading";
import ProceedOptions from "./ProceedOptions";

function ErrorMedia({ type }: { type: string }) {
  // Preparing heading message
  const HeadingTitle = `${type} not found`;

  // Returned JSX
  return (
    <section>
      <Heading>{HeadingTitle}</Heading>
      <div>
        <div>
          We're sorry, but we couldn't find the {type} you were looking for in
          our database.
          <br />
          This might be due to a typo in the URL, or the {type} may no longer be
          available.
        </div>
        <ProceedOptions />
      </div>
    </section>
  );
}

export default ErrorMedia;
