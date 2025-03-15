import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useShowsOnAirToday } from "@/features/showsMain/useShowsOnAirToday";

function ShowsOnAirToday() {
  // Getting the on-air shows
  const { isLoading, shows, error } = useShowsOnAirToday();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching shows currently on-air"}
      </div>
    );

  // Returned JSX
  return (
    <>
      <Heading as="h2">On-Air Today</Heading>
      <Previews
        rawPreviews={shows}
        width="25rem"
        height="37.5rem"
        type="shows"
      />
    </>
  );
}

export default ShowsOnAirToday;
