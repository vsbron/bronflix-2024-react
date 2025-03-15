import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import GenreList from "@/features/GenreList";
import { useShowGenres } from "@/features/showsMain/useShowGenres";

function ShowGenres() {
  // Getting the show genres data
  const { isLoading, data, error } = useShowGenres();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching show genres"}
      </div>
    );

  // Returned JSX
  return (
    <>
      <Heading as="h2">Show Genres</Heading>
      <GenreList data={data} type="tv" />
    </>
  );
}

export default ShowGenres;
