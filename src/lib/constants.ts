export const SITE_NAME = "BroNflix";

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

export const NOTABLE_WORK_LIMIT = 15;
export const NOTABLE_POPULARITY_LIMIT = 8;
export const NOTABLE_SCORE_LIMIT = 7.5;
export const NOTABLE_SCORE_SECONDARY = 7;
export const NOTABLE_SCORE_LAST = 6.5;

export const FILMOGRAPHY_LIMIT = 40;

export const EXCLUDED_GENRE_IDS = [
  99, // Documentary
  10762, // Kids
  10763, // News
  10764, // Reality
  10767, // Talk
];

export const COUNTRIES: { [key: string]: string } = {
  US: "United States",
  GB: "England",
  DE: "Germany",
  FR: "France",
  IT: "Italy",
  KR: "South Korea",
  CH: "China",
  JP: "Japan",
  CA: "Canada",
  RU: "Russia",

  CZ: "Czech Republic",
  NL: "Netherlands",
  NO: "Norway",
  ES: "Spain",
  IE: "Ireland",
  DK: "Denmark",
  HU: "Hungary",
  SE: "Sweden",
  IL: "Israel",

  BR: "Brazil",
  MX: "Mexico",
  AU: "Australia",

  MY: "Malaysia",
  IN: "India",
  ZA: "South Africa",

  SA: "Saudi Arabia",
};

export const LANGUAGES: { [key: string]: string } = {
  en: "English",
  es: "Spanish",

  de: "German",
  fr: "French",
  it: "Italian",
  ko: "Korean",
  zh: "Chinese",
  ja: "Japanese",
  ru: "Russian",

  cs: "Czech",
  no: "Norwegian",
  nl: "Dutch",
  hu: "Hungarian",
  sv: "Swedish",
  he: "Hebrew",

  pt: "Portuguese",

  af: "African",
  ar: "Arabic",
  hi: "Hindi",
  te: "Telugu",
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
  "Production",
];

export const GENDERS = ["N/A", "Female", "Male"];
