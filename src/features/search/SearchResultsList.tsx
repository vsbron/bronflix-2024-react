import Heading from "@/components/ui/Heading";

function SearchResultsList({ query }: { query: string }) {
  // Returned JSX
  return (
    <section>
      <Heading>Search results</Heading>
      <h3>
        Showing results for: <em>"{query}"</em>
      </h3>
    </section>
  );
}

export default SearchResultsList;
