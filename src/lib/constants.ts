export const MEDIA_URL = "https://api.themoviedb.org/3";
export const MEDIA_IMG_URL = "https://image.tmdb.org/t/p/";

export const MOVIE_CHANGE_INTERVAL = 10000;

export const MOVIES_FEATURED_QUANTITY = 15;
export const MOVIES_TOP_RATED_QUANTITY = 18;
export const SHOWS_TRENDING_QUANTITY = 20;
export const SHOWS_TOP_RATED_QUANTITY = 16;
export const ACTORS_TRENDING_QUANTITY = 20;

export const PREVIEWS_GAP = 15;
export const PREVIEWS_GAP_CLASS = `gap-${PREVIEWS_GAP / 2.5}`;
export const SCROLL_BY_ONE_MULTIPLIER = 3;
export const BIO_PREVIEW_LENGTH = 400;

export const LANGUAGES: { [key: string]: string } = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  ja: "Japanese",
  ru: "Russian",
  zh: "Chinese",
  ko: "Korean",
  th: "Thai",
};

export const CREW_JOBS = [
  "Director",
  "Writer",
  "Novel",
  "Screenplay",
  "Original Music Composer",
  "Director of Photography",
  "Producer",
  "Executive Producer",
];

export const GENDERS = ["N/A", "Female", "Male"];
