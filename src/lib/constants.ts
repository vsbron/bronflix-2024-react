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

export const CAST_MAX = 25;
export const CREW_MAX = 15;
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
  FR: "France",
  DE: "Germany",
  IT: "Italy",
  CH: "China",
  JP: "Japan",
  KR: "South Korea",
  RU: "Russia",
  CA: "Canada",

  AT: "Austria",
  BE: "Belgium",
  BG: "Bulgaria",
  HR: "Croatia",
  CZ: "Czech Republic",
  DK: "Denmark",
  FI: "Finland",
  GR: "Greece",
  HU: "Hungary",
  IE: "Ireland",
  IL: "Israel",
  NL: "Netherlands",
  NO: "Norway",
  PL: "Poland",
  PT: "Portugal",
  RS: "Serbia",
  ES: "Spain",
  SE: "Sweden",
  TR: "Turkey",
  UK: "Ukraine",

  AU: "Australia",
  AR: "Argentina",
  BR: "Brazil",
  CL: "Chile",
  CO: "Colombia",
  IS: "Iceland",
  MX: "Mexico",
  NZ: "New Zealand",

  EG: "Egypt",
  IN: "India",
  ID: "Indonesia",
  TH: "Thailand",
  MY: "Malaysia",
  NG: "Nigeria",
  PK: "Pakistan",
  PH: "Philippines",
  SA: "Saudi Arabia",
  ZA: "South Africa",
  VN: "Vietnam",
};

export const LANGUAGES: { [key: string]: string } = {
  en: "English",
  es: "Spanish",

  fr: "French",
  de: "German",
  it: "Italian",
  zh: "Chinese",
  ja: "Japanese",
  ko: "Korean",
  ru: "Russian",

  sq: "Albanian",
  bg: "Bulgarian",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  et: "Estonian",
  fi: "Finnish",
  ka: "Georgian",
  el: "Greek",
  he: "Hebrew",
  hu: "Hungarian",
  is: "Icelandic",
  lv: "Latvian",
  lt: "Lithuanian",
  no: "Norwegian",
  pl: "Polish",
  pt: "Portuguese",
  ro: "Romanian",
  sr: "Serbian",
  sv: "Swedish",
  tr: "Turkish",
  uk: "Ukrainian",

  af: "African",
  ar: "Arabic",
  bn: "Bengali",
  fa: "Persian",
  hi: "Hindi",
  id: "Indonesian",
  mk: "Macedonian",
  ms: "Malay",
  sw: "Swahili",
  ta: "Tamil",
  te: "Telugu",
  th: "Thai",
  ur: "Urdu",
  vi: "Vietnamese",
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
