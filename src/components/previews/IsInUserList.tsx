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
    <div className="absolute top-3 right-3 z-10 w-8 flex flex-col gap-1 add-to-user-list-ui">
      {isLiked && <HeartIcon className="text-red-600 " />}
      {isInWatchList && <EyeIcon className="text-orange-400" />}
    </div>
  );
}

export default IsInUserList;
