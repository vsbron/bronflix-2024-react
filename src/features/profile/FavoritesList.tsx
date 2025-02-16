import { useUser } from "@/redux/reducers/userReducer";

import Heading from "@/components/ui/Heading"

function FavoritesList() {
  // Getting the user's favorites from the Redux store
  const { likedMovies, likedPeople, likedShows } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Your Favorites</Heading>
      <div>Movies</div>
      <div>Shows</div>
      <div>People</div>
    </section>
  )
}

export default FavoritesList
