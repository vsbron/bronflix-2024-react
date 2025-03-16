import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useShowsRunning } from "./useShowsRunning";

function ShowsRunning() {
  // Getting the currently running movies
  const { isLoading, shows, error } = useShowsRunning();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching upcoming shows"}
      </div>
    );

  // Returned JSX
  return (
    <>
      <Heading as="h2">Currently Running Shows</Heading>
      <Previews rawPreviews={shows} width="22rem" height="33rem" type="shows" />
    </>
  );
}

export default ShowsRunning;
