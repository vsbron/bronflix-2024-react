import { MOVIES_URL } from "../lib/constants";
import { IShow } from "../lib/types";

// API for getting 10 trending shows
export async function getTrendingShows(): Promise<IShow[]> {
  // Fetching the show data
  const response = await fetch(
    `${MOVIES_URL}/tv/popular?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&page=1&include_adult=false`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  // Extracting the shows data
  const data = await response.json();

  // Returning the first 10 trending shows
  return data.results.slice(0, 10);
}

// API for getting specific show
export async function getShow(showId: string): Promise<IShow> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MOVIES_URL}/tv/${showId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    );

    // Guard clause
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details from API:", errorDetails);
      throw new Error(`Failed to fetch show: ${response.statusText}`);
    }

    // Extracting the show data and returning it
    const data = (await response.json()) as IShow;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("An error occurred while fetching show data.");
  }
}
