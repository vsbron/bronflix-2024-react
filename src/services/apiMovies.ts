import { MOVIES_URL } from "@/lib/constants";
import { IMovie } from "@/lib/types";

// API for getting one random movie
export async function getRandomMovie(): Promise<IMovie> {
  try {
    // Fetching the movies data
    const response = await fetch(
      `${MOVIES_URL}/movie/popular?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&page=1&include_adult=false`
    );

    // Guard clause
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details from API:", errorDetails);
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    // Extracting the movies data and returning random one
    const data = await response.json();
    return data.results[Math.floor(Math.random() * data.results.length)];
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("An error occurred while fetching movies data.");
  }
}

// API for getting 10 trending movies
export async function getTrendingMovies(): Promise<IMovie[]> {
  try {
    // Fetching the movies data
    const response = await fetch(
      `${MOVIES_URL}/movie/popular?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&page=1&include_adult=false`
    );

    // Guard clause
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details from API:", errorDetails);
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    // Extracting the movies data and returning the first 8
    const data = await response.json();
    return data.results.slice(0, 8);
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("An error occurred while fetching movies data.");
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
      const errorDetails = await response.json();
      console.error("Error details from API:", errorDetails);
      throw new Error(`Failed to fetch movie: ${response.statusText}`);
    }

    // Extracting the movie data and returning it
    const data = (await response.json()) as IMovie;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("An error occurred while fetching movie data.");
  }
}
