import { useState } from "react";

import { PREVIEWS_GAP_CLASS, SEASON_TYPES } from "@/lib/constants";
import { ISeason } from "@/lib/typesAPI";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import SeasonDetails from "@/features/showDetails/SeasonDetails";

function ShowSeasons({ seasons }: { seasons: ISeason[] }) {
  // Setting the state for chosen season
  const [chosenSeason, setChosenSeason] = useState<number | null>();

  // Filtering out non-seasons
  const onlySeasons = seasons.filter((season) =>
    SEASON_TYPES.some((type) => season.name.toLowerCase().includes(type))
  );

  const handleSeason = (seasonNumber: number) => {
    seasonNumber === chosenSeason
      ? setChosenSeason(null)
      : setChosenSeason(seasonNumber);
  };

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Episode Guide</Heading>
      <div className={`flex ${PREVIEWS_GAP_CLASS} mb-6 flex-wrap`}>
        {onlySeasons.map((season) => {
          return (
            <Button key={season.id}>
              <span onClick={() => handleSeason(season.season_number)}>
                {season.name}
              </span>
            </Button>
          );
        })}
      </div>
      {chosenSeason && <SeasonDetails seasonNumber={chosenSeason} />}
    </section>
  );
}

export default ShowSeasons;
