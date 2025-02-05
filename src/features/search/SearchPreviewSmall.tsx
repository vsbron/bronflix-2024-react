import { Link } from "react-router-dom";

import { NO_MOVIE_POSTER, NO_PERSON_PHOTO, NO_SHOW_POSTER } from "@/lib/assets";
import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { SearchPreviewSmallProps } from "@/lib/types";
import { getMediaImagesSearch } from "@/utils/helpers";

function SearchPreviewSmall({ media }: SearchPreviewSmallProps) {
  // Destructuring media data
  const {
    id,
    media_type,
    release_date,
    first_air_date,
    title,
    name,
    poster_path,
    profile_path,
  } = media;

  // Preparing some constants for JSX
  let mediaTitle, mediaType, mediaImage;
  switch (media_type) {
    case "tv":
      mediaTitle = name;
      mediaType = "shows";
      mediaImage = getMediaImagesSearch(poster_path, NO_SHOW_POSTER);
      break;
    case "person":
      mediaTitle = name;
      mediaType = "person";
      mediaImage = getMediaImagesSearch(profile_path, NO_PERSON_PHOTO);
      break;
    default:
      mediaTitle = title;
      mediaType = "movies";
      mediaImage = getMediaImagesSearch(poster_path, NO_MOVIE_POSTER);
  }
  const date = release_date || first_air_date;
  const releaseDate = date ? new Date(date).getFullYear() : "TBA";
  const finalMediaTitle = `${mediaTitle} ${
    mediaType !== "person" && `(${releaseDate})`
  }`;

  // Returned JSX
  return (
    <div>
      <Link
        to={`${mediaType}/${id}`}
        className={`flex ${PREVIEWS_GAP_CLASS} items-end hover:text-red-300`}
      >
        <img
          src={mediaImage}
          className="rounded-md"
          width={40}
          height={120}
          alt={finalMediaTitle}
          title={finalMediaTitle}
        />
        <div>{finalMediaTitle}</div>
      </Link>
    </div>
  );
}

export default SearchPreviewSmall;
