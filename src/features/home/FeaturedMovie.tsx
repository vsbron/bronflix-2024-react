import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import { useFeatureMovie } from "./useFeatureMovie";

function FeaturedMovie() {
  // Getting the random movie
  const { isLoading, movie, error } = useFeatureMovie();

  // Guard clauses
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie</div>;

  const overview = movie?.overview || "";
  const truncatedOverview =
    overview.length > 165
      ? `${overview.slice(0, 165).trim().split(" ").slice(0, -1).join(" ")}...`
      : overview;

  // Returned JSX
  return (
    <section>
      <Heading>WHAT'S HOT</Heading>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "top center",
        }}
        className="relative w-full h-[50rem] flex items-end justify-start text-white max-w-[65vw] bg-cover"
      >
        <div className="p-10 pt-96 pr-[50%] bg-gradient-to-t from-stone-950 to-transparent">
          <h2 className="text-7xl font-bold mb-4">{movie.title}</h2>
          <p className="text-2xl">{truncatedOverview}</p>
          <div className="mt-6 font-bold flex gap-6">
            <div className="bg-red-900 rounded-lg inline-block hover:bg-stone-50 hover:text-red-900 ">
              <Link
                className="inline-block py-3 px-6"
                to={`/movies/${movie.id}`}
              >
                LEARN MORE
              </Link>
            </div>
            <div className="bg-red-900 rounded-lg inline-block hover:bg-stone-50 hover:text-red-900 ">
              <Link className="inline-block py-3 px-6" to="/movies/something">
                WATCH TRAILER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
