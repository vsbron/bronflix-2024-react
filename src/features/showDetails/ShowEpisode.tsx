import { NO_SHOW_COVER } from "@/lib/assets";
import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { SeasonEpisodeProps } from "@/lib/types";
import { formatDate } from "@/utils/helpers";

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
  const splitOverview = overview.split(". ").slice(0, 2).join(". ");

  // Returned JSX
  return (
    <div className={`flex ${PREVIEWS_GAP_CLASS}`}>
      <div className="relative basis-[30rem] flex-shrink-0 pb-[16.875rem] overflow-hidden rounded-lg ">
        <img src={snapshot} className="object-cover absolute inset-0" />
        <ScorePreview score={vote_average} />
      </div>
      <div className="flex flex-col justify-end">
        <div className="text-[1.5rem] flex gap-3 -mb-2">
          Ep. {episode_number} ({formatDate(air_date)}
          <span>|</span>
          {runtime} minutes)
        </div>
        <div className="font-heading text-[2.5rem] mb-1">{name}</div>
        <div className="text-2xl">{splitOverview}</div>
      </div>
    </div>
  );
}

export default SeasonEpisode;
