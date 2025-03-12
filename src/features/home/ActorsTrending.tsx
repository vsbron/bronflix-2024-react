import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useActorsTrending } from "@/features/home/useActorsTrending";

function ActorsTrending() {
  // Getting the trending actors and ref for ribbon element
  const { isLoading, actors, error } = useActorsTrending();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !actors)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching top rated actors"}
      </div>
    );

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING ACTORS</Heading>
      <Previews rawPreviews={actors} height="25rem" type="person" />
    </section>
  );
}

export default ActorsTrending;
