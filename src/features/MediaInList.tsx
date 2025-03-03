import { IsInUserListProps } from "@/lib/types";
import { useUser } from "@/redux/reducers/userReducer";
import { EyeIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";

function MediaInList({ type, id }: IsInUserListProps) {
  // Getting user data from Redux store
  const {
    watchlistMovies,
    watchlistShows,
    likedMovies,
    likedShows,
    ratedMovies,
  } = useUser();

  // Checking whether media is liked or is in watch list
  let isLiked, isInWatchList, isRated;
  switch (type) {
    case "movies":
      isLiked = likedMovies.some((movie) => movie.id === id);
      isInWatchList = watchlistMovies.some((movie) => movie.id === id);
      isRated = ratedMovies.find((movie) => movie.id === id);
      break;
    case "tv":
      isLiked = likedShows.some((show) => show.id === id);
      isInWatchList = watchlistShows.some((show) => show.id === id);
      break;
    default:
      isLiked = false;
      isInWatchList = false;
  }

  // Common classes
  const classesList =
    "px-2 pr-3 py-0 flex items-center gap-1 text-[1.3rem] rounded-xl";

  // Returned JSX
  return (
    <div className="flex items-center gap-3 mt-1 mb-2">
      <div className={`bg-purple-800 ${classesList} text-purple-200`}>
        <StarIcon className="w-5" /> {isRated?.rate || "Rate this movie"}
      </div>
      {isLiked && (
        <div className={`bg-red-800 ${classesList} text-red-200`}>
          <HeartIcon className="w-6" /> Favorite
        </div>
      )}
      {isInWatchList && (
        <div className={`bg-orange-800 ${classesList} text-orange-200`}>
          <EyeIcon className="w-6" /> Going to watch
        </div>
      )}
    </div>
  );
}

export default MediaInList;
