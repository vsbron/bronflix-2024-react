import { Link } from "react-router-dom";

import { MovieCastCrewProps } from "@/lib/types";
import { ICast, ICrew } from "@/lib/typesAPI";
import { CREW_JOBS } from "@/lib/constants";

import { useMovieCast } from "./useMovieCast";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import PreviewImage from "@/components/previews/PreviewImage";

function MovieCastCrew({ movieId }: MovieCastCrewProps) {
  // Getting the fetched cast and setting the ref for ribbon element
  const { isLoading, data, error } = useMovieCast(movieId);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching cast & crew data"}
      </div>
    );

  // Destructuring the data
  const { cast, crew } = data;

  // Filtering the cast and crew arrays
  const shortenCast = cast.slice(0, 25);
  const shortenCrew = crew
    .filter((crewPerson) => CREW_JOBS.includes(crewPerson.job))
    .sort((a, b) => CREW_JOBS.indexOf(a.job) - CREW_JOBS.indexOf(b.job));

  // Returned JSX
  return (
    <>
      <section>
        <Heading as="h2">Cast & Characters</Heading>
        {/* The Cast */}
        <Ribbon length={shortenCast.length} isScrollByOne={true}>
          {shortenCast.map((actor: ICast) => (
            <div
              className="block basis-72 flex-shrink-0 rounded-lg overflow-x-hidden"
              key={actor.id}
            >
              <div className="h-[26rem] cursor-pointer">
                <Link to={`/actors/${actor.id}`}>
                  <PreviewImage media={actor} type={"actors"} />
                </Link>
              </div>
              <div className="text-stone-400 text-center mt-4 text-[1.5rem] px-1 py-3 leading-tight border-red-900 border-t">
                {actor.character}
              </div>
            </div>
          ))}
        </Ribbon>
      </section>
      {/* The Crew (if available) */}
      {crew.length > 0 && (
        <section>
          <Heading as="h2">Crew</Heading>
          <Ribbon length={shortenCrew.length} isScrollByOne={true}>
            {shortenCrew.map((crewPerson: ICrew) => (
              <div
                className="block basis-56 flex-shrink-0 rounded-lg overflow-x-hidden"
                key={crewPerson.id + "-" + crewPerson.job}
              >
                <div className="h-[20rem] cursor-pointer">
                  <Link to={`/actors/${crewPerson.id}`}>
                    <PreviewImage media={crewPerson} type={"actors"} />
                  </Link>
                </div>
                <div className="text-stone-400 text-center mt-4 text-[1.5rem] px-1 py-3 leading-tight border-red-900 border-t">
                  {crewPerson.job}
                </div>
              </div>
            ))}
          </Ribbon>
        </section>
      )}
    </>
  );
}

export default MovieCastCrew;
