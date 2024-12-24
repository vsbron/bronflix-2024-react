import { MOVIES_URL } from "../lib/constants";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// API for getting 10 trending actors
export async function getTrendingActors(): Promise<any> {
  // Fetching the show data
  const response = await fetch(
    `${MOVIES_URL}/person/popular?api_key=${API_KEY}&page=1`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch actors");
  }

  // Extracting the shows data
  const data = await response.json();

  // Returning the first 10 trending shows
  return data.results.slice(0, 12);
}
