import Button from "@/components/Button";
import { IMovie } from "@/lib/types";
import { Link } from "react-router-dom";

function FeaturedMovieSmall({ movie }: { movie: IMovie }) {
  // Returned JSX
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
      className="relative w-full flex items-end justify-start text-white bg-cover rounded-lg"
    >
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
    </div>
  );
}

export default FeaturedMovieSmall;
