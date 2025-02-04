import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { Link } from "react-router-dom";

function SearchPreviewSmall({ media }: { media: any }) {
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
  const mediaTitle = title || name;
  const mediaType =
    media_type === "movie"
      ? "movies"
      : media_type === "person"
      ? "person"
      : "shows";
  const date = new Date(release_date || first_air_date).getFullYear() || "TBA";
  const mediaImage = poster_path || profile_path;

  // Returned JSX
  return (
    <div>
      <Link
        to={`${mediaType}/${id}`}
        className={`flex ${PREVIEWS_GAP_CLASS} items-end hover:text-red-300`}
      >
        <img
          src={`${MEDIA_IMG_URL}/w200/${mediaImage}`}
          width={40}
          height={120}
          className="rounded-md"
        />

        <div>
          {mediaTitle} {mediaType !== "person" && `(${date})`}
        </div>
      </Link>
    </div>
  );
}

export default SearchPreviewSmall;
