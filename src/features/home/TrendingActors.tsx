import Heading from "../../components/Heading";
import { MOVIES_IMG_URL } from "../../lib/constants";
import { useTrendingActors } from "./useTrendingActors";

function TrendingActors() {
  // Getting the random movie
  const { isLoading, actors, error } = useTrendingActors();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie</div>;

  console.log(actors);

  // Returned JSX
  return (
    <section>
      <Heading as="h2">TRENDING SHOWS</Heading>
      <div className="flex gap-6 h-96">
        {actors.map((show: any) => (
          <div
            style={{
              backgroundImage: `url(${MOVIES_IMG_URL}w500${show.profile_path})`,
            }}
            className="rounded-lg h-[100%] basis-72 bg-cover"
          ></div>
        ))}
      </div>
    </section>
  );
}

export default TrendingActors;
