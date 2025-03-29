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
    <div className={`flex ${BASE_GAP_CLASS}`}>
      <div className="relative basis-[30rem] xl:basis-[25rem] xxl:basis-[30rem] flex-shrink-0 pb-[16.875rem] xl:pb-[14rem] xxl:pb-[16.875rem]">
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
        <div className="font-heading text-[2.2rem] md:text-[2.8rem] xl:text-[2.2rem] xxl:text-[2.5rem]">
          {name}
        </div>

        <div className="text-xl md:text-[1.5rem] xl:text-xl mb-2 flex gap-3">
          Air date: {formatDate(air_date)}
          {runtime && (
            <>
              <span>•</span> {runtime} minutes
            </>
          )}
        </div>
        <div className="text-[1.3rem] md:text-2xl xl:text-[1.3rem] xxl:text-2xl leading-[1.7rem] md:leading-[1.9rem] xl:leading-[1.7rem] xxl:leading-[1.9rem]">
          {shortenOverview}
        </div>
      </div>
    </div>
  );
}

export default SeasonEpisode;
