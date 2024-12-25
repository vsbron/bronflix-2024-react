import Button from "@/components/Button";
import { IMovie } from "@/lib/types";
import { Link } from "react-router-dom";

function FeaturedMovieBig({ movie }: { movie: IMovie }) {
  // Handling the movie data
  const overview = movie?.overview || "";
  const truncatedOverview =
    overview.length > 165
      ? `${overview.slice(0, 165).trim().split(" ").slice(0, -1).join(" ")}...`
      : overview;

  // Returned JSX
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
      className="relative w-full h-full flex items-end justify-start text-white bg-cover row-span-2 rounded-lg"
    >
      <div className="p-10 pt-96 w-full bg-featured-background">
        <div className="max-w-[60rem]">
          <h2 className="text-7xl font-medium mb-4">{movie.title}</h2>
          <p className="text-2xl mb-5">{truncatedOverview}</p>
          <div className="flex gap-6">
            <Button>
              <Link
                className="inline-block py-3 px-6"
                to={`/movies/${movie.id}`}
              >
                LEARN MORE
              </Link>
            </Button>
            <Button>
              <Link className="inline-block py-3 px-6" to="/movies/something">
                WATCH TRAILER
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMovieBig;
