import { NO_SHOW_COVER } from "@/lib/assets";
import { MEDIA_IMG_URL, BASE_GAP_CLASS } from "@/lib/constants";
import { SeasonEpisodeProps } from "@/lib/types";
import { formatDate, shortenText } from "@/utils/helpers";

import ScorePreview from "@/components/ScorePreview";

function SeasonEpisode({ episode }: SeasonEpisodeProps) {
  // Destructuring episode data
  const {
    name,
    episode_number,
    still_path,
    vote_average,
    runtime,
    overview,
    air_date,
  } = episode;

  // Setting the snapshot image
  const snapshot = still_path
    ? `${MEDIA_IMG_URL}w500${still_path}`
    : NO_SHOW_COVER;

  // Shortening the overview
  const shortenOverview = shortenText(overview, 150);

  // Returned JSX
  return (
    <div
      className={`flex flex-col xs:grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] ${BASE_GAP_CLASS} gap-y-3 overflow-hidden`}
    >
      <div className="relative max-w-[100%] w-[100%] xs:w-[20rem] sm:w-[30rem] xl:w-[25rem] xxl:w-[30rem] flex-shrink-0 pb-[56.25%] xs:pb-[11.2rem] sm:pb-[56.25%] sm:row-span-2">
        <img
          src={snapshot}
          className="object-cover absolute inset-0 rounded-lg"
          alt="Episode still"
          title={name}
        />
        <ScorePreview score={vote_average} />
      </div>
      <div className="flex flex-col justify-end">
        <div className="text-[1.4rem] md:text-[1.6rem] xl:text-[1.4rem] xxl:text-[1.5rem] -mb-2 text-stone-400 font-medium">
          Episode {episode_number}
        </div>
        <div className="font-heading text-[2.2rem] md:text-[2.8rem] xl:text-[2.2rem] xxl:text-[2.5rem] leading-10 max-md:mb-2 max-xl:mb-3 my-2">
          {name}
        </div>
        <div className="text-xl md:text-[1.5rem] xl:text-xl flex gap-x-3 gap-y-0 flex-wrap">
          Air date: {formatDate(air_date)}
          {runtime && (
            <>
              <span>•</span> {runtime} minutes
            </>
          )}
        </div>
      </div>
      <div className="text-[1.3rem] md:text-2xl xl:text-[1.3rem] xxl:text-2xl leading-[1.7rem] md:leading-[1.9rem] xl:leading-[1.7rem] xxl:leading-[1.9rem] xs:col-span-2 sm:col-span-1">
        {shortenOverview}
      </div>
    </div>
  );
}

export default SeasonEpisode;
