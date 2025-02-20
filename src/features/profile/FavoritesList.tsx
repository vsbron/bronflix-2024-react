import { useUser } from "@/redux/reducers/userReducer";

import Heading from "@/components/ui/Heading";

function FavoritesList() {
  // Getting the user's favorites from the Redux store
  const { likedMovies, likedPeople, likedShows } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Your Favorites</Heading>
      <div>Movies</div>
      <div>
        {likedMovies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
      <div>Shows</div>
      <div>
        {likedShows.map((show) => (
          <div key={show.id}>{show.name}</div>
        ))}
      </div>
      <div>Actors</div>
      <div>
        {likedPeople.map((person) => (
          <div key={person.id}>{person.name}</div>
        ))}
      </div>
    </section>
  );
}

export default FavoritesList;
