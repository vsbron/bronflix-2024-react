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
  const trailer = useTrailer(show);

  // Destructuring data
  const {
    name,
    tagline,
    // release_date,
    genres,
    origin_country: country,
    original_language: language,
    // runtime,
    vote_average: score,
    vote_count: count,
    // budget,
    overview,
    production_companies: companies,
    // belongs_to_collection: collection,
  } = show;

  // Handling the show data
  const headingTitle = `${show.name} (${new Date(show.first_air_date)
    .getFullYear()
    .toString()})`;
  // const genres = show.genres.map((genre: IGenre) => genre.name).join(", ");
  const originCountry = show.origin_country
    .map((country: string) => country)
    .join(", ");
  const productionCompanies = show.production_companies
    .map((company: IProductionCompany) => company.name)
    .join(", ");

  // Returned JSX
  return (
    <section>
      <Heading>{headingTitle}</Heading>
      <MediaHero media={show} posterWidth="40rem">
        {/* {!!collection && <MovieCollectionLink collection={collection} />} */}
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-gray-400">
            {/* <ScorePreview
              score={score}
              count={count}
              isHighlighted={true}
              isBig={true}
            /> */}
          </div>
          <div className="text-[4rem] -my-5 font-heading">{name}</div>
          <div className="mb-3 text-[2rem] italic text-stone-400">
            {tagline}
          </div>
          <div className="contents text-2xl">
            {/* <div>{genresList}</div> */}
            <div className="flex gap-8">
              {/* <IconWrapper icon={<CalendarIcon />}>
                {formatDate(release_date)}
              </IconWrapper> */}
              <IconWrapper icon={<LanguageIcon />}>
                {LANGUAGES[language]}
              </IconWrapper>
              {/* <IconWrapper icon={<ClockIcon />}>
                {formatRuntime(runtime)}
              </IconWrapper> */}
            </div>
            <div className="flex gap-8 mb-2">
              <IconWrapper icon={<GlobeAltIcon />}>{originCountry}</IconWrapper>
              {/* {studio && (
                <IconWrapper icon={<FilmIcon />}>{studio.name}</IconWrapper>
              )} */}
              {/* {budget !== 0 && (
                <IconWrapper icon={<BanknotesIcon />}>
                  ${budget.toLocaleString()}
                </IconWrapper>
              )} */}
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
