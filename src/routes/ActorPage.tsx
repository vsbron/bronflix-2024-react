import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import ActorDetails from "../features/actorDetails/ActorDetails";

import Wrapper from "../components/Wrapper";
import { IActor } from "../lib/types";
import { getActor } from "../services/apiActors";

// Show data loader
export const actorLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IActor> => {
  // Getting the actor using API function
  const actor = await getActor(params.actorId!);
  // Return show
  return actor;
};

function ActorPage() {
  // Getting the actor data from the loader
  const actor = useLoaderData() as IActor;

  console.log(actor);

  // Returned JSX
  return (
    <Wrapper>
      <ActorDetails actor={actor} />
    </Wrapper>
  );
}

export default ActorPage;
