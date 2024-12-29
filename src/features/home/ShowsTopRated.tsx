import { useRef } from "react";
import { Link } from "react-router-dom";

import { useShowsTopRated } from "./useShowsTopRated";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import RibbonTwoRow from "@/components/previews/RibbonTwoRow";
import ScorePreview from "@/components/previews/ScorePreview";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IShowList } from "@/lib/types";

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
        <RibbonTwoRow
          length={shows.length}
          ribbon={ribbonRef}
          cellWidth="44.2rem"
        >
          {shows.map((show: IShowList) => (
            <Link
              to={`/shows/${show.id}`}
              key={show.id}
              className="block h-[24rem] rounded-lg overflow-hidden relative cursor-pointer"
            >
              <div
                style={{
                  backgroundImage: `url(${MOVIES_IMG_URL}w500${show.backdrop_path})`,
                }}
                className="rounded-lg h-full flex items-end preview-bg relative"
              >
                <div className="bg-preview px-6 pb-4 pt-20 w-full font-heading font-light text-[2.5rem]">
                  <h3>{show.name}</h3>
                </div>
                <ScorePreview score={show.vote_average} />
              </div>
            </Link>
          ))}
        </RibbonTwoRow>
      )}
    </section>
  );
}

export default ShowsTopRated;
