import Separator from "@/components/Separator";
import ActorsTrending from "@/features/home/ActorsTrending";
import ExploreMore from "@/features/home/ExploreMore";
import HeroSection from "@/features/home/HeroSection";
import MoviesTopRated from "@/features/home/MoviesTopRated";
import ShowsTopRated from "@/features/home/ShowsTopRated";
import ShowsTrending from "@/features/home/ShowsTrending";

function Home() {
  // Returned JSX
  return (
    <>
      <HeroSection />
      <ShowsTrending />
      <ActorsTrending />
      <Separator />
      <ExploreMore />
      <Separator />
      <MoviesTopRated />
      <ShowsTopRated />
    </>
  );
}

export default Home;
