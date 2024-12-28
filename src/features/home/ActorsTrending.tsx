import { Link } from "react-router-dom";

import { useActorsTrending } from "./useActorsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IPerson } from "@/lib/types";

function ActorsTrending() {
  // Getting the trending actors
  const { isLoading, actors, error } = useActorsTrending();

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
        <div className="flex gap-6 h-96">
          {actors.map((actor: IPerson) => (
            <Link
              to={`/actors/${actor.id}`}
              key={actor.id}
              className="block h-full basis-96"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${actor.profile_path})`,
                }}
                className="rounded-lg h-[100%] basis-60 flex items-end preview-bg"
              >
                <div className="bg-preview px-2 pb-4 pt-20 w-full font-heading font-light text-[1.9rem]">
                  <h4>{actor.name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default ActorsTrending;
