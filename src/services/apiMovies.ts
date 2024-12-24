import { MOVIES_URL } from "../lib/constants";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// API for getting 1 random movie
export async function getRandomMovie(): Promise<any> {
  // Fetching the movie data
  const response = await fetch(
    `${MOVIES_URL}/movie/popular?api_key=${API_KEY}&page=1&include_adult=false`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  // Extracting the movies data and returning random one
  const data = await response.json();
  return data.results[Math.floor(Math.random() * data.results.length)];
}

// API for getting 10 trending shows
export async function getTrendingMovies(): Promise<any> {
  // Fetching the movie data
  const response = await fetch(
    `${MOVIES_URL}/movie/popular?api_key=${API_KEY}&page=1&include_adult=false`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  // Extracting the movies data
  const data = await response.json();

  // Returning the first 10 trending movies
  return data.results.slice(0, 10);
}
