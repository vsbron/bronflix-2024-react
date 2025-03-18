import { useState, useEffect } from "react";

export function useGenreData(type: "tv" | "movie", genreId: string) {
  // Setting the state for genre name, error and loading state
  const [genreName, setGenreName] = useState<string>("Unknown");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Setting the controller for cleanup function
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchGenres = async () => {
      // Enable loading state
      setIsLoading(true);

      try {
        // Get the full genres list, find the one we're interested in
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US`,
          { signal }
        );
        const data = await response.json();
        const genre = data.genres.find(
          (g: { id: number; name: string }) => g.id === parseInt(genreId)
        );

        // If there's a genre name, update the state
        genre && setGenreName(genre.name);
        // Disable loading state
        setIsLoading(false);
      } catch (err) {
        // Ignore the abort controller error
        if (err instanceof DOMException && err.name === "AbortError") {
          return; // Ignore
        }
        // Set the error message
        setError(`Failed to fetch ${type} genre data`);
        // Disable loading state
        setIsLoading(false);
      }
    };

    // Call the function
    fetchGenres();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [genreId]);

  return { genreName, error, isLoading };
}
