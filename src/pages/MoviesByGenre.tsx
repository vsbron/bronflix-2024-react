import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Heading from "@/components/ui/Heading";
import useGenreData from "@/hooks/useGenreData";
import {
  META_MOVIES_GENRE_DESC,
  META_MOVIES_GENRE_TITLE,
} from "@/lib/metaTags";

import Loader from "@/components/ui/Loader";

function MoviesByGenre() {
  // Getting the genre ID from params
  const { genreId } = useParams();

  if (!genreId) return <div>Sorry, no Genre was provided</div>;

  // Getting the genre name and possible error from custom hook
  const { genreName, error } = useGenreData(genreId);

  if (!genreName) return <Loader />;

  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>
          {genreName}
          {META_MOVIES_GENRE_TITLE}
        </title>
        <meta name="description" content={META_MOVIES_GENRE_DESC} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* Content */}
      <Heading>{`Movies in the ${genreName} Genre`}</Heading>
      {/* {error || <GenreMediaList genreId={genreId} />} */}
    </>
  );
}

export default MoviesByGenre;
