import { useMovieCast } from "./useMovieCast";

function MovieCast() {
  // Getting the fetched cast
  const cast = useMovieCast();

  console.log(cast);

  // Returned JSX
  return <div>Movie cast</div>;
}

export default MovieCast;
