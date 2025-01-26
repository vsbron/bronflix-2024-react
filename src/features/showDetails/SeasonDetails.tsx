import Loader from "@/components/ui/Loader";
import { useSeason } from "./useSeason";
import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";

function SeasonDetails({ seasonNumber }: { seasonNumber: number }) {
  // Getting the season data from React Query
  const { data, isLoading, error } = useSeason(seasonNumber);

  if (isLoading) return <Loader />;

  if (!data || error) return <div>Sorry, couldn't get this season data</div>;

  console.log(data);

  // Returned JSX
  return (
    <div className={`grid ${PREVIEWS_GAP_CLASS} grid-cols-[20rem_1fr]`}>
      <div>
        <img src={`${MEDIA_IMG_URL}original${data.poster_path}`} />
      </div>
      <div className="flex items-end w-1/2">{data.overview}</div>
    </div>
  );
}

export default SeasonDetails;
