import { useUser } from "@/redux/reducers/userReducer";

import Heading from "@/components/ui/Heading";
import MediaList from "./MediaList";

function FavoritesList() {
  // Getting the user's favorites from the Redux store
  const { likedMovies, likedPeople, likedShows } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Your Favorites</Heading>
      <MediaList items={likedMovies} type="movies" />
      <MediaList items={likedShows} type="shows" />
      <MediaList items={likedPeople} type="person" />
    </section>
  );
}

export default FavoritesList;
