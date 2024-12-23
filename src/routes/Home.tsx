import FeaturedMovie from "../features/home/FeaturedMovie";
import TrendingActors from "../features/home/TrendingActors";
import TrendingMovies from "../features/home/TrendingMovies";
import TrendingShows from "../features/home/TrendingShows";

function Home() {
  // Returned JSX
  return (
    <section>
      <FeaturedMovie />
      <TrendingMovies />
      <TrendingShows />
      <TrendingActors />
    </section>
  );
}

export default Home;
