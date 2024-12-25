import { MOVIES_URL } from "@/lib/constants";
import { IActor } from "@/lib/types";

// API for getting 10 trending actors
export async function getTrendingActors(): Promise<IActor[]> {
  // Fetching the actors data
  const response = await fetch(
    `${MOVIES_URL}/person/popular?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&page=1`
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

// API for getting specific actor
export async function getActor(actorId: string): Promise<IActor> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MOVIES_URL}/person/${actorId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );

    // Guard clause
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details from API:", errorDetails);
      throw new Error(`Failed to fetch actor: ${response.statusText}`);
    }

    // Extracting the actor data and returning it
    const data = (await response.json()) as IActor;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("An error occurred while fetching actor data.");
  }
}
