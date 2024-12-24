import Wrapper from "../components/Wrapper";
import FeaturedMovie from "../features/home/FeaturedMovie";
import TrendingActors from "../features/home/TrendingActors";
import TrendingMovies from "../features/home/TrendingMovies";
import TrendingShows from "../features/home/TrendingShows";

function Home() {
  // Returned JSX
  return (
    <Wrapper>
      <FeaturedMovie />
      <TrendingMovies />
      <TrendingShows />
      <TrendingActors />
    </Wrapper>
  );
}

export default Home;
