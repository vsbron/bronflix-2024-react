import { LANGUAGES, MEDIA_IMG_URL } from "@/lib/constants";
import { IGenre, IProductionCompany, IShow } from "@/lib/typesAPI";

import Heading from "@/components/ui/Heading";
import ScorePreview from "@/components/ScorePreview";
import MediaHero from "@/components/MediaHero";
import IconWrapper from "@/components/IconWrapper";
import {
  BanknotesIcon,
  CalendarIcon,
  ClockIcon,
  FilmIcon,
  GlobeAltIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { formatDate, formatRuntime } from "@/utils/helpers";
import TrailerButton from "@/components/TrailerButton";
import useTrailer from "@/hooks/useTrailer";

function ShowDetails({ show }: { show: IShow }) {
  // Getting the trailer from the custom hook
  const trailer = useTrailer(show, "tv");

  console.log(show);

  // Destructuring data
  const {
    name,
    tagline,
    first_air_date,
    last_air_date,
    genres,
    origin_country: country,
    original_language: language,
    vote_average: score,
    vote_count: count,
    overview,
    networks: companies,
    number_of_seasons,
    number_of_episodes,
    status,
  } = show;

  // Handling the show data
  const headingTitle = `${name} (${
    first_air_date ? new Date(first_air_date).getFullYear().toString() : "TBA"
  })`;
  const genresList = genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = country.map((country: string) => country).join(", ");
  const studio = companies.at(0);

  // Returned JSX
  return (
    <section>
      <Heading>{headingTitle}</Heading>
      <MediaHero media={show} posterWidth="40rem">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-gray-400">
            <ScorePreview
              score={score}
              count={count}
              isHighlighted={true}
              isBig={true}
            />
          </div>
          <div className="text-[4rem] -my-5 font-heading">{name}</div>
          <div className="mb-3 text-[2rem] italic text-stone-400">
            {tagline}
          </div>
          <div className="contents text-2xl">
            <div>{genresList}</div>
            <div className="flex gap-8">
              <IconWrapper icon={<CalendarIcon />}>
                {formatDate(first_air_date)} - {formatDate(last_air_date)}
              </IconWrapper>
            </div>
            <div className="flex gap-8 mb-2">
              <IconWrapper icon={<GlobeAltIcon />}>{originCountry}</IconWrapper>
              <IconWrapper icon={<LanguageIcon />}>
                {LANGUAGES[language]}
              </IconWrapper>
              {studio && (
                <IconWrapper icon={<FilmIcon />}>{studio.name}</IconWrapper>
              )}
            </div>
          </div>

          <div>Seasons: {number_of_seasons}</div>
          <div>Episodes: {number_of_episodes}</div>
          <div>Status: {status}</div>
          {overview && <div className="max-w-[65rem] mb-6">{overview}</div>}
          <TrailerButton video={trailer!} />
        </div>
      </MediaHero>
    </section>
  );
}

export default ShowDetails;
