import { EyeIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";

import { IGradedList, MediaTypeAndId } from "@/lib/types";
import { getUserListsInfo } from "@/utils/helpers";

function MediaInList({ type, id }: MediaTypeAndId) {
  // Getting the correct user lists
  const { isLiked, isInWatchList, isRated } = getUserListsInfo({ type, id });

  // Common classes
  const classesList =
    "px-2 pr-3 py-0 flex items-center gap-1 text-[1.3rem] rounded-xl";

  // Returned JSX
  return (
    <div className="flex items-center gap-3 mt-1 mb-2">
      {type !== "person" && (
        <div
          className={`bg-purple-800 ${classesList} text-purple-200 cursor-pointer`}
        >
          <StarIcon className="w-5" />{" "}
          {(isRated !== undefined && (isRated as IGradedList).rate) ||
            `Rate this ${type === "tv" ? "show" : type}`}
        </div>
      )}
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
