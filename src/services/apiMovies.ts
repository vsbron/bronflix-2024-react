import { MOVIES_URL } from "@/lib/constants";
import { IMovie, MoviesAPIType } from "@/lib/types";

// API for getting movies
export async function getMovies(type: MoviesAPIType): Promise<IMovie[]> {
  try {
    // Fetch the data
    const response = await fetch(
      `${MOVIES_URL}/movie/${type}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&page=1&include_adult=false`
    );

    // Guard clause
    if (!response.ok) {
      throw new Error(
        `Failed to fetch the movies data: ${response.statusText}}`
      );
    }

    // Getting the actual data
    const data = await response.json();

    // Ensure data.results not empty and is an array
    if (!data.results || !Array.isArray(data.results)) return [];

    // Return the movies
    return data.results;
  } catch (error: unknown) {
    // prettier-ignore
    if (error instanceof Error) {
      throw new Error(`An error occurred while fetching movies data: ${error.message}`);
    } else { throw new Error("An unknown error occurred while fetching movies data.")}
  }
}

// API for getting specific movie
export async function getMovie(movieId: string): Promise<IMovie> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MOVIES_URL}/movie/${movieId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );

    // Guard clause
    if (!response.ok) {
      throw new Error(
        `Failed to fetch the movie data: ${response.statusText}}`
      );
    }

    // Getting the actual data
    const data = await response.json();

    // Return the movie
    return data;
  } catch (error: unknown) {
    // prettier-ignore
    if (error instanceof Error) {
      throw new Error(`An error occurred while fetching movie data: ${error.message}`);
    } else { throw new Error("An unknown error occurred while fetching movie data.")}
  }
}
