import {
  BanknotesIcon,
  CalendarIcon,
  ClockIcon,
  LanguageIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { VideoProvider } from "@/context/VideoContext";
import useTrailer from "@/hooks/useTrailer";

import MovieCast from "./MovieCast";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { IconWrapper } from "@/components/IconWrapper";
import ScorePreview from "@/components/previews/ScorePreview";
import { LANGUAGES, MOVIES_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { IGenre, IMovie, IProductionCompany } from "@/lib/typesAPI";
import { formatDate, formatRuntime } from "@/utils/helpers";

function MovieDetails({ movie }: { movie: IMovie }) {
  // Getting the trailer from the custom hook
  const trailer = useTrailer(movie);

  console.log(movie);

  // Handling the movie data
  const headingTitle = `${movie.title} (${new Date(movie.release_date)
    .getFullYear()
    .toString()})`;
  const genres = movie.genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = movie.origin_country
    .map((country: string) => country)
    .join(", ");
  const productionCompanies = movie.production_companies
    .map((company: IProductionCompany) => company.name)
    .join(", ");

  // Handling the movie data
  // prettier-ignore
  const score = movie?.vote_average || 0;
  const count = movie?.vote_count || 0;
  const overview = movie?.overview || "";

  // Returned JSX
  return (
    <>
      <section>
        <Heading>{headingTitle}</Heading>
        <div className="flex items-stretch rounded-lg overflow-hidden gap-8">
          <img
            src={`${MOVIES_IMG_URL}w400${movie.poster_path}`}
            className="basis-96 rounded-lg"
          />
          <div
            style={{
              backgroundImage: `url(${MOVIES_IMG_URL}/original/${movie.backdrop_path})`,
            }}
            className="bg-no-repeat bg-cover basis-full relative flex flex-col justify-end px-8 py-6 rounded-lg"
          >
            <div className="absolute inset-0 bg-stone-950/85" />
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center gap-4 text-stone-400 text-[1.6rem] mb-3">
                <ScorePreview score={score} isHighlighted={true} isBig={true} />
                <IconWrapper icon={<UserIcon />}>
                  {(count / 1000).toFixed(2)}K
                </IconWrapper>
              </div>
              <h2 className="text-[3.5rem] my-0 -mb-2">{movie.title}</h2>
              <h4 className="mb-3 italic">{movie.tagline}</h4>
              <div className={`flex ${PREVIEWS_GAP_CLASS}`}>
                <IconWrapper icon={<CalendarIcon />}>
                  {formatDate(movie.release_date)}
                </IconWrapper>
                <span>|</span>
                <span>{genres}</span>
              </div>
              <div className={`flex ${PREVIEWS_GAP_CLASS} mb-2`}>
                <IconWrapper icon={<LanguageIcon />}>
                  {LANGUAGES[movie.original_language!]}
                </IconWrapper>
                <IconWrapper icon={<ClockIcon />}>
                  {formatRuntime(movie.runtime)}
                </IconWrapper>
                <IconWrapper icon={<BanknotesIcon />}>
                  ${movie.budget.toLocaleString()}
                </IconWrapper>
              </div>
              <div className="max-w-[65rem] mb-4">{overview}</div>
              <VideoProvider>
                <VideoProvider.Trigger>
                  <Button>
                    <span>WATCH TRAILER</span>
                  </Button>
                </VideoProvider.Trigger>
                <VideoProvider.Content video={trailer!} />
              </VideoProvider>
            </div>
          </div>
        </div>

        {/* <div>Country: {originCountry}</div>
        <div>Production Company: {productionCompanies}</div> */}
      </section>

      <MovieCast />
    </>
  );
}

export default MovieDetails;
