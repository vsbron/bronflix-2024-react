import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";

import { useUser } from "@/redux/reducers/userReducer";
import { IsInUserListProps } from "@/lib/types";

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
      isLiked = likedMovies.includes(id);
      isInWatchList = watchlistMovies.includes(id);
      break;
    case "tv":
      isLiked = likedShows.includes(id);
      isInWatchList = watchlistShows.includes(id);
      break;
    default:
      isLiked = likedPeople.includes(id);
  }

  // Returned JSX
  return (
    <div className="absolute top-3 right-3 z-10 w-10 flex flex-col gap-2">
      {isLiked && <div className="bg-red-800 rounded-full p-1"><HeartIcon className="text-red-300" /></div>}
      {isInWatchList && <div className="bg-orange-800 rounded-full p-1"><EyeIcon className="text-orange-300" /></div>}
    </div>
  );
}

export default IsInUserList;
