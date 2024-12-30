import { Link } from "react-router-dom";
import {
  CalendarIcon,
  UserIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";

import Button from "@/components/Button";
import ScorePreview from "@/components/previews/ScorePreview";
import { useGenres } from "@/context/GenresContext";
import { LANGUAGES, MOVIES_IMG_URL } from "@/lib/constants";
import { IconWrapperProps } from "@/lib/types";
import { IGenre, IMovieList } from "@/lib/typesAPI";

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
      <div className="flex flex-col items-start justify-end gap-6 relative z-10 w-1/3 h-[50rem]">
        <h2 className="text-8xl m-0">{movie.title?.toUpperCase()}</h2>
        <div className="flex gap-8 items-center -mt-2">
          <div className="flex items-center gap-4 text-stone-500 text-[1.4rem]">
            <ScorePreview score={score} isHighlighted={true} />
            <IconWrapper icon={<UserIcon />}>
              {(count / 1000).toFixed(2)}K
            </IconWrapper>
          </div>
          <div className="flex items-center gap-8 text-[1.5rem] text-stone-400 pb-0.5">
            <IconWrapper icon={<CalendarIcon />}>
              {new Date(movie.release_date!).getFullYear()}
            </IconWrapper>
            <IconWrapper icon={<LanguageIcon />}>
              {LANGUAGES[movie.original_language!]}
            </IconWrapper>
            <div>{genreNames}</div>
          </div>
        </div>
        <p className="mb-6">{truncatedOverview}</p>
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

function IconWrapper({ icon, children }: IconWrapperProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8">{icon}</div>
      {children}
    </div>
  );
}
