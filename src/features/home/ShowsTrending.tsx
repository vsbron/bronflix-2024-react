import { Link } from "react-router-dom";

import { useShowsTrending } from "./useShowsTrending";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IShowList } from "@/lib/types";
import ScorePreview from "@/components/previews/ScorePreview";

function ShowsTrending() {
  // Getting the trending shows
  const { isLoading, shows, error } = useShowsTrending();

  // Returned JSX (with conditions)
  return (
    <section>
      <Heading as="h2">TRENDING SHOWS</Heading>
      {isLoading ? (
        <Loader />
      ) : error || !shows || !shows.length ? (
        <div className="text-red-500">
          {error?.message || "Error fetching trending shows"}
        </div>
      ) : (
        // Content
        <div className="grid grid-cols-5 h-[35rem] gap-6">
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

export default ShowsTrending;
