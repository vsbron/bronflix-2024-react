import { MEDIA_URL } from "@/lib/constants";
import { APIFetchType, ICollection, IMovie, IMovieList } from "@/lib/typesAPI";

// API for getting movies
export async function getMovies(type: APIFetchType): Promise<IMovieList[]> {
  try {
    // Fetch the data
    const response = await fetch(
      `${MEDIA_URL}/movie/${type}?api_key=${
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
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching movies data");
    } else {
      console.error(error);
      throw new Error("An unknown error occurred while fetching movies data.");
    }
  }
}

// API for getting specific movie
export async function getMovie(movieId: string): Promise<IMovie> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MEDIA_URL}/movie/${movieId}?api_key=${
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
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching movie data");
    } else {
      console.error(error);
      throw new Error("An unknown error occurred while fetching movie data.");
    }
  }
}

// API for getting similar movies
export async function getMoviesSimilar(movieId: string): Promise<IMovieList[]> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MEDIA_URL}/movie/${movieId}/similar?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );

    // Guard clause
    if (!response.ok) {
      throw new Error(
        `Failed to fetch related movies data: ${response.statusText}}`
      );
    }

    // Getting the actual data
    const data = await response.json();

    // Return the movies
    return data.results;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching related movies data");
    } else {
      console.error(error);
      throw new Error(
        "An unknown error occurred while fetching related movies data."
      );
    }
  }
}
