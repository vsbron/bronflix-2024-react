import Heading from "@/components/ui/Heading";
import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { ISeason } from "@/lib/typesAPI";

function ShowSeasons({ seasons }: { seasons: ISeason[] }) {
  console.log(seasons);

  // Filtering out non-seasons
  const onlySeasons = seasons.filter((season) =>
    season.name.includes("Season")
  );

  // Returned JSX
  return (
    <section>
      <Heading as="h3">Seasons</Heading>
      <div className={`flex ${PREVIEWS_GAP_CLASS}`}>
        {onlySeasons.map((season) => (
          <div key={season.id}>{season.name}</div>
        ))}
      </div>
    </section>
  );
}

export default ShowSeasons;
