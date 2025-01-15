import {
  BanknotesIcon,
  CalendarIcon,
  ClockIcon,
  GlobeAltIcon,
  FilmIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

import useTrailer from "@/hooks/useTrailer";
import { LANGUAGES } from "@/lib/constants";
import { MovieDetailsProps } from "@/lib/types";
import { IGenre } from "@/lib/typesAPI";
import { formatDate, formatRuntime } from "@/utils/helpers";

import IconWrapper from "@/components/IconWrapper";
import ScorePreview from "@/components/ScorePreview";
import MovieCollectionLink from "@/features/movieDetails/MovieCollectionLink";
import MediaHero from "@/components/MediaHero";
import TrailerButton from "@/components/TrailerButton";
import Heading from "@/components/ui/Heading";

function MovieDetails({ movie }: MovieDetailsProps) {
  // Getting the trailer from the custom hook
  const trailer = useTrailer(movie);

  // Handling some movie data
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

  // Checking whether movie is a part of movie collection const
  const collection = movie.belongs_to_collection;

  console.log(movie.original_language);

  // Returned JSX
  return (
    <section>
      <Heading>{headingTitle}</Heading>
      <MediaHero media={movie} posterWidth="40rem">
        {!!collection && <MovieCollectionLink collection={collection} />}
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-gray-400">
            <ScorePreview
              score={score}
              count={count}
              isHighlighted={true}
              isBig={true}
            />
          </div>
          <div className="text-[4rem] -my-5 font-heading">{movie.title}</div>
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
            <div className="flex gap-8 mb-2">
              <IconWrapper icon={<GlobeAltIcon />}>{originCountry}</IconWrapper>
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
          {movie.overview && (
            <div className="max-w-[65rem] mb-6">{movie.overview}</div>
          )}
          <TrailerButton video={trailer!} />
        </div>
      </MediaHero>
    </section>
  );
}

export default MovieDetails;
