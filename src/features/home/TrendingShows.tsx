import { Link } from "react-router-dom";

import { useTrendingShows } from "./useTrendingShows";

import Heading from "@/components/Heading";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IShow } from "@/lib/types";

function TrendingShows() {
  // Getting the trending shows
  const { isLoading, shows, error } = useTrendingShows();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching shows</div>;

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING SHOWS</Heading>
      {shows?.length ? (
        <div className="flex gap-6 h-[24rem]">
          {shows.map((show: IShow) => (
            <Link
              to={`/shows/${show.id}`}
              key={show.id}
              className="block h-full basis-96"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${show.poster_path})`,
                }}
                className="rounded-lg h-[100%] basis-72 bg-cover bg-center"
              ></div>
            </Link>
          ))}
        </div>
      ) : (
        <div>Sorry, no shows available</div>
      )}
    </section>
  );
}

export default TrendingShows;
