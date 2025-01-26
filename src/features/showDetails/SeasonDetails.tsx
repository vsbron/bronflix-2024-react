import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { SeasonDetailsProps } from "@/lib/types";
import { IEpisode } from "@/lib/typesAPI";
import { formatDate } from "@/utils/helpers";

import Loader from "@/components/ui/Loader";
import SeasonEpisode from "@/features/showDetails/ShowEpisode";
import { useSeason } from "@/features/showDetails/useSeason";

function SeasonDetails({ seasonNumber }: SeasonDetailsProps) {
  // Getting the season data from React Query
  const { data, isLoading, error } = useSeason(seasonNumber);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (!data || error) return <div>Sorry, couldn't get this season data</div>;

  // Destructuring the fetched data
  const { name, episodes, air_date, poster_path, vote_average, overview } =
    data;

  // Cutting the seasons' episodes to two, for two columns
  const midIndex = Math.ceil(episodes.length / 2);
  const [seasonHalf1, seasonHalf2] = [
    episodes.slice(0, midIndex),
    episodes.slice(midIndex),
  ];

  // Returned JSX
  return (
    <div className={`grid ${PREVIEWS_GAP_CLASS} grid-cols-[20.7rem_1fr]`}>
      <img src={`${MEDIA_IMG_URL}w500${poster_path}`} className="rounded-lg" />
      <div className="flex flex-col justify-end ">
        <div>{vote_average}</div>
        <div>{name}</div>
        <div>{formatDate(air_date)}</div>
        <div className="w-1/2">
          {overview || "No overview available for this season."}
        </div>
      </div>
      <div className="col-span-full">
        <h3>Episodes:</h3>
        <div className="grid grid-cols-2 gap-12">
          <div className={`flex flex-col ${PREVIEWS_GAP_CLASS}`}>
            {seasonHalf1.map((episode: IEpisode) => (
              <SeasonEpisode episode={episode} key={episode.id} />
            ))}
          </div>
          <div className={`flex flex-col ${PREVIEWS_GAP_CLASS}`}>
            {seasonHalf2.map((episode: IEpisode) => (
              <SeasonEpisode episode={episode} key={episode.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeasonDetails;
