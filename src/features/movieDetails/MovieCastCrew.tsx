import { MovieCastCrewProps } from "@/lib/types";
import { ICast, ICrew } from "@/lib/typesAPI";
import { CAST_MAX, CREW_JOBS, CREW_MAX } from "@/lib/constants";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import Loader from "@/components/ui/Loader";
import { useMovieCast } from "@/features/movieDetails/useMovieCast";

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

  // Guard clause
  if (cast.length === 0 && crew.length === 0) return null;

  // Filtering the cast and crew arrays
  const shortenCast = cast.slice(0, CAST_MAX);
  const shortenCrew = crew
    .filter((crewPerson) => CREW_JOBS.includes(crewPerson.job))
    .sort((a, b) => CREW_JOBS.indexOf(a.job) - CREW_JOBS.indexOf(b.job))
    .slice(0, CREW_MAX);

  // Returned JSX
  return (
    <>
      {cast.length > 0 && (
        <section>
          <Heading as="h2">Cast & Characters</Heading>
          {/* The Cast */}
          <Previews
            rawPreviews={shortenCast as ICast[]}
            height="26rem"
            width="18rem"
            type="person"
            subtitle="character"
          />
        </section>
      )}
      {/* The Crew (if available) */}
      {crew.length > 0 && (
        <section>
          <Heading as="h2">Crew</Heading>
          <Previews
            rawPreviews={shortenCrew as ICrew[]}
            height="20rem"
            width="14rem"
            type="person"
            subtitle="job"
          />
        </section>
      )}
    </>
  );
}

export default MovieCastCrew;
