import { Link } from "react-router-dom";

import { useGenres } from "@/context/GenresContext";
import Button from "@/components/Button";
import { LANGUAGES, MOVIES_IMG_URL } from "@/lib/constants";
import { IGenre, IMovieList, MovieRatingProps } from "@/lib/types";

function MovieHighlight({ movie }: { movie: IMovieList }) {
  // Get the genres from Context API
  const { genres } = useGenres();

  // Handling the movie data
  // prettier-ignore
  const genreNames = movie?.genre_ids?.map((id: number) => {
    const genre = genres.find((genre: IGenre) => genre.id === id);
    return genre ? genre.name : null}).filter(Boolean).join(", ") || "";
  const score = movie?.vote_average || 0;
  const count = movie?.vote_count || 0;
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
        <div className="flex gap-8 items-center -mt-5">
          <MovieRating score={score} count={count} />
          <div className="flex items-center gap-6 text-[1.5rem] text-stone-400 pb-0.5">
            <div>{new Date(movie.release_date!).getFullYear()}</div>
            <div>{LANGUAGES[movie.original_language!]}</div>
            <div>{genreNames}</div>
          </div>
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

function MovieRating({ score, count }: MovieRatingProps) {
  // Setting the colors based on a score
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

  // Returned JSX
  return (
    <div className="flex items-center gap-4 text-stone-500 text-[1.4rem]">
      <div
        className={`${bgColor} ${color} inline-block px-3 pt-1.5 pb-1 leading-tight rounded-xl text-2xl`}
      >
        {score.toFixed(2)}
      </div>
      <div>{(count / 1000).toFixed(2)}K</div>
    </div>
  );
}
