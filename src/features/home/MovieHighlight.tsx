import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  CalendarIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";

import { useGenres } from "@/context/GenresContext";
import useTrailer from "@/hooks/useTrailer";
import { MEDIA_IMG_URL } from "@/lib/constants";
import { LANGUAGES } from "@/lib/constantsGeo";
import { MovieHighlightProps } from "@/lib/types";
import { IGenre } from "@/lib/typesAPI";

import IconWrapper from "@/components/IconWrapper";
import ScorePreview from "@/components/ScorePreview";
import TrailerButton from "@/components/TrailerButton";
import Button from "@/components/ui/Button";
import {
  BlackGradientToRight,
  BlackGradientToTop,
} from "@/components/ui/Overlays";
import { shortenText } from "@/utils/helpers";

function MovieHighlight({ movie }: MovieHighlightProps) {
  // Destructuring data
  const {
    id,
    title,
    release_date,
    backdrop_path,
    original_language,
    genre_ids,
    vote_average: score,
    vote_count: count,
    overview = "",
  } = movie;

  // Get the genres from Context API
  const { genres } = useGenres();
  const trailer = useTrailer(movie.id, "movie");

  // Handling the movie data
  // prettier-ignore
  const genreNames = genre_ids?.map((id: number | string) => {
    const genre = genres.find((genre: IGenre) => genre.id === id);
    return genre ? genre.name : null}).filter(Boolean).join(", ") || "";
  const shortenOverview = shortenText(overview, 150);
  const backgroundImage = `url(${MEDIA_IMG_URL}/original/${backdrop_path})`;

  // Returned JSX
  return (
    <div className="mb-16">
      <div className="flex flex-col items-start justify-end gap-6 relative z-10 w-1/3 h-[50rem]">
        <h2 className="text-8xl m-0">{title.toUpperCase()}</h2>
        <div className="flex gap-8 items-center -mt-2 text-stone-400">
          <ScorePreview score={score} count={count} isHighlighted={true} />
          <div className="flex items-center gap-8 text-[1.5rem] pb-0.5">
            <IconWrapper icon={<CalendarIcon />}>
              {new Date(release_date!).getFullYear()}
            </IconWrapper>
            <IconWrapper icon={<LanguageIcon />}>
              {LANGUAGES[original_language!]}
            </IconWrapper>
            <div>{genreNames}</div>
          </div>
        </div>
        <p className="mt-0 mb-6">{shortenOverview}</p>
        <div className="flex gap-6">
          <Button label={`Learn more about ${title}`}>
            <Link to={`/movies/${id}`}>
              <BookOpenIcon className="w-8 inline-block pb-1 mr-2" />
              LEARN MORE
            </Link>
          </Button>
          <TrailerButton video={trailer!} />
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
