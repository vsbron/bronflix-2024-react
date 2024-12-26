import { MOVIES_URL } from "@/lib/constants";
import { IActor } from "@/lib/types";

// API for getting trending actors
export async function getTrendingActors(): Promise<IActor[]> {
  try {
    // Fetch the data
    const response = await fetch(
      `${MOVIES_URL}/person/popular?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&page=1`
    );

    // Guard clause
    if (!response.ok) {
      throw new Error(
        `Failed to fetch the actors data: ${response.statusText}}`
      );
    }

    // Getting the actual data
    const data = await response.json();

    // Ensure data.results not empty and is an array
    if (!data.results || !Array.isArray(data.results)) return [];

    // Return the actors
    return data.results;
  } catch (error: unknown) {
    // prettier-ignore
    if (error instanceof Error) {
      throw new Error(`An error occurred while fetching actors data: ${error.message}`);
    } else { throw new Error("An unknown error occurred while fetching actors data.")}
  }
}

// API for getting specific actor
export async function getActor(movieId: string): Promise<IActor> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MOVIES_URL}/person/${movieId}?api_key=${
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

    // Return the actor
    return data;
  } catch (error: unknown) {
    // prettier-ignore
    if (error instanceof Error) {
      throw new Error(`An error occurred while fetching actor data: ${error.message}`);
    } else { throw new Error("An unknown error occurred while fetching actor data.")}
  }
}
