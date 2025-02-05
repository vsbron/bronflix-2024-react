import {
  CalendarIcon,
  FilmIcon,
  GlobeAltIcon,
  LanguageIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import useTrailer from "@/hooks/useTrailer";
import { COUNTRIES, LANGUAGES } from "@/lib/constantsGeo";
import { IGenre, IShow } from "@/lib/typesAPI";
import { formatDate } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";
import IconWrapper from "@/components/IconWrapper";
import MediaHero from "@/components/MediaHero";
import ScorePreview from "@/components/ScorePreview";
import TrailerButton from "@/components/TrailerButton";

function ShowDetails({ show }: { show: IShow }) {
  // Getting the trailer from the custom hook
  const trailer = useTrailer(show.id, "tv");

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
    number_of_seasons: seasons = 1,
    number_of_episodes,
    status,
  } = show;

  // Handling the show data
  const headingTitle = `${name} (${
    first_air_date ? new Date(first_air_date).getFullYear().toString() : "TBA"
  })`;
  const genresList = genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = country.map((c: string) => COUNTRIES[c]).join(", ");
  const studio = companies.at(0);
  const isEnded = status === "Ended" || status === "Cancelled";

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
                {formatDate(first_air_date)} -{" "}
                {isEnded ? formatDate(last_air_date) : "Present"}
              </IconWrapper>
            </div>
            <div className="flex gap-8">
              <IconWrapper icon={<ClockIcon />}>{status}</IconWrapper>
              <span className="-mx-3">|</span>
              {seasons} Season
              {seasons > 1 && "s"}, {number_of_episodes} episodes
            </div>
            <div className="flex gap-8 mb-2">
              <IconWrapper icon={<GlobeAltIcon />}>
                {originCountry || "Unknown"}
              </IconWrapper>
              <IconWrapper icon={<LanguageIcon />}>
                {LANGUAGES[language]}
              </IconWrapper>
              {studio && (
                <IconWrapper icon={<FilmIcon />}>{studio.name}</IconWrapper>
              )}
            </div>
          </div>

          {overview && <div className="max-w-[65rem] mb-6">{overview}</div>}
          <TrailerButton video={trailer!} />
        </div>
      </MediaHero>
    </section>
  );
}

export default ShowDetails;
