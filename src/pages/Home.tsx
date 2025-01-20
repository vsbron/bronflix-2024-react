import { Helmet } from "react-helmet-async";

import {
  META_MAIN_DESC,
  META_MAIN_KEYW,
  META_MAIN_TITLE,
} from "@/lib/metaTags";

import Separator from "@/components/ui/Separator";
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
      {/* Meta data */}
      <Helmet>
        <title>{META_MAIN_TITLE}</title>
        <meta name="description" content={META_MAIN_DESC} />
        <meta name="keywords" content={META_MAIN_KEYW} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
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
