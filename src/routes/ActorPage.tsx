import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import ActorDetails from "@/features/actorDetails/ActorDetails";

import { IActor } from "@/lib/types";
import { getActor } from "@/services/apiActors";

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

  // Returned JSX
  return <ActorDetails actor={actor} />;
}

export default ActorPage;
