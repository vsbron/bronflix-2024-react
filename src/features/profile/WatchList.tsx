import { useUser } from "@/redux/reducers/userReducer";

import Heading from "@/components/ui/Heading";

function WatchList() {
  // Getting the user's watch lists from the Redux store
  const { watchlistMovies, watchlistShows } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Watch list</Heading>
      <div>Movies</div>
      <div>
        {watchlistMovies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
      <div>Shows</div>
      <div>
        {watchlistShows.map((show) => (
          <div key={show.id}>{show.name}</div>
        ))}
      </div>
    </section>
  );
}

export default WatchList;
