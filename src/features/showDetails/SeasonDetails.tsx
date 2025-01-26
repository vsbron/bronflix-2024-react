import { CalendarIcon } from "@heroicons/react/24/outline";

import { ISeason } from "@/lib/typesAPI";
import { formatDate } from "@/utils/helpers";

import IconWrapper from "@/components/IconWrapper";
import Heading from "@/components/ui/Heading";
import MediaHero from "@/components/MediaHero";
import ScorePreview from "@/components/ScorePreview";

function SeasonDetails({ season }: { season: ISeason }) {
  // Destructuring data
  const { air_date, name, overview, vote_average: score } = season;

  // Returned JSX
  return (
    <section>
      <Heading>{name}</Heading>
      <MediaHero media={season} posterWidth="40rem">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-gray-400">
            <ScorePreview score={score} isHighlighted={true} isBig={true} />
          </div>
          <div className="text-[4rem] -my-5 font-heading">{name}</div>
          <div className="contents text-2xl">
            <div className="flex gap-8">
              <IconWrapper icon={<CalendarIcon />}>
                {formatDate(air_date)}
              </IconWrapper>
            </div>
            <div className="flex gap-8 mb-2"></div>
          </div>
          {overview && <div className="max-w-[65rem] mb-6">{overview}</div>}
        </div>
      </MediaHero>
    </section>
  );
}

export default SeasonDetails;
