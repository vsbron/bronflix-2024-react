import Heading from "../../components/Heading";
import { MOVIES_IMG_URL } from "../../lib/constants";
import { useTrendingShows } from "./useTrendingShows";

function TrendingShows() {
  // Getting the random movie
  const { isLoading, shows, error } = useTrendingShows();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie</div>;

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING SHOWS</Heading>
      <div className="flex gap-6 h-96">
        {shows.map((show: any) => (
          <div
            style={{
              backgroundImage: `url(${MOVIES_IMG_URL}w500${show.poster_path})`,
            }}
            className="rounded-lg h-[100%] basis-72 bg-cover"
          ></div>
        ))}
      </div>
    </section>
  );
}

export default TrendingShows;
