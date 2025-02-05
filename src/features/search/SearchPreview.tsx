import { Link } from "react-router-dom";

import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { SearchPreviewProps } from "@/lib/types";
import { getSearchMediaData, shortenText } from "@/utils/helpers";

import ScorePreview from "@/components/ScorePreview";

function SearchPreview({ media }: SearchPreviewProps) {
  // Getting all the necessary data for the preview
  const { mediaType, mediaTitle, mediaImage } = getSearchMediaData(media);

  // Destructuring additional media data
  const { title, name, overview, vote_average } = media;

  // Shortening the overview
  const shortenOverview = overview && shortenText(overview, 250);

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
        {vote_average ? <ScorePreview score={vote_average} /> : ""}
      </div>
      <div>
        <div className="font-heading text-5xl mb-2">{title || name}</div>
        {overview && (
          <div className="text-2xl">
            {shortenOverview || "No overview available"}
          </div>
        )}
      </div>
    </Link>
  );
}

export default SearchPreview;
