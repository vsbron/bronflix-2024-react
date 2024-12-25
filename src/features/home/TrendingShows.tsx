import { Link } from "react-router-dom";

import { useTrendingShows } from "./useTrendingShows";

import Heading from "@/components/Heading";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IShow } from "@/lib/types";
import Loader from "@/components/Loader";

function TrendingShows() {
  // Getting the trending shows
  const { isLoading, shows, error } = useTrendingShows();

  // Guard clauses
  if (isLoading) return <Loader />;
  if (error || !shows)
    return <div className="text-red-500">Error fetching shows</div>;

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING SHOWS</Heading>
      {shows?.length ? (
        <div className="grid grid-cols-4 h-[35rem] gap-6">
          {shows.map((show: IShow) => (
            <Link
              to={`/shows/${show.id}`}
              key={show.id}
              className="block h-full basis-96"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${show.backdrop_path})`,
                }}
                className="rounded-lg h-[100%] basis-72 flex items-end preview-bg"
              >
                <div className="bg-featured-background px-6 pb-4 pt-20 w-full font-heading font-light text-[2.2rem]">
                  <h3>{show.name}</h3>
                </div>
              </div>
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
