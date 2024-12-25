import FeaturedMovies from "@/features/home/FeaturedMovies";
import TrendingActors from "@/features/home/TrendingActors";
import TrendingMovies from "@/features/home/TrendingMovies";
import TrendingShows from "@/features/home/TrendingShows";

function Home() {
  // Returned JSX
  return (
    <>
      <FeaturedMovies />
      <TrendingMovies />
      <TrendingShows />
      <TrendingActors />
    </>
  );
}

export default Home;
