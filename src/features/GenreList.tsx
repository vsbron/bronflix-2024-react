import { Link } from "react-router-dom";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { GenreListProps } from "@/lib/types";

import Button from "@/components/ui/Button";

function GenreList({ data, type }: GenreListProps) {
  // Returned JSX
  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-[3fr_4fr] items-start gap-3 xl:gap-24`}
    >
      <div className="w-full md:w-3/4 xl:w-full">
        <p>
          {type === "movie"
            ? "Movies have the power to transport us to different worlds, evoke emotions, and tell unforgettable stories. Whether it's an epic adventure, gripping thriller, or heartfelt drama, every film belongs to a genre that shapes its tone and appeal."
            : "TV shows captivate us with their compelling characters, intricate plots, and immersive worlds. From thrilling mysteries to heartwarming dramas and hilarious comedies, each show belongs to a genre that defines its style, tone, and appeal."}
        </p>
        <p>
          {type === "movie"
            ? "Here's a list of movie genres, each offering a unique experience. Whether you're in the mood for suspense, comedy, or an emotional journey, there's a genre for every taste. Explore and find your next favorite film!"
            : "Here's a list of TV show genres, each offering a distinct viewing experience. Whether you're in the mood for suspense, laughter, or an emotional rollercoaster, there's a genre for every preference. Explore and discover your next favorite show!"}
        </p>
      </div>
      <div
        className={`block columns-2 md:columns-3 lg:columns-4 xl:flex xl:flex-wrap max-md:gap-4 ${BASE_GAP_CLASS} xl:max-w-[75%] mt-0 xl:mt-5`}
      >
        {data.map((genre) => (
          <div
            key={genre.id}
            className="block xl:inline-block mb-3 xs:mb-4 xl:mb-0 "
          >
            <Button>
              <Link
                to={`/${type === "movie" ? "movies" : "shows"}/genre/${
                  genre.id
                }`}
              >
                {genre.name}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreList;
