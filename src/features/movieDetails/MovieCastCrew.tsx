import { Link } from "react-router-dom";

import { MovieCastCrewProps } from "@/lib/types";
import { ICast, ICrew } from "@/lib/typesAPI";
import { CREW_JOBS } from "@/lib/constants";

import { useMovieCast } from "./useMovieCast";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import Previews, { PreviewImage } from "@/components/previews/Previews";

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
        <Previews
          rawPreviews={shortenCast as ICast[]}
          height="26rem"
          width="18rem"
          type="actors"
          subtitle="character"
        />
      </section>
      {/* The Crew (if available) */}
      {crew.length > 0 && (
        <section>
          <Heading as="h2">Crew</Heading>
          <Previews
            rawPreviews={shortenCrew as ICrew[]}
            height="20rem"
            width="14rem"
            type="actors"
            subtitle="job"
          />
        </section>
      )}
    </>
  );
}

export default MovieCastCrew;
