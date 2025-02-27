import { useUser } from "@/redux/reducers/userReducer";

import Heading from "@/components/ui/Heading";
import ListTitle from "@/features/profile/ListTitle";
import MediaList from "@/features/profile/MediaList";
import Previews from "@/components/previews/Previews";

function FavoritesList() {
  // Getting the user's favorites from the Redux store
  const { likedMovies, likedPeople, likedShows } = useUser();
  // Returned JSX
  return (
    <section>
      <Heading as="h2">Your Favorites</Heading>
      <div className="flex flex-col gap-6">
        <div>
          <ListTitle>Movies</ListTitle>
          <Previews
            rawPreviews={[...likedMovies].reverse()}
            width="20rem"
            height="30rem"
            type="movies"
          />
        </div>
        <div>
          <ListTitle>Shows</ListTitle>
          <Previews
            rawPreviews={[...likedShows].reverse()}
            width="18rem"
            height="27rem"
            type="tv"
            merged={true}
          />
        </div>
        <div>
          <ListTitle>People</ListTitle>
          <Previews
            rawPreviews={[...likedPeople].reverse()}
            width="15rem"
            height="23rem"
            type="person"
          />
        </div>
      </div>
    </section>
  );
}

export default FavoritesList;
