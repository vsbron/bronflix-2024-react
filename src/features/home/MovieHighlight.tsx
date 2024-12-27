import Button from "@/components/Button";
import { LANGUAGES, MOVIES_IMG_URL } from "@/lib/constants";
import { IMovie } from "@/lib/types";
import { Link } from "react-router-dom";

function MovieHighlight({ movie }: { movie: IMovie }) {
  // Handling the movie data
  const overview = movie?.overview || "";
  const truncatedOverview =
    overview.length > 150
      ? `${overview.slice(0, 150).trim().split(" ").slice(0, -1).join(" ")}...`
      : overview;

  // Returned JSX
  return (
    <div className="mb-16">
      <div className="flex flex-col items-start justify-end gap-10 relative z-10 w-1/3 h-[50rem]">
        <h2 className="text-8xl">{movie.title?.toUpperCase()}</h2>
        <div className="flex gap-6 items-center text-stone-400 -mt-5 text-[1.5rem]">
          <MovieRating score={movie.vote_average!} />
          <div>{new Date(movie.release_date!).getFullYear()}</div>
          <div>{LANGUAGES[movie.original_language!]}</div>
        </div>
        <p>{truncatedOverview}</p>
        <Button>
          <Link className="inline-block py-3 px-6" to={`/movies/${movie.id}`}>
            LEARN MORE
          </Link>
        </Button>
      </div>
      <div
        style={{
          backgroundImage: `url(${MOVIES_IMG_URL}/original/${movie.backdrop_path})`,
        }}
        className="absolute top-0 right-0 w-3/4 h-5/6 bg-no-repeat bg-cover rounded-lg"
      >
        <div className="absolute top-0 bottom-0 left-0 w-2/5 bg-featured-gradient-1"></div>
        <div className="absolute left-0 right-0 bottom-0 h-1/4 bg-featured-gradient-2"></div>
      </div>
    </div>
  );
}

export default MovieHighlight;

function MovieRating({ score }: { score: number }) {
  // Determine the color based on the score
  let bgColor, color;

  switch (true) {
    case score >= 7:
      bgColor = "bg-green-900";
      color = "text-green-400";
      break;
    case score >= 4:
      bgColor = "bg-yellow-800";
      color = "text-yellow-200";
      break;
    default:
      bgColor = "bg-red-900";
      color = "text-red-200";
      break;
  }

  // Format the score to 2 decimal places
  const formattedScore = score.toFixed(2);

  // Returned JSX
  return (
    <div
      className={`${bgColor} ${color} inline-block px-3 pt-1.5 pb-1 leading-tight rounded-xl text-2xl`}
    >
      {formattedScore}
    </div>
  );
}
