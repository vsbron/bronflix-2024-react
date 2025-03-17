import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Heading from "@/components/ui/Heading";
import {
  META_MOVIES_GENRE_DESC,
  META_MOVIES_GENRE_TITLE,
} from "@/lib/metaTags";

function MoviesByGenre() {
  // Setting the state for genre name and error
  const [genreName, setGenreName] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  // Getting the genre ID from params
  const { genreId } = useParams();

  useEffect(() => {
    // Guard clause
    if (!genreId) {
      setError("No Genre provided");
      return;
    }

    // Create signal from controller to clean fetch function
    const controller = new AbortController();
    const signal = controller.signal;

    // Function to fetch genres and get the name of the selected one
    const fetchGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`,
        { signal }
      );
      const data = await response.json();
      const genre = data.genres.find(
        (g: { id: number; name: string }) => g.id === parseInt(genreId!)
      );
      setGenreName(genre ? genre.name : "Unknown Genre");
      setError("");
    };

    // Call the function
    fetchGenres();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [genreId]);

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
