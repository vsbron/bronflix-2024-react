import Loader from "@/components/ui/Loader";
import { useSeason } from "./useSeason";
import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { formatDate } from "@/utils/helpers";
import ScorePreview from "@/components/ScorePreview";
import { NO_SHOW_COVER } from "@/lib/assets";
import { IEpisode } from "@/lib/typesAPI";
import ShowEpisode from "./ShowEpisode";

function SeasonDetails({ seasonNumber }: { seasonNumber: number }) {
  // Getting the season data from React Query
  const { data, isLoading, error } = useSeason(seasonNumber);

  if (isLoading) return <Loader />;

  if (!data || error) return <div>Sorry, couldn't get this season data</div>;

  console.log(data);

  // Returned JSX
  return (
    <div className={`grid ${PREVIEWS_GAP_CLASS} grid-cols-[20.7rem_1fr]`}>
      <img
        src={`${MEDIA_IMG_URL}w500${data.poster_path}`}
        className="rounded-lg"
      />
      <div className="flex flex-col justify-end ">
        <div>{data.vote_average}</div>
        <div>{data.name}</div>
        <div>{formatDate(data.air_date)}</div>
        <div className="w-1/2">{data.overview}</div>
      </div>
      <div className="col-span-full">
        <h3>Episodes:</h3>
        <div className={`flex flex-col ${PREVIEWS_GAP_CLASS}`}>
          {data.episodes.map((episode: IEpisode) => (
            <ShowEpisode episode={episode} key={episode.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeasonDetails;
