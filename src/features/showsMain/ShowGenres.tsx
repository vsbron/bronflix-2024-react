import { Link } from "react-router-dom";

import { BASE_GAP_CLASS } from "@/lib/constants";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
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
      <div className={`grid grid-cols-[3fr_4fr] items-start gap-24`}>
        <div>
          <p>
            TV shows captivate us with their compelling characters, intricate
            plots, and immersive worlds. From thrilling mysteries to
            heartwarming dramas and hilarious comedies, each show belongs to a
            genre that defines its style, tone, and appeal.
          </p>
          <p>
            Here’s a list of TV show genres, each offering a distinct viewing
            experience. Whether you're in the mood for suspense, laughter, or an
            emotional rollercoaster, there's a genre for every preference.
            Explore and discover your next favorite show!
          </p>
        </div>
        <div className={`flex flex-wrap ${BASE_GAP_CLASS} max-w-[75%] mt-5`}>
          {data.map((genre) => (
            <Button>
              <Link to="/">{genre.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowGenres;
