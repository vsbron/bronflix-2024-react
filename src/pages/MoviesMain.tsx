import { Helmet } from "react-helmet-async";

import {
  META_MAIN_MOVIES_DESC,
  META_MAIN_MOVIES_KEYW,
  META_MAIN_MOVIES_TITLE,
} from "@/lib/metaTags";

import Heading from "@/components/ui/Heading";
import MoviesUpcoming from "@/features/moviesMain/MoviesUpcoming";
import MoviesNowPlaying from "@/features/moviesMain/MoviesNowPlaying";
import MoviesCollections from "@/features/moviesMain/MoviesCollections";
import MoviesTopBg from "@/features/moviesMain/MoviesTopBg";
import MovieGenres from "@/features/moviesMain/MovieGenres";

function MoviesMain() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_MAIN_MOVIES_TITLE}</title>
        <meta name="description" content={META_MAIN_MOVIES_DESC} />
        <meta name="keywords" content={META_MAIN_MOVIES_KEYW} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* Content */}
      <section>
        <Heading>Discover Movies</Heading>
        <MoviesTopBg />
        <MoviesNowPlaying />
        <MovieGenres />
        <MoviesCollections />
        <MoviesUpcoming />
      </section>
    </>
  );
}

export default MoviesMain;
