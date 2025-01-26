import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { META_TITLE_END } from "@/lib/metaTags";
import { ISeason } from "@/lib/typesAPI";
import { getSeason } from "@/services/apiShows";

import SeasonDetails from "@/features/showDetails/SeasonDetails";

// Season data loader
export const seasonLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ISeason> => {
  // Getting the season using API function
  const season = await getSeason(params.seasonNumber!, params.showId!);
  // Return season
  return season;
};

function Season() {
  // Getting the season data from the loader
  const season = useLoaderData() as ISeason;

  console.log(season);

  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{`${season.name} - Season${META_TITLE_END}`}</title>
        <meta
          name="description"
          content={`Discover the overview of ${season.name}, explore the cast and crew, watch the trailer, and dive into all the details about the show's release.`}
        />
        <meta
          name="keywords"
          content={`${season.name}, show, TV series, plot, cast, crew, release date, creator, director, actors, genres, rating, episodes, seasons, trailer`}
        />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
      <SeasonDetails season={season} />
    </>
  );
}

export default Season;
