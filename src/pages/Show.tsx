import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IShow } from "@/lib/typesAPI";
import { getShow } from "@/services/apiShows";

import ShowDetails from "@/features/showDetails/ShowDetails";

// Show data loader
export const showLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IShow> => {
  // Getting the show using API function
  const show = await getShow(params.showId!);
  // Return show
  return show;
};

function Show() {
  // Getting the show data from the loader
  const show = useLoaderData() as IShow;

  // Returned JSX
  return <ShowDetails show={show} />;
}

export default Show;
