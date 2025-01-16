import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IPerson } from "@/lib/typesAPI";
import { getPerson } from "@/services/apiPerson";

import PersonDetails from "@/features/personDetails/PersonDetails";
import PersonNotableWork from "@/features/personDetails/PersonNotableWork";
import PersonFilmography from "@/features/personDetails/PersonFilmography";
import { usePersonCredits } from "@/features/personDetails/usePersonCredits";
import Heading from "@/components/ui/Heading";
import Error from "./Error";
import Loader from "@/components/ui/Loader";

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

  const { isLoading, data: movies, error } = usePersonCredits(person.id);

  if (isLoading || error) return <Loader />;

  // Returned JSX
  return (
    <div className="grid grid-cols-[60%_40%] gap-x-12">
      <Heading>{person.name}</Heading>
      <div className="flex flex-col gap-10">
        <PersonDetails person={person} />
        <PersonNotableWork movies={movies.cast} />
      </div>
      <PersonFilmography />
    </div>
  );
}

export default Person;
