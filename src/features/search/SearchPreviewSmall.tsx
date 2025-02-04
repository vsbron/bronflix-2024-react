import { Link } from "react-router-dom";

function SearchPreviewSmall({ media }: { media: any }) {
  // Destructuring media data
  const { id, media_type, release_date, first_air_date, title, name } = media;

  // Preparing some constants for JSX
  const mediaTitle = title || name;
  const mediaType =
    media_type === "movie"
      ? "movies"
      : media_type === "person"
      ? "person"
      : "shows";
  const date = new Date(release_date || first_air_date).getFullYear() || "TBA";

  // Returned JSX
  return (
    <div>
      <Link to={`${mediaType}/${id}`}>
        {mediaTitle} {mediaType !== "person" && { date }}
      </Link>
    </div>
  );
}

export default SearchPreviewSmall;
