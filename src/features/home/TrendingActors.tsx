import { Link } from "react-router-dom";

import { useTrendingActors } from "./useTrendingActors";

import Heading from "@/components/Heading";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IActor } from "@/lib/types";

function TrendingActors() {
  // Getting the trending actors
  const { isLoading, actors, error } = useTrendingActors();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching actors</div>;

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING ACTORS</Heading>
      {actors?.length ? (
        <div className="flex gap-6 h-80">
          {actors.map((actor: IActor) => (
            <Link to={`/actors/${actor.id}`} className="block h-full basis-96">
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${actor.profile_path})`,
                }}
                className="rounded-lg h-[100%] basis-60 bg-cover flex items-end"
              >
                <div className="bg-gradient-to-t from-stone-950 to-transparent px-2 pb-4 pt-20 w-full font-heading font-light text-[1.7rem]">
                  <h4>{actor.name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>Sorry, no actors available</div>
      )}
    </section>
  );
}

export default TrendingActors;
