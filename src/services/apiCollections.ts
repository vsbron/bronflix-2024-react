import { MEDIA_URL } from "@/lib/constants";
import { ICollection } from "@/lib/typesAPI";

// API for getting movie collection
export async function getMovieCollection(
  collectionId: string
): Promise<ICollection> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MEDIA_URL}/collection/${collectionId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );

    // Guard clause
    if (!response.ok) {
      throw new Error(
        `Failed to fetch the collection data: ${response.statusText}`
      );
    }

    // Getting the actual data
    const data = await response.json();

    // Return the collection
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching collection data");
    } else {
      console.error(error);
      throw new Error(
        "An unknown error occurred while fetching collection data."
      );
    }
  }
}
