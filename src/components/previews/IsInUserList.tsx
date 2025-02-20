import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";

import { IsInUserListProps } from "@/lib/types";
import { useUser } from "@/redux/reducers/userReducer";

function IsInUserList({ type, id }: IsInUserListProps) {
  // Get the personal lists from Redux store
  const {
    watchlistMovies,
    watchlistShows,
    likedMovies,
    likedPeople,
    likedShows,
  } = useUser();

  // Checking whether media is liked or is in watch list
  let isLiked, isInWatchList;
  switch (type) {
    case "movies":
      isLiked = likedMovies.some((movie) => movie.id === id);
      isInWatchList = watchlistMovies.some((movie) => movie.id === id);
      break;
    case "tv":
      isLiked = likedShows.some((show) => show.id === id);
      isInWatchList = watchlistShows.some((show) => show.id === id);
      break;
    case "person":
      isLiked = likedPeople.some((person) => person.id === id);
      break;
    default:
      isLiked = false;
      isInWatchList = false;
  }

  // Returned JSX
  return (
    <div className="absolute top-3 right-3 z-10 w-[2.2rem] flex flex-col gap-2">
      {isLiked && (
        <div className="bg-red-800 rounded-full p-1">
          <HeartIcon className="text-red-200" />
        </div>
      )}
      {isInWatchList && (
        <div className="bg-orange-800 rounded-full p-1">
          <EyeIcon className="text-orange-200" />
        </div>
      )}
    </div>
  );
}

export default IsInUserList;
