import { Link } from "react-router-dom";

import { MOVIES_IMG_URL } from "@/lib/constants";
import { IMovie } from "@/lib/types";

function FeaturedMoviesRibbon({ movies }: { movies: IMovie[] }) {
  return (
    <div className="flex gap-6 h-[32rem] col-span-full">
      {movies.map((movie: IMovie) => (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
          className="block h-full basis-96"
        >
          <div
            style={{
              backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
            }}
            className="rounded-lg h-full preview-bg"
          ></div>
        </Link>
      ))}
    </div>
  );
}

export default FeaturedMoviesRibbon;
