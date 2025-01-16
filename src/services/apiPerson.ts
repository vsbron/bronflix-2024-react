import { MEDIA_URL } from "@/lib/constants";
import {
  ICastCrew,
  ICredits,
  IMovie,
  IPerson,
  IPersonList,
  IShow,
} from "@/lib/typesAPI";

// API for getting trending actors
export async function getTrendingActors(): Promise<IPersonList[]> {
  try {
    // Fetch the data
    const response = await fetch(
      `${MEDIA_URL}/person/popular?api_key=${
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
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching actors data");
    } else {
      console.error(error);
      throw new Error("An unknown error occurred while fetching actors data.");
    }
  }
}

// API for getting specific person
export async function getPerson(movieId: string): Promise<IPerson> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MEDIA_URL}/person/${movieId}?api_key=${
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

    // Return the person
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching actor data");
    } else {
      console.error(error);
      throw new Error("An unknown error occurred while fetching actor data.");
    }
  }
}

// API for getting movie cast and crew
export async function getMovieCastCrew(movieId: string): Promise<ICastCrew> {
  try {
    // Fetching the data
    const response = await fetch(
      `${MEDIA_URL}/movie/${movieId}/credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=en-US`
    );

    // Guard clause
    if (!response.ok) {
      throw new Error(
        `Failed to fetch the cast & crew data: ${response.statusText}}`
      );
    }

    // Getting the actual data
    const data = await response.json();

    // Return the actor
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching cast & crew data");
    } else {
      console.error(error);
      throw new Error(
        "An unknown error occurred while fetching cast & crew data."
      );
    }
  }
}

// API for getting persons` credited work
export async function getPersonCredits(personId: number): Promise<any> {
  try {
    // Fetching the movies data
    const response1 = await fetch(
      `${MEDIA_URL}/person/${personId}/movie_credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    // Fetching the show data
    const response2 = await fetch(
      `${MEDIA_URL}/person/${personId}/tv_credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );

    // Guard clause
    if (!response1.ok || !response2.ok) {
      throw new Error("Failed to fetch the person's work data");
    }

    // Getting the actual data
    const data1 = await response1.json();
    const data2 = await response2.json();

    // Merging data while assigning specific type to every item
    const data = [
      ...data1.cast.map((movie: IMovie) => ({ ...movie, type: "movies" })),
      ...data2.cast.map((show: IShow) => ({ ...show, type: "tv" })),
    ];

    // Return the credits list
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error("An error occurred while fetching person's work data");
    } else {
      console.error(error);
      throw new Error(
        "An unknown error occurred while fetching person's work data."
      );
    }
  }
}
