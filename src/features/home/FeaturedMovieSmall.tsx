import { IMovie } from "@/lib/types";
import { Link } from "react-router-dom";

function FeaturedMovieSmall({ movie }: { movie: IMovie }) {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
      className="relative w-full flex items-end justify-start text-white bg-cover"
    >
      <div className="p-10 pt-48 pr-[25%] w-full bg-gradient-to-t from-stone-900 to-transparent">
        <h2 className="text-5xl font-medium mb-4">{movie.title}</h2>
        <div className="mt-6 font-bold flex gap-6">
          <div className="bg-red-900 rounded-lg inline-block hover:bg-stone-50 hover:text-red-900 ">
            <Link
              className="inline-block py-2 px-4 text-[1.4rem]"
              to={`/movies/${movie.id}`}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMovieSmall;
