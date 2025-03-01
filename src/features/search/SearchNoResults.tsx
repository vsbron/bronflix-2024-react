import ProceedOptions from "@/components/errorBoundary/ProceedOptions";

function SearchNoResults({ query }: { query: string }) {
  // Returned JSX
  return (
    <>
      <h4 className="mb-8">
        Sorry, no results were found for <em>"{query}"</em>
      </h4>
      <ProceedOptions />
    </>
  );
}

export default SearchNoResults;
