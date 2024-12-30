import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import ActorDetails from "@/features/actorDetails/ActorDetails";
import { IPerson } from "@/lib/typesAPI";
import { getActor } from "@/services/apiActors";

// Show data loader
export const actorLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IPerson> => {
  // Getting the actor using API function
  const actor = await getActor(params.actorId!);
  // Return show
  return actor;
};

function Actor() {
  // Getting the actor data from the loader
  const actor = useLoaderData() as IPerson;

  // Returned JSX
  return <ActorDetails actor={actor} />;
}

export default Actor;
