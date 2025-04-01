import { Link } from "react-router-dom";
import { CalendarIcon, LanguageIcon } from "@heroicons/react/24/outline";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { LANGUAGES } from "@/lib/constantsGeo";
import { Media, ResultPreviewProps } from "@/lib/types";
import { useUser } from "@/redux/reducers/userReducer";
import { formatDate, getSearchMediaData, shortenText } from "@/utils/helpers";

import ScorePreview from "@/components/ScorePreview";
import IconWrapper from "@/components/IconWrapper";
import IsInUserList from "@/components/previews/IsInUserList";

function ResultPreview({ media, type }: ResultPreviewProps) {
  // Getting all the necessary data for the preview and setting the correct type
  const { mediaType, mediaTitle, mediaImage } = getSearchMediaData(media);
  const finalMediaType = type
    ? type === "movie"
      ? "movies"
      : "shows"
    : mediaType;

  // Getting user id from redux store
  const { uid } = useUser();

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
      to={`/${finalMediaType}/${media.id}`}
      className={`grid grid-cols-1 xs:grid-cols-[auto_1fr] xs:grid-rows-[1fr_auto] ${BASE_GAP_CLASS} gap-y-3 items-end hover:text-red-300`}
    >
      <div className="relative overflow-hidden rounded-lg sm:row-span-2">
        <img
          src={mediaImage}
          className="w-[20rem] sm:w-[17.5rem] rounded-md"
          width={175}
          height={300}
          alt={mediaTitle}
          title={mediaTitle}
        />
        {isMedia && <ScorePreview score={vote_average} />}
        {uid && <IsInUserList type={finalMediaType as Media} id={media.id} />}
      </div>
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="font-heading text-[2.2rem] sm:text-[2.5rem] xxl:text-[3rem] leading-[1.1] sm:leading-[1.2]">{title || name}</div>
        {isMedia && (
          <div className={`flex max-md:gap-x-3 ${BASE_GAP_CLASS} gap-y-1 text-[1.4rem] sm:text-[1.5rem] flex-wrap`}>
            <IconWrapper icon={<CalendarIcon />}>
              {formatDate(date)}
            </IconWrapper>
            <IconWrapper icon={<LanguageIcon />}>
              {LANGUAGES[original_language]}
            </IconWrapper>
          </div>
        )}
      </div>
      {isMedia && (
          <div className="text-[1.3rem] sm:text-[1.4rem] xs:col-span-2 sm:col-span-1">
            {shortenOverview || "No overview available"}
          </div>
        )}
    </Link>
  );
}

export default ResultPreview;
