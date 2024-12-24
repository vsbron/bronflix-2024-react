import { MOVIES_URL } from "../lib/constants";

// API for getting 10 trending shows
export async function getTrendingShows(): Promise<any> {
  // Fetching the show data
  const response = await fetch(
    `${MOVIES_URL}/tv/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1&include_adult=false`
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
