import { NO_MOVIE_POSTER, NO_PERSON_PHOTO, NO_SHOW_COVER } from "@/lib/assets";
import { IBase } from "@/lib/typesAPI";

// Function that shuffles the array
export function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

// Function that determines the color for the score display
export function scoreColor(score: number) {
  let bgColor, color;
  switch (true) {
    case score >= 7:
      bgColor = "bg-green-900";
      color = "text-green-400";
      break;
    case score >= 4:
      bgColor = "bg-yellow-800";
      color = "text-yellow-200";
      break;
    case score > 0:
      bgColor = "bg-red-900";
      color = "text-red-200";
      break;
    default:
      bgColor = "bg-stone-700";
      color = "text-stone-100";
  }

  // Return colors
  return { bgColor, color };
}

// Function that formats the date
export function formatDate(dateString: string) {
  // Guard clause
  if (dateString === "") return "TBA";

  // Returned formatted date
  return new Date(dateString).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Function that formats the runtime
export function formatRuntime(runtime: number) {
  // Calculating hours and minutes
  const hours = Math.floor(runtime / 60);
  const minutes = Math.floor(runtime % 60);

  // Guard clause
  if (hours === 0 && minutes === 0) return "Unknown";

  // Returned runtime
  return `${hours}h ${minutes}m`;
}

// Helper function that returns correct image data
export const getImageData = (type: string) => {
  // Getting the correct image attribute
  const IMAGE_KEYS: Record<string, keyof IBase> = {
    actors: "profile_path",
    tv: "backdrop_path",
    movie: "poster_path",
  };

  // Preparing fallback in case of missing image
  const FALLBACK_IMAGES: Record<string, string> = {
    actors: NO_PERSON_PHOTO,
    tv: NO_SHOW_COVER,
    movie: NO_MOVIE_POSTER,
  };

  // Return the image data object
  return {
    imageKey: IMAGE_KEYS[type] || "poster_path",
    fallback: FALLBACK_IMAGES[type] || NO_MOVIE_POSTER,
  };
};
