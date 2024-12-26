import MoviesFeatured from "@/features/home/MoviesFeatured";
import MoviesTopRated from "@/features/home/MoviesTopRated";
import Separator from "@/components/Separator";
import ActorsTrending from "@/features/home/ActorsTrending";
import ShowsTrending from "@/features/home/ShowsTrending";
import ExploreMore from "@/features/home/ExploreMore";

function Home() {
  // Returned JSX
  return (
    <>
      <MoviesFeatured />
      <ShowsTrending />
      <ActorsTrending />
      <Separator />
      <ExploreMore />
      <Separator />
      <MoviesTopRated />
    </>
  );
}

export default Home;
