import { MEDIA_URL } from "@/lib/constants";
import { APIFetchGenre, IGenre } from "@/lib/typesAPI";

// API for getting the genres list
export async function getGenres(type: APIFetchGenre): Promise<IGenre[]> {
  try {
    // Fetch the data
    const response = await fetch(
      `${MEDIA_URL}genre/${type}/list?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );

    // Guard clause
    if (!response.ok) {
      throw new Error(
        `Failed to fetch the ${type} genres data: ${response.statusText}`
      );
    }

    // Getting the actual data
    const data = await response.json();

    // Ensure data.results not empty and is an array
    if (!data.genres || !Array.isArray(data.genres)) return [];

    // Return the genres list
    return data.genres;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error occurred while fetching ${type} genres data`);
  }
}
