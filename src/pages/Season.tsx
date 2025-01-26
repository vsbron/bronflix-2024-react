import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { ISeason } from "@/lib/typesAPI";
import { getSeason } from "@/services/apiShows";

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
  const show = useLoaderData() as ISeason;

  // Returned JSX
  return <div></div>;
}

export default Season;
