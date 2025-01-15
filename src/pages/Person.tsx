import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IPerson } from "@/lib/typesAPI";
import { getPerson } from "@/services/apiPerson";

import PersonDetails from "@/features/personDetails/PersonDetails";

// Show data loader
export const personLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IPerson> => {
  // Getting the actor using API function
  const person = await getPerson(params.personId!);
  // Return show
  return person;
};

function Actor() {
  // Getting the actor data from the loader
  const actor = useLoaderData() as IPerson;

  // Returned JSX
  return <PersonDetails actor={actor} />;
}

export default Actor;
