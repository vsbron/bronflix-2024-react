import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import GenreList from "@/features/GenreList";
import { useMovieGenres } from "@/features/moviesMain/useMovieGenres";

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
      <GenreList data={data} type="movie" />
    </>
  );
}

export default MovieGenres;
