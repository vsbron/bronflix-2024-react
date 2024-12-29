import { Link } from "react-router-dom";

import { useActorsTrending } from "./useActorsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IPerson } from "@/lib/types";
import Ribbon from "@/components/previews/Ribbon";
import { useRef } from "react";

function ActorsTrending() {
  // Getting the trending actors and ref for ribbon element
  const { isLoading, actors, error } = useActorsTrending();
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading as="h2">TRENDING ACTORS</Heading>
      {isLoading ? (
        <Loader />
      ) : error || !actors || !actors.length ? (
        <div className="text-red-500">
          {error?.message || "Error fetching trending actors"}
        </div>
      ) : (
        // Content
        <Ribbon length={actors.length} ribbon={ribbonRef}>
          {actors.map((actor: IPerson) => (
            <Link
              to={`/actors/${actor.id}`}
              key={actor.id}
              className="block basis-[16.8rem] h-[25rem] flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${actor.profile_path})`,
                }}
                className="rounded-lg h-full flex items-end preview-bg"
              >
                <div className="bg-preview px-2 pb-4 pt-20 w-full font-heading font-light text-[1.9rem]">
                  <h4>{actor.name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </Ribbon>
      )}
    </section>
  );
}

export default ActorsTrending;
