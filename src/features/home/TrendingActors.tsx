import { Link } from "react-router-dom";

import { useTrendingActors } from "./useTrendingActors";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IActor } from "@/lib/types";

function TrendingActors() {
  // Getting the trending actors
  const { isLoading, actors, error } = useTrendingActors();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !actors)
    return <div className="text-red-500">Error fetching actors</div>;

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING ACTORS</Heading>
      {actors?.length ? (
        <div className="flex gap-6 h-96">
          {actors.map((actor: IActor) => (
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
                <div className="bg-featured-background px-2 pb-4 pt-20 w-full font-heading font-light text-[1.9rem]">
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
