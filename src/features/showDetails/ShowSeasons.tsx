import { useSearchParams } from "react-router-dom";

import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { ISeason } from "@/lib/typesAPI";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

function ShowSeasons({ seasons }: { seasons: ISeason[] }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filtering out non-seasons
  const onlySeasons = seasons.filter((season) =>
    season.name.includes("Season")
  );

  // Click handler
  const changeSeasonHandler = (num: number) => {
    setSearchParams({ season: num.toString() });
  };

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Seasons</Heading>
      <div className={`flex ${PREVIEWS_GAP_CLASS}`}>
        {onlySeasons.map((season) => {
          return (
            <Button key={season.id}>
              <span onClick={() => changeSeasonHandler(season.season_number)}>
                {season.name}
              </span>
            </Button>
          );
        })}
      </div>
    </section>
  );
}

export default ShowSeasons;
