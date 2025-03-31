import { NO_SHOW_POSTER } from "@/lib/assets";
import { MEDIA_IMG_URL, BASE_GAP_CLASS } from "@/lib/constants";
import { SeasonDetailsProps } from "@/lib/types";
import { IEpisode } from "@/lib/typesAPI";
import { FormatTextBlock } from "@/utils/FormatTextBlock";
import { formatDate } from "@/utils/helpers";

import ScorePreview from "@/components/ScorePreview";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import SeasonEpisode from "@/features/showDetails/ShowEpisode";
import { useSeason } from "@/features/showDetails/useSeason";
import Button from "@/components/ui/Button";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

function SeasonDetails({ seasonNumber }: SeasonDetailsProps) {
  // Getting the season data from React Query
  const { data, isLoading, error } = useSeason(seasonNumber);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (!data || error)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching season data"}
      </div>
    );

  // Destructuring the fetched data
  const { name, episodes, air_date, poster_path, vote_average, overview } =
    data;

  // Formatting the overview
  const formattedOverview = overview
    ? FormatTextBlock(overview)
    : "No overview available for this season.";

  // Setting the poster image
  const poster = poster_path
    ? `${MEDIA_IMG_URL}w500${poster_path}`
    : NO_SHOW_POSTER;

  // Returned JSX
  return (
    <>
      <div
        className={`flex flex-col sm:grid ${BASE_GAP_CLASS} gap-y-0 grid-cols-[20.7rem_1fr] grid-rows-[1fr_auto] sm:items-end`}
      >
        <div className="relative sm:row-span-1 md:row-span-2 mt-0">
          <ScorePreview score={vote_average} />
          <img
            src={poster}
            className="rounded-lg max-md:w-[20rem]"
            alt={`Season poster`}
            title={`Poster of the ${name}`}
          />
        </div>
        <div className="flex flex-col max-md:mt-6">
          <div className="font-heading text-5xl mb-2">{name}</div>
          <div className="text-2xl lg:text-xl">
            Air date: {formatDate(air_date)}
          </div>
        </div>
        <div className="lg:w-2/3 xl:w-1/2 text-2xl max-sm:col-span-1 max-md:col-span-2">
          {formattedOverview}
        </div>
        {episodes.length > 0 && (
          <div className="max-w-[70rem] xl:max-w-full col-span-full">
            <Heading as="h3">{`${name} Episodes`}</Heading>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {episodes.map((episode: IEpisode) => (
                <SeasonEpisode episode={episode} key={episode.id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-12">
        <Button>
          <a href="#season-select">
            <ArrowUpIcon className="w-8 inline-block pb-1 mr-2" />
            Return to Season List
          </a>
        </Button>
      </div>
    </>
  );
}

export default SeasonDetails;
