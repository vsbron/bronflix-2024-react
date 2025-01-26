import { ISeason } from "@/lib/typesAPI";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";

function ShowSeasonsList({ seasons }: { seasons: ISeason[] }) {
  // Filtering out non-seasons
  const onlySeasons = seasons.filter((season) =>
    season.name.includes("Season")
  );

  // Returned JSX
  return (
    <section>
      <Heading as="h3">Seasons</Heading>
      <Previews
        rawPreviews={onlySeasons}
        width="18rem"
        height="27rem"
        type="movies"
      />
    </section>
  );
}

export default ShowSeasonsList;
