import {
  BanknotesIcon,
  CalendarIcon,
  ClockIcon,
  GlobeAltIcon,
  FilmIcon,
  LanguageIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { VideoProvider } from "@/context/VideoContext";
import useTrailer from "@/hooks/useTrailer";
import { LANGUAGES, MOVIES_IMG_URL } from "@/lib/constants";
import { IGenre, IMovie } from "@/lib/typesAPI";
import { formatDate, formatRuntime } from "@/utils/helpers";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import IconWrapper from "@/components/IconWrapper";
import ScorePreview from "@/components/previews/ScorePreview";

function MovieDetails({ movie }: { movie: IMovie }) {
  // Getting the trailer from the custom hook
  const trailer = useTrailer(movie);

  // Handling some  movie data
  const headingTitle = `${movie.title} (${
    movie.release_date
      ? new Date(movie.release_date).getFullYear().toString()
      : "TBA"
  })`;
  const genres = movie.genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = movie.origin_country
    .map((country: string) => country)
    .join(", ");
  const score = movie?.vote_average || 0;
  const count = movie?.vote_count || 0;
  const budget = movie?.budget || "";
  const studio = movie?.production_companies?.at(0);

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
            className="bg-no-repeat bg-cover basis-full relative flex flex-col justify-end px-10 py-8 rounded-lg"
          >
            <div className="absolute inset-0 bg-stone-950/75" />
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center gap-4 text-stone-400 text-[1.6rem] mb-3">
                <ScorePreview score={score} isHighlighted={true} isBig={true} />
                <IconWrapper icon={<UserIcon />}>
                  {(count / 1000).toFixed(2)}K
                </IconWrapper>
              </div>
              <div className="text-[4rem] -my-5 font-heading">
                {movie.title}
              </div>
              <div className="mb-3 text-[2rem] italic text-stone-400">
                {movie.tagline}
              </div>
              <div className="contents text-2xl">
                <div>{genres}</div>
                <div className="flex gap-8">
                  <IconWrapper icon={<CalendarIcon />}>
                    {formatDate(movie.release_date)}
                  </IconWrapper>
                  <IconWrapper icon={<LanguageIcon />}>
                    {LANGUAGES[movie.original_language!]}
                  </IconWrapper>
                  <IconWrapper icon={<ClockIcon />}>
                    {formatRuntime(movie.runtime)}
                  </IconWrapper>
                </div>
                <div className="flex gap-8">
                  <IconWrapper icon={<GlobeAltIcon />}>
                    {originCountry}
                  </IconWrapper>
                  {studio && (
                    <IconWrapper icon={<FilmIcon />}>{studio.name}</IconWrapper>
                  )}
                  {budget && (
                    <IconWrapper icon={<BanknotesIcon />}>
                      ${budget.toLocaleString()}
                    </IconWrapper>
                  )}
                </div>
              </div>
              <div className="flex gap-8 mb-2"></div>
              {movie.overview && (
                <div className="max-w-[65rem] mb-6">{movie.overview}</div>
              )}
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
      </section>
    </>
  );
}

export default MovieDetails;
