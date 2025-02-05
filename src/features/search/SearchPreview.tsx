import { Link } from "react-router-dom";

import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { SearchPreviewProps } from "@/lib/types";
import { getSearchMediaData } from "@/utils/helpers";

function SearchPreview({ media }: SearchPreviewProps) {
  // Getting all the necessary data for the preview
  const { mediaType, mediaTitle, mediaImage } = getSearchMediaData(media);

  // Returned JSX
  return (
    <div>
      <Link
        to={`${mediaType}/${media.id}`}
        className={`flex ${PREVIEWS_GAP_CLASS} items-end hover:text-red-300`}
      >
        <img
          src={mediaImage}
          className="rounded-md"
          width={40}
          height={120}
          alt={mediaTitle}
          title={mediaTitle}
        />
        <div>{mediaTitle}</div>
      </Link>
    </div>
  );
}

export default SearchPreview;
