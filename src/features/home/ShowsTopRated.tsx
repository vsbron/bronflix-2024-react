import { Link } from "react-router-dom";

import { useShowsTopRated } from "./useShowsTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IShowList } from "@/lib/types";
import ScorePreview from "@/components/previews/ScorePreview";
import Ribbon from "@/components/previews/Ribbon";
import { useRef } from "react";

function ShowsTopRated() {
  // Getting the top rated shows and ref for ribbon element
  const { isLoading, shows, error } = useShowsTopRated();
  const ribbonRef = useRef<HTMLDivElement>(null);

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
        <Ribbon length={shows.length} ribbon={ribbonRef}>
          {shows.map((show: IShowList) => (
            <Link
              to={`/shows/${show.id}`}
              key={show.id}
              className="block h-[24rem] basis-[44rem] flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer bg-featured-gradient-tl"
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
        </Ribbon>
      )}
    </section>
  );
}

export default ShowsTopRated;
