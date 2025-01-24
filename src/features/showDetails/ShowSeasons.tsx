import Heading from "@/components/ui/Heading";
import { BlackGradientToTop } from "@/components/ui/Overlays";
import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
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
          <div
            key={season.id}
            className="w-[20rem] h-[30rem] bg-cover rounded-xl relative"
            style={{
              backgroundImage: `url(${MEDIA_IMG_URL}w500${season.poster_path})`,
            }}
          >
            <BlackGradientToTop height="10rem" />
            <div className="absolute bottom-4 left-4 z-10 font-heading">
              {season.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShowSeasons;
