import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IPerson } from "@/lib/typesAPI";
import { getPerson } from "@/services/apiPerson";

import PersonDetails from "@/features/personDetails/PersonDetails";

// Show data loader
export const personLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IPerson> => {
  // Getting the person using API function
  const person = await getPerson(params.personId!);
  // Return show
  return person;
};

function Person() {
  // Getting the person data from the loader
  const person = useLoaderData() as IPerson;

  // Returned JSX
  return <PersonDetails person={person} />;
}

export default Person;
