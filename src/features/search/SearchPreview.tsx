import { Link } from "react-router-dom";

import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { SearchPreviewProps } from "@/lib/types";
import { getSearchMediaData } from "@/utils/helpers";
import ScorePreview from "@/components/ScorePreview";

function SearchPreview({ media }: SearchPreviewProps) {
  // Getting all the necessary data for the preview
  const { mediaType, mediaTitle, mediaImage } = getSearchMediaData(media);

  console.log(media);

  const { overview, vote_average } = media;

  // Returned JSX
  return (
    <div>
      <Link
        to={`/${mediaType}/${media.id}`}
        className={`flex ${PREVIEWS_GAP_CLASS} items-end hover:text-red-300`}
      >
        <div className="relative">
          <img
            src={mediaImage}
            className="rounded-md"
            width={160}
            height={120}
            alt={mediaTitle}
            title={mediaTitle}
          />
          {vote_average ? <ScorePreview score={vote_average} /> : ""}
        </div>
        <div>
          <div>{mediaTitle}</div>
          <div>{overview}</div>
        </div>
      </Link>
    </div>
  );
}

export default SearchPreview;
