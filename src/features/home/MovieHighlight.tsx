import { Link } from "react-router-dom";
import { CalendarIcon, LanguageIcon } from "@heroicons/react/24/solid";

import { useGenres } from "@/context/GenresContext";
import { VideoProvider } from "@/context/VideoContext";
import useTrailer from "@/hooks/useTrailer";
import { LANGUAGES, MOVIES_IMG_URL } from "@/lib/constants";
import { MovieHighlightProps } from "@/lib/types";
import { IGenre } from "@/lib/typesAPI";

import Button from "@/components/Button";
import IconWrapper from "@/components/IconWrapper";
import {
  BlackGradientToRight,
  BlackGradientToTop,
} from "@/components/Overlays";
import ScorePreview from "@/components/ScorePreview";

function MovieHighlight({ movie }: MovieHighlightProps) {
  // Get the genres from Context API
  const { genres } = useGenres();
  const trailer = useTrailer(movie);

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
  const backgroundImage = `url(${MOVIES_IMG_URL}/original/${movie.backdrop_path})`;

  // Returned JSX
  return (
    <div className="mb-16">
      <div className="flex flex-col items-start justify-end gap-6 relative z-10 w-1/3 h-[50rem]">
        <h2 className="text-8xl m-0">{movie.title?.toUpperCase()}</h2>
        <div className="flex gap-8 items-center -mt-2 text-stone-400">
          <ScorePreview score={score} count={count} isHighlighted={true} />
          <div className="flex items-center gap-8 text-[1.5rem] pb-0.5">
            <IconWrapper icon={<CalendarIcon />}>
              {new Date(movie.release_date!).getFullYear()}
            </IconWrapper>
            <IconWrapper icon={<LanguageIcon />}>
              {LANGUAGES[movie.original_language!]}
            </IconWrapper>
            <div>{genreNames}</div>
          </div>
        </div>
        <p className="mt-0 mb-6">{truncatedOverview}</p>
        <div className="flex gap-6">
          <Button>
            <Link to={`/movies/${movie.id}`}>LEARN MORE</Link>
          </Button>
          <VideoProvider.Trigger>
            <Button>
              <span>WATCH TRAILER</span>
            </Button>
          </VideoProvider.Trigger>
          <VideoProvider.Content video={trailer!} />
        </div>
      </div>
      <div
        style={{ backgroundImage }}
        className="absolute top-0 right-0 w-3/4 h-5/6 bg-no-repeat bg-cover rounded-lg"
      >
        <BlackGradientToTop height="25%" />
        <BlackGradientToRight width="40%" />
      </div>
    </div>
  );
}

export default MovieHighlight;
