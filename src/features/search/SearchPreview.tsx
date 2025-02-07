import { Link } from "react-router-dom";
import { CalendarIcon, LanguageIcon } from "@heroicons/react/24/outline";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { LANGUAGES } from "@/lib/constantsGeo";
import { SearchPreviewProps } from "@/lib/types";
import { formatDate, getSearchMediaData, shortenText } from "@/utils/helpers";

import ScorePreview from "@/components/ScorePreview";
import IconWrapper from "@/components/IconWrapper";

function SearchPreview({ media }: SearchPreviewProps) {
  // Getting all the necessary data for the preview
  const { mediaType, mediaTitle, mediaImage } = getSearchMediaData(media);

  // Destructuring additional media data
  const {
    title,
    name,
    release_date,
    first_air_date,
    original_language,
    overview,
    vote_average,
  } = media;

  // Shortening the overview
  const shortenOverview = overview && shortenText(overview, 250);

  // Setting boolean whether we deal with media or not and the date
  const isMedia = mediaType !== "person";
  const date = release_date || first_air_date;

  // Returned JSX
  return (
    <Link
      to={`/${mediaType}/${media.id}`}
      className={`flex ${BASE_GAP_CLASS} items-end hover:text-red-300`}
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
        {isMedia && <ScorePreview score={vote_average} />}
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-heading text-5xl">{title || name}</div>
        {isMedia && (
          <div className={`flex ${BASE_GAP_CLASS} text-[1.5rem]`}>
            <IconWrapper icon={<CalendarIcon />}>
              {formatDate(date)}
            </IconWrapper>
            <IconWrapper icon={<LanguageIcon />}>
              {LANGUAGES[original_language]}
            </IconWrapper>
          </div>
        )}
        {isMedia && (
          <div className="text-[1.4rem]">
            {shortenOverview || "No overview available"}
          </div>
        )}
      </div>
    </Link>
  );
}

export default SearchPreview;
