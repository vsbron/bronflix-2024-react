import { useState, useEffect } from "react";

function useGenreData(genreId: string) {
  // Setting the states for genre name and error
  const [genreName, setGenreName] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Getting the signal from AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    // Function that gets all genres and sets the passed genre's name
    const fetchGenres = async () => {
      try {
        // Fetch the genres
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US`,
          { signal }
        );
        const data = await response.json();

        // Get the correct genre
        const genre = data.genres.find(
          (g: { id: number; name: string }) => g.id === parseInt(genreId)
        );
        // Set the states

        setGenreName(genre ? genre.name : "Unknown Genre");
        setError("");
      } catch (err) {
        setError("Failed to fetch genre data");
      }
    };

    // Call the function
    fetchGenres();

    return () => {
      controller.abort();
    };
  }, [genreId]);

  // Return the name and the error
  return { genreName, error };
}

export default useGenreData;
