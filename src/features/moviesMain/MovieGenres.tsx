import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMovieGenres } from "@/features/moviesMain/useMovieGenres";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { Link } from "react-router-dom";

function MovieGenres() {
  // Getting the movie genres data
  const { isLoading, data, error } = useMovieGenres();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching movie genres"}
      </div>
    );

  // Returned JSX
  return (
    <>
      <Heading as="h2">Movie Genres</Heading>
      <div className={`grid grid-cols-[3fr_4fr] items-start gap-24`}>
        <div>
          <p>
            Movies have the power to transport us to different worlds, evoke
            emotions, and tell unforgettable stories. Whether it's an epic
            adventure, gripping thriller, or heartfelt drama, every film belongs
            to a genre that shapes its tone and appeal.
          </p>
          <p>
            Here's a list of movie genres, each offering a unique experience.
            Whether you're in the mood for suspense, comedy, or an emotional
            journey, there's a genre for every taste. Explore and find your next
            favorite film!
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

export default MovieGenres;
