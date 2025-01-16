import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import {
  NOTABLE_POPULARITY_LIMIT,
  NOTABLE_SCORE_LIMIT,
  NOTABLE_WORK_LIMIT,
} from "@/lib/constants";
import { IMediaCredit, IPerson } from "@/lib/typesAPI";
import { getPerson } from "@/services/apiPerson";

import PersonDetails from "@/features/personDetails/PersonDetails";
import PersonNotableWork from "@/features/personDetails/PersonNotableWork";
import PersonFilmography from "@/features/personDetails/PersonFilmography";
import { usePersonCredits } from "@/features/personDetails/usePersonCredits";
import Heading from "@/components/ui/Heading";
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

  // Getting the movies data from React Query
  const { isLoading, data: movies, error } = usePersonCredits(person.id);

  // Guard clause
  if (isLoading || error) return <Loader />;

  // Filtering out the notable movies
  const notableMovies = movies
    .filter(
      (movie: IMediaCredit) =>
        movie.popularity > NOTABLE_POPULARITY_LIMIT &&
        movie.vote_average >= NOTABLE_SCORE_LIMIT
    )
    .sort((a: IMediaCredit, b: IMediaCredit) => b.vote_average - a.vote_average)
    // Remove duplicates based on unique property (e.g., `id`)
    .filter(
      (movie: any, index: any, self: any) =>
        index === self.findIndex((m: any) => m.id === movie.id)
    )
    .slice(0, NOTABLE_WORK_LIMIT);

  // Returned JSX
  return (
    <div className="grid grid-cols-[60%_40%] gap-x-12">
      <Heading>{person.name}</Heading>
      <div className="flex flex-col gap-10">
        <PersonDetails person={person} />
        <PersonNotableWork movies={notableMovies} />
      </div>
      <PersonFilmography />
    </div>
  );
}

export default Person;
