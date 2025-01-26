import ScorePreview from "@/components/ScorePreview";
import { NO_SHOW_COVER } from "@/lib/assets";
import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { IEpisode } from "@/lib/typesAPI";
import { formatDate } from "@/utils/helpers";

function ShowEpisode({ episode }: { episode: IEpisode }) {
  const {
    id,
    name,
    episode_number,
    still_path,
    vote_average,
    runtime,
    overview,
    air_date,
  } = episode;

  const snapshot = still_path
    ? `${MEDIA_IMG_URL}original${still_path}`
    : NO_SHOW_COVER;

  return (
    <div className={`flex ${PREVIEWS_GAP_CLASS}`} key={id}>
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

export default ShowEpisode;
