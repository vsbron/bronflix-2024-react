import { Link } from "react-router-dom";

import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { SearchPreviewProps } from "@/lib/types";
import { getSearchMediaData } from "@/utils/helpers";

import ScorePreview from "@/components/ScorePreview";

function SearchPreview({ media }: SearchPreviewProps) {
  // Getting all the necessary data for the preview
  const { mediaType, mediaTitle, mediaImage } = getSearchMediaData(media);

  // Destructuring additional media data
  const { title, overview, vote_average } = media;

  // Shortening the overview
  const shortenOverview =
    overview.length > 250
      ? overview.slice(0, 250).trim().split(" ").slice(0, -1).join(" ") + "..."
      : overview;

  // Returned JSX
  return (
    <Link
      to={`/${mediaType}/${media.id}`}
      className={`flex ${PREVIEWS_GAP_CLASS} items-end hover:text-red-300`}
    >
      <div className="relative basis-[17.5rem] flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={mediaImage}
          className="rounded-md"
          width={175}
          height={300}
          alt={mediaTitle}
          title={mediaTitle}
        />
        {vote_average !== null ? <ScorePreview score={vote_average} /> : ""}
      </div>
      <div>
        <div className="font-heading text-5xl mb-2">{title}</div>
        <div className="text-2xl">{shortenOverview}</div>
      </div>
    </Link>
  );
}

export default SearchPreview;
