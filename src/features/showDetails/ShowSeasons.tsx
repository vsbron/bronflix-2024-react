import { useState } from "react";

import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { ISeason } from "@/lib/typesAPI";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import SeasonDetails from "@/features/showDetails/SeasonDetails";

function ShowSeasons({ seasons }: { seasons: ISeason[] }) {
  // Setting the state for chosen season
  const [chosenSeason, setChosenSeason] = useState<number>();

  // Filtering out non-seasons
  const onlySeasons = seasons.filter((season) =>
    season.name.includes("Season")
  );

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Seasons</Heading>
      <div className={`flex ${PREVIEWS_GAP_CLASS} mb-6`}>
        {onlySeasons.map((season) => {
          return (
            <Button key={season.id}>
              <span onClick={() => setChosenSeason(season.season_number)}>
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
