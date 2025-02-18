import {
  BanknotesIcon,
  CalendarIcon,
  ClockIcon,
  GlobeAltIcon,
  FilmIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

import { ModalProvider } from "@/context/ModalContext";
import useTrailer from "@/hooks/useTrailer";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { COUNTRIES, LANGUAGES } from "@/lib/constantsGeo";
import { MovieDetailsProps } from "@/lib/types";
import { IGenre } from "@/lib/typesAPI";
import { FormatTextBlock } from "@/utils/FormatTextBlock";
import { formatDate, formatRuntime } from "@/utils/helpers";

import IconWrapper from "@/components/IconWrapper";
import MediaHero from "@/components/MediaHero";
import ScorePreview from "@/components/ScorePreview";
import TrailerButton from "@/components/TrailerButton";
import MovieCollectionLink from "@/features/movieDetails/MovieCollectionLink";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

function MovieDetails({ movie }: MovieDetailsProps) {
  // Getting the trailer from the custom hook
  const trailer = useTrailer(movie.id, "movie");

  // Destructuring data
  const {
    title,
    tagline,
    release_date,
    genres,
    origin_country: country,
    original_language: language,
    runtime,
    vote_average: score,
    vote_count: count,
    budget,
    overview = "No overview available for this movie",
    production_companies: companies,
    belongs_to_collection: collection,
  } = movie;

  // Handling some movie data
  const headingTitle = `${title} (${
    release_date ? new Date(release_date).getFullYear().toString() : "TBA"
  })`;
  const genresList = genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = country.map((c: string) => COUNTRIES[c]).join(", ");
  const studio = companies.at(0);
  const formattedOverview = FormatTextBlock(overview);

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
          <div className="text-[4rem] -my-5 font-heading">{title}</div>
          <div className="mb-3 text-[2rem] italic text-stone-400">
            {tagline}
          </div>
          <div className="contents text-2xl">
            <div>{genresList}</div>
            <div className="flex gap-8">
              <IconWrapper icon={<CalendarIcon />}>
                {formatDate(release_date)}
              </IconWrapper>
              <IconWrapper icon={<LanguageIcon />}>
                {LANGUAGES[language]}
              </IconWrapper>
              <IconWrapper icon={<ClockIcon />}>
                {formatRuntime(runtime)}
              </IconWrapper>
            </div>
            <div className="flex gap-8 mb-2">
              <IconWrapper icon={<GlobeAltIcon />}>{originCountry}</IconWrapper>
              {studio && (
                <IconWrapper icon={<FilmIcon />}>{studio.name}</IconWrapper>
              )}
              {budget !== 0 && (
                <IconWrapper icon={<BanknotesIcon />}>
                  ${budget.toLocaleString()}
                </IconWrapper>
              )}
            </div>
          </div>
          <div className="max-w-[65rem] mb-6">{formattedOverview}</div>
          <div className={`flex ${BASE_GAP_CLASS}`}>
            <ModalProvider>
              <TrailerButton video={trailer!} />
            </ModalProvider>
            <Button>
              <span>Add to Favorites</span>
            </Button>
            <Button>
              <span>Add to Watch list</span>
            </Button>
          </div>
        </div>
      </MediaHero>
    </section>
  );
}

export default MovieDetails;
