import { Link } from "react-router-dom";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { useUser } from "@/redux/reducers/userReducer";

import PreviewImage from "@/components/previews/PreviewImage";
import Heading from "@/components/ui/Heading";

function WatchList() {
  // Getting the user's watch lists from the Redux store
  const { watchlistMovies, watchlistShows } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Watch list</Heading>
      <div>Movies</div>
      <div className={`flex ${BASE_GAP_CLASS}`}>
        {watchlistMovies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            className="basis-[14rem] h-[21rem]"
            key={movie.id}
          >
            <PreviewImage media={movie} hud={false} />
          </Link>
        ))}
      </div>
      <div>Shows</div>
      <div className={`flex ${BASE_GAP_CLASS}`}>
        {watchlistShows.map((show) => (
          <Link
            to={`/shows/${show.id}`}
            className="basis-[14rem] h-[21rem]"
            key={show.id}
          >
            <PreviewImage media={show} hud={false} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WatchList;
