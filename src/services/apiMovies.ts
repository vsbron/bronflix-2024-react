import { MOVIES_URL } from "../lib/constants";
// API for getting 1 random movie
export async function getRandomMovie(): Promise<any> {
  // Fetching the movies data
  const response = await fetch(
    `${MOVIES_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1&include_adult=false`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  // Extracting the movies data and returning random one
  const data = await response.json();
  return data.results[Math.floor(Math.random() * data.results.length)];
}

// API for getting 10 trending movies
export async function getTrendingMovies(): Promise<any> {
  // Fetching the movies data
  const response = await fetch(
    `${MOVIES_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1&include_adult=false`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  // Extracting the movies data
  const data = await response.json();

  // Returning the first 8 trending movies
  return data.results.slice(0, 8);
}

// API for getting specific movie
export async function getMovie(movieId: string): Promise<any> {
  // Fetching the movie data
  const response = await fetch(
    `${MOVIES_URL}/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
  );

  // Guard clause
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }

  // Extracting the movie data
  const data = await response.json();

  // Returning the movie
  return data;
}
