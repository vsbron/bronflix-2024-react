import { useUser } from "@/redux/reducers/userReducer";

import Heading from "@/components/ui/Heading";
import ListTitle from "@/features/profile/ListTitle";
import MediaList from "@/features/profile/MediaList";

function FavoritesList() {
  // Getting the user's favorites from the Redux store
  const { likedMovies, likedPeople, likedShows } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Your Favorites</Heading>
      <ListTitle>Movies</ListTitle>
      <MediaList items={likedMovies} type="movies" />
      <ListTitle>Shows</ListTitle>
      <MediaList items={likedShows} type="shows" />
      <ListTitle>People</ListTitle>
      <MediaList items={likedPeople} type="person" />
    </section>
  );
}

export default FavoritesList;
