import { Link } from "react-router-dom";
import {
  CalendarIcon,
  FilmIcon,
  GlobeAltIcon,
  LanguageIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { useResponsive } from "@/hooks/useResponsive";
import { COUNTRIES, LANGUAGES } from "@/lib/constantsGeo";
import { ShowDetailsProps } from "@/lib/types";
import { IGenre } from "@/lib/typesAPI";
import { useUser } from "@/redux/reducers/userReducer";
import { FormatTextBlock } from "@/utils/FormatTextBlock";
import { formatDate } from "@/utils/helpers";

import IconWrapper from "@/components/IconWrapper";
import MediaHero from "@/components/MediaHero";
import ScorePreview from "@/components/ScorePreview";
import Heading from "@/components/ui/Heading";
import MediaButtons from "@/features/MediaButtons";
import MediaInList from "@/features/MediaInList";

function ShowDetails({ show }: ShowDetailsProps) {
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
    overview = "No overview available for this show",
    created_by: creators,
    networks: companies,
    number_of_seasons: seasons = 1,
    number_of_episodes,
    status,
  } = show;

  // Getting user data from Redux store
  const { uid } = useUser();

  // Getting a number of media queries from custom hook
  const { isMD, isLG } = useResponsive();

  // Handling the show data
  const headingTitle = `${name} (${
    first_air_date ? new Date(first_air_date).getFullYear().toString() : "TBA"
  })`;
  const genresList = genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = country.map((c: string) => COUNTRIES[c]).join(", ");
  const studios = companies
    .map((company) => company.name)
    .slice(0, 3)
    .join(", ");
  const isEnded = status === "Ended" || status === "Cancelled";
  const formattedOverview = FormatTextBlock(overview);

  // Returned JSX
  return (
    <section>
      <Heading>{headingTitle}</Heading>
      <MediaHero media={show}>
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-gray-400">
            <ScorePreview
              score={score}
              count={count}
              isHighlighted={true}
              isBig={true}
            />
          </div>
          {uid && <MediaInList type="tv" id={show.id} name={headingTitle} />}
          <div className="mb-2">
            <div className="text-[2.5rem] lg:text-[3rem] xl:text-[4rem] -my-5 font-heading">
              {name}
            </div>
            {tagline && (
              <div className="mb-1 xl:mb-3 mt-5 text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] italic text-stone-400 leading-8">
                {tagline}
              </div>
            )}
          </div>
          <div className="contents text-2xl">
            <div>{genresList}</div>
            <div className="flex gap-x-8 gap-y-1 flex-wrap">
              <IconWrapper icon={<CalendarIcon />}>
                {formatDate(first_air_date)} -{" "}
                {isEnded ? formatDate(last_air_date) : "Present"}
              </IconWrapper>
            </div>
            <div className="flex gap-x-8 gap-y-1 mb-0 xl:mb-2 flex-wrap">
              <IconWrapper icon={<ClockIcon />}>{status}</IconWrapper>
              <span className="-mx-3">|</span>
              {seasons} Season
              {seasons > 1 && "s"}, {number_of_episodes} episodes
            </div>
            <div className="flex gap-x-8 gap-y-1 mb-0 xl:mb-2 flex-wrap">
              <IconWrapper icon={<GlobeAltIcon />}>
                {originCountry || "Unknown"}
              </IconWrapper>
              <IconWrapper icon={<LanguageIcon />}>
                {LANGUAGES[language]}
              </IconWrapper>
              {studios && (
                <IconWrapper icon={<FilmIcon />}>{studios}</IconWrapper>
              )}
            </div>
            {creators.length > 0 && (
              <div className="flex gap-8 -mt-1">
                <IconWrapper icon={<UserIcon />}>
                  {creators.map((c, i) => (
                    <>
                      <Link to={`/person/${c.id}`}>{c.name}</Link>
                      {i < creators.length - 1 && "|"}
                    </>
                  ))}
                </IconWrapper>
              </div>
            )}
          </div>
          {!isLG && (
            <>
              <div className="max-w-[65rem] mb-4 xl:mb-6 text-[1.4rem] xl:text-[1.6rem]">
                {formattedOverview}
              </div>
              <MediaButtons type={"tv"} media={show} />
            </>
          )}
        </div>
      </MediaHero>
      {isLG && (
        <>
          <div className="max-w-[65rem] my-6 text-[1.4rem]">
            {formattedOverview}
          </div>
          <MediaButtons type={"tv"} media={show} />
        </>
      )}
    </section>
  );
}

export default ShowDetails;
