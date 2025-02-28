import { useDispatch } from "react-redux";
import { doc, getDoc } from "@firebase/firestore";

import { ModalProvider } from "@/context/ModalContext";
import useTrailer from "@/hooks/useTrailer";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { updateUserData, useUser } from "@/redux/reducers/userReducer";
import { auth, db } from "@/utils/firebase";

import TrailerButton from "@/components/TrailerButton";
import Button from "@/components/ui/Button";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";

function MediaButtons({ type, media }: any) {
  // Getting user data from Redux store
  const { uid, likedMovies, watchlistMovies, likedShows, watchlistShows } =
    useUser();

  // Getting the trailer from the custom hook
  const trailer = useTrailer(media.id, type);

  // Checking if movie already in any lists
  const isLiked = likedMovies.some((m) => m.id === media.id);
  const isInWatchList = watchlistMovies.some((m) => m.id === media.id);

  // Getting the navigate and dispatch functions
  const dispatch = useDispatch<any>();

  // User lists buttons handlers
  const addToFavoritesHandler = async () => {
    try {
      // Fetch the latest user data from Firestore
      const userRef = doc(db, "users", auth!.currentUser!.uid);
      const userSnap = await getDoc(userRef);

      // Guard clause
      if (!userSnap.exists()) return;

      // Getting the current list of liked people
      const currentData = userSnap.data();
      const currentLikedMovieList = Array.isArray(currentData.likedMovies)
        ? currentData.likedMovies
        : [];

      // Checking whether we need to add or movie show from the list
      const updatedList = currentLikedMovieList.some((m) => m.id === media.id)
        ? currentLikedMovieList.filter((m) => m.id !== media.id)
        : [
            ...currentLikedMovieList,
            {
              id: media.id,
              title: media.title,
              poster_path: media.poster_path,
              vote_average: media.vote_average,
            },
          ];

      // Update the liked movies list in the state and firebase
      dispatch(updateUserData({ updatedData: { likedMovies: updatedList } }));
    } catch (e: unknown) {
      console.error(e);
      throw new Error(
        "Couldn't update the Favorite Movie list due to unknown error"
      );
    }
  };
  const addToWatchListHandler = async () => {
    try {
      // Fetch the latest user data from Firestore
      const userRef = doc(db, "users", auth!.currentUser!.uid);
      const userSnap = await getDoc(userRef);

      // Guard clause
      if (!userSnap.exists()) return;

      // Getting the current list of liked people
      const currentData = userSnap.data();
      const currentMovieWatchlist = Array.isArray(currentData.watchlistMovies)
        ? currentData.watchlistMovies
        : [];

      // Checking whether we need to add or remove movie from the list
      const updatedList = currentMovieWatchlist.some((m) => m.id === media.id)
        ? currentMovieWatchlist.filter((m) => m.id !== media.id)
        : [
            ...currentMovieWatchlist,
            {
              id: media.id,
              title: media.title,
              poster_path: media.poster_path,
              vote_average: media.vote_average,
            },
          ];

      // Update the movies watchlist in the state and firebase
      dispatch(
        updateUserData({ updatedData: { watchlistMovies: updatedList } })
      );
    } catch (e: unknown) {
      console.error(e);
      throw new Error(
        "Couldn't update the Movie Watchlist due to unknown error"
      );
    }
  };

  // Returned JSX
  return (
    <div className={`flex ${BASE_GAP_CLASS}`}>
      <ModalProvider>
        <TrailerButton video={trailer!} />
      </ModalProvider>
      {uid && (
        <>
          <Button onClick={addToFavoritesHandler}>
            <span>
              <HeartIcon className="w-8 inline-block pb-1 mr-2" />
              {isLiked ? "Remove from" : "Add to"} Favorites
            </span>
          </Button>
          <Button onClick={addToWatchListHandler}>
            <span>
              <EyeIcon className="w-8 inline-block pb-1 mr-2" />
              {isInWatchList ? "Remove from" : "Add to"} Watch list
            </span>
          </Button>
        </>
      )}
    </div>
  );
}

export default MediaButtons;
