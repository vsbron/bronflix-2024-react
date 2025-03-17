import { Link } from "react-router-dom";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { GenreListProps } from "@/lib/types";

import Button from "@/components/ui/Button";

function GenreList({ data, type }: GenreListProps) {
  // Returned JSX
  return (
    <div className={`grid grid-cols-[3fr_4fr] items-start gap-24`}>
      <div>
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
      <div className={`flex flex-wrap ${BASE_GAP_CLASS} max-w-[75%] mt-5`}>
        {data.map((genre) => (
          <Button key={genre.id}>
            <Link
              to={`/${type === "movie" ? "movies" : "shows"}/genre/${genre.id}`}
            >
              {genre.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default GenreList;
