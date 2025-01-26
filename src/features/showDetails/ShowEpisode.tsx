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
    ? `${MEDIA_IMG_URL}original${still_path}`
    : NO_SHOW_COVER;

  // Returned JSX
  return (
    <div className={`flex ${PREVIEWS_GAP_CLASS}`}>
      <div className="relative basis-[30rem] flex-shrink-0">
        <img src={snapshot} className="rounded-lg w-full" />
        <ScorePreview score={vote_average} />
      </div>
      <div className="flex flex-col justify-end">
        <div>
          Episode {episode_number} ({runtime} minutes) | {formatDate(air_date)}
        </div>
        <div className="font-heading text-4xl">{name}</div>
        <div>{overview}</div>
      </div>
    </div>
  );
}

export default SeasonEpisode;
