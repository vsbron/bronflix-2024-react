import { MOVIES_URL } from "../lib/constants";

// API for getting 10 trending actors
export async function getTrendingActors(): Promise<any> {
  // Fetching the actors data
  const response = await fetch(
    `${MOVIES_URL}/person/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch actors");
  }

  // Extracting the actors data
  const data = await response.json();

  // Returning the first 12 trending actors
  return data.results.slice(0, 12);
}
