import { useSearchParams } from "react-router-dom";

import { BASE_GAP_CLASS, SEASON_TYPES } from "@/lib/constants";
import { ISeason } from "@/lib/typesAPI";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import SeasonDetails from "@/features/showDetails/SeasonDetails";

function ShowSeasons({ seasons }: { seasons: ISeason[] }) {
  // Access and manipulate search parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // Retrieve the chosen season from searchParams
  const chosenSeason = searchParams.get("season");

  // Filtering out non-seasons
  const onlySeasons = seasons.filter((season) =>
    SEASON_TYPES.some((type) => !season.name.toLowerCase().includes(type))
  );

  // Checking whether chosen season even exists
  const isSeason = Number(chosenSeason) <= onlySeasons.length;

  // Handle season change
  const handleSeason = (seasonNumber: number) => {
    String(seasonNumber) === chosenSeason
      ? searchParams.delete("season")
      : searchParams.set("season", seasonNumber.toString());
    setSearchParams(searchParams);
  };

  // Returned JSX
  return (
    <section>
      <Heading as="h2">Episode Guide</Heading>
      <div className={`flex ${BASE_GAP_CLASS} mb-6 flex-wrap`}>
        {onlySeasons.map((season) => (
          <Button
            key={season.id}
            isActive={String(season.season_number) === chosenSeason}
          >
            <span onClick={() => handleSeason(season.season_number)}>
              {season.name}
            </span>
          </Button>
        ))}
      </div>
      {chosenSeason &&
        (isSeason ? (
          <SeasonDetails seasonNumber={chosenSeason} />
        ) : (
          <div>
            Season {chosenSeason} is not available for this show. Please select
            a valid season from the options above.
          </div>
        ))}
    </section>
  );
}

export default ShowSeasons;
