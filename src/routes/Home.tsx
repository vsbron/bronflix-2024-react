import Separator from "@/components/Separator";
import FeaturedMovies from "@/features/home/FeaturedMovies";
import TopRatedMovies from "@/features/home/TopRatedMovies";
import TrendingActors from "@/features/home/TrendingActors";
import TrendingShows from "@/features/home/TrendingShows";

function Home() {
  // Returned JSX
  return (
    <>
      <FeaturedMovies />
      <TrendingShows />
      <TrendingActors />
      <Separator />
      <TopRatedMovies />
    </>
  );
}

export default Home;
