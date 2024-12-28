import { Link } from "react-router-dom";

import { useShowsTopRated } from "./useShowsTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IShowList } from "@/lib/types";
import ScorePreview from "@/components/previews/ScorePreview";

function ShowsTopRated() {
  // Getting the top rated shows
  const { isLoading, shows, error } = useShowsTopRated();

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading as="h2">TOP RATED SHOWS</Heading>
      {isLoading ? (
        <Loader />
      ) : error || !shows || !shows.length ? (
        <div className="text-red-500">
          {error?.message || "Error fetching top rated shows"}
        </div>
      ) : (
        // Content
        <div className="grid grid-cols-4 h-[50rem] gap-6">
          {shows.map((show: IShowList) => (
            <Link
              to={`/shows/${show.id}`}
              key={show.id}
              className="block h-full basis-96"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${show.backdrop_path})`,
                }}
                className="rounded-lg h-[100%] basis-72 flex items-end preview-bg relative"
              >
                <div className="bg-preview px-6 pb-4 pt-20 w-full font-heading font-light text-[2.5rem]">
                  <h3>{show.name}</h3>
                </div>
                <ScorePreview score={show.vote_average} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default ShowsTopRated;
