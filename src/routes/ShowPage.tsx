import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IShow } from "../lib/types";
import { getShow } from "../services/apiShows";
import Wrapper from "../components/Wrapper";
import ShowDetails from "../features/showDetails/ShowDetails";

// Show data loader
export const showLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IShow> => {
  // Getting the show using API function
  const show = await getShow(params.showId!);
  // Return show
  return show;
};

function ShowPage() {
  // Getting the show data from the loader
  const show = useLoaderData() as IShow;

  // Returned JSX
  return (
    <Wrapper>
      <ShowDetails show={show} />
    </Wrapper>
  );
}

export default ShowPage;
