import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useShowsTopRated } from "@/features/home/useShowsTopRated";

function ShowsTopRated() {
  // Getting the top rated shows and ref for ribbon element
  const { isLoading, shows, error } = useShowsTopRated();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching top rated shows"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TOP RATED SHOWS</Heading>
      <Previews rawPreviews={shows} height="24rem" type="tv" isTwoRows={true} />
    </section>
  );
}

export default ShowsTopRated;
