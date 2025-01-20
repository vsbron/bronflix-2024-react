import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { IMovie, IPerson, IShow } from "@/lib/typesAPI";
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
  const { isLoading, data } = usePersonCredits(person.id);

  // Guard clauses
  if (isLoading) return <Loader />;

  // Destructuring and combining the fetched data (data is guaranteed as we catch the error in Router)
  const { movies, shows } = data!;
  const { cast: moviesCast, crew: moviesCrew } = movies;
  const { cast: showsCast, crew: showsCrew } = shows;

  // Combining data to work as a cast and work as a crew
  const cast = [
    ...moviesCast.map((movie: IMovie) => ({ ...movie, type: "movies" })),
    ...showsCast.map((show: IShow) => ({ ...show, type: "tv" })),
  ];
  const crew = [
    ...moviesCrew.map((movie: IMovie) => ({ ...movie, type: "movies" })),
    ...showsCrew.map((show: IShow) => ({ ...show, type: "tv" })),
  ];

  // Boolean indicator for correct work to be highlighted
  const isActor = person.known_for_department === "Acting";

  // Returned JSX
  return (
    <div className="grid grid-cols-[60%_40%] gap-x-12">
      <Heading>{person.name}</Heading>
      <div className="flex flex-col gap-10">
        <PersonDetails person={person} />
        <PersonNotableWork credits={isActor ? cast : crew} />
      </div>
      <PersonFilmography />
    </div>
  );
}

export default Person;
