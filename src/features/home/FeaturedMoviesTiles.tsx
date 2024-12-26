import Button from "@/components/Button";
import { MOVIES_IMG_URL } from "@/lib/constants";
import {
  FeaturedMovieProps,
  FeaturedMovieTileProps,
  IMovie,
} from "@/lib/types";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export function FeaturedMovieBig({ movie }: FeaturedMovieProps) {
  // Handling the movie data
  const overview = movie.overview || "";
  const truncatedOverview =
    overview.length > 165
      ? `${overview.slice(0, 165).trim().split(" ").slice(0, -1).join(" ")}...`
      : overview;

  // Returned JSX
  return (
    <FeaturedMovieTile className="row-span-2" movieBG={movie.backdrop_path!}>
      <div className="p-10 pt-96 w-full bg-featured-background">
        <h2 className="text-7xl font-medium mb-4">{movie.title}</h2>
        <p className="text-2xl mb-5 max-w-[60rem]">{truncatedOverview}</p>
        <div className="flex gap-6">
          <Button>
            <Link className="inline-block py-3 px-6" to={`/movies/${movie.id}`}>
              LEARN MORE
            </Link>
          </Button>
          <Button>
            <span className="inline-block py-3 px-6">WATCH TRAILER</span>
          </Button>
        </div>
      </div>
    </FeaturedMovieTile>
  );
}

export function FeaturedMovieSmall({ movie }: FeaturedMovieProps) {
  // Returned JSX
  return (
    <FeaturedMovieTile movieBG={movie.backdrop_path!}>
      <div className="p-10 pt-48 pr-[25%] w-full bg-featured-background">
        <h2 className="text-5xl leading-[1.1] font-medium mb-5">
          {movie.title}
        </h2>
        <Button>
          <Link
            className="inline-block py-2 px-4 text-[1.4rem]"
            to={`/movies/${movie.id}`}
          >
            LEARN MORE
          </Link>
        </Button>
      </div>
    </FeaturedMovieTile>
  );
}

// Function component for movie background display
function FeaturedMovieTile({
  children,
  className,
  movieBG,
}: FeaturedMovieTileProps) {
  // Returned JSX
  return (
    <div
      className={`relative w-full flex items-end justify-start text-white bg-cover rounded-lg overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${MOVIES_IMG_URL}/original/${movieBG})`,
        backgroundPosition: "top center",
      }}
    >
      {children}
    </div>
  );
}
