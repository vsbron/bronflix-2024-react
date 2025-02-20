import { Link } from "react-router-dom";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { useUser } from "@/redux/reducers/userReducer";

import PreviewImage from "@/components/previews/PreviewImage";
import Heading from "@/components/ui/Heading";

function FavoritesList() {
  // Getting the user's favorites from the Redux store
  const { likedMovies, likedPeople, likedShows } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Your Favorites</Heading>
      <div>Movies</div>
      <div className={`flex ${BASE_GAP_CLASS}`}>
        {likedMovies.map((movie) => (
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
        {likedShows.map((show) => (
          <Link
            to={`/shows/${show.id}`}
            className="basis-[14rem] h-[21rem]"
            key={show.id}
          >
            <PreviewImage media={show} hud={false} />
          </Link>
        ))}
      </div>
      <div>Actors</div>
      <div className={`flex ${BASE_GAP_CLASS}`}>
        {likedPeople.map((person) => (
          <Link
            to={`/person/${person.id}`}
            className="basis-[14rem] h-[21rem]"
            key={person.id}
          >
            <PreviewImage media={person} type="person" hud={false} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FavoritesList;
