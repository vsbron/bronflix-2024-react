import Heading from "../../components/Heading";
import { useFeatureMovie } from "./useFeatureMovie";

function FeaturedMovie() {
  // Getting the random movie
  const { isLoading, movie, error } = useFeatureMovie();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie</div>;

  // Returned JSX
  return (
    <section>
      <Heading>What's hot</Heading>
      <div
        className="relative w-full h-[50rem] flex items-end justify-start text-white max-w-[65vw] p-20"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="max-w-[50%]">
          <h1 className="text-6xl font-bold mb-4">{movie?.title}</h1>
          <p className="text-xl">{movie?.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
