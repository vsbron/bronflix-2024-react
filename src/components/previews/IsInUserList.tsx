import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";

import { useUser } from "@/redux/reducers/userReducer";
import { IsInUserListProps } from "@/lib/types";

function IsInUserList({ type, id }: IsInUserListProps) {
  // Get the personal lists from Redux store
  const {
    watchListMovies,
    watchListShows,
    likedMovies,
    likedPeople,
    likedShows,
  } = useUser();

  // Converting ID to number
  const idNum = parseInt(id);

  // Checking whether media is liked or is in watch list
  let isLiked, isInWatchList;
  switch (type) {
    case "movie":
      isLiked = likedMovies.includes(idNum);
      isInWatchList = watchListMovies.includes(idNum);
    case "tv":
      isLiked = likedShows.includes(idNum);
      isInWatchList = watchListShows.includes(idNum);
    default:
      isLiked = likedPeople.includes(idNum);
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
