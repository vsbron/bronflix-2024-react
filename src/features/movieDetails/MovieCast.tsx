import { useRef } from "react";
import { Link } from "react-router-dom";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Ribbon from "@/components/previews/Ribbon";
import PreviewImage from "@/components/previews/PreviewImage";

import { useMovieCast } from "./useMovieCast";
import { ICast } from "@/lib/typesAPI";

function MovieCast() {
  // Getting the fetched cast and setting the ref for ribbon element
  const { isLoading, cast, error } = useMovieCast();
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !cast)
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching cast actors"}
      </div>
    );

  console.log(cast);

  // Returned JSX
  return (
    <div>
      <Heading as="h2">Cast & Characters</Heading>
      <Ribbon length={cast.length} ribbon={ribbonRef} isScrollByOne={true}>
        {cast.map((actor: ICast) => (
          <div
            className="block basis-64 flex-shrink-0 rounded-lg overflow-x-hidden"
            key={actor.id}
          >
            <div key={actor.id} className="h-[25rem] cursor-pointer">
              <Link to={`/actors/${actor.id}`}>
                <PreviewImage media={actor} type={"actors"} />
              </Link>
            </div>
            <div className="text-stone-50 text-center mt-4 text-[1.5rem] px-1 py-3 leading-tight border-red-900 border-t">
              {actor.character}
            </div>
          </div>
        ))}
      </Ribbon>
    </div>
  );
}

export default MovieCast;
