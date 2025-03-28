import { Media } from "@/lib/types";

export type APIFetchType =
  | "popular"
  | "top_rated"
  | "upcoming"
  | "now_playing"
  | "airing_today"
  | "on_the_air";
export type APIFetchGenre = "tv" | "movie";

/* Fetched lists */
export interface IBase {
  id: number;
  name?: string;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  profile_path?: string;
  vote_average?: number;
  vote_count?: number;
  character?: string;
  job?: string;
  type?: Media;
  department?: string;
  roles?: { character: string }[];
}
export interface IMovieList extends IBase {
  title: string;
  overview?: string;
  poster_path: string;
  backdrop_path?: string;
  release_date?: string;
  original_language?: string;
  vote_average: number;
  vote_count: number;
  genre_ids?: string[];
}
export interface IShowList extends IBase {
  name: string;
  backdrop_path: string;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
}
export interface IPersonList extends IBase {
  name: string;
  profile_path: string;
}

/* Individual data*/
export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  belongs_to_collection: ICollection;
  budget: number;
  genres: IGenre[];
  origin_country: string[];
  original_language: string;
  original_title: string;
  popularity: number;
  production_countries: { name: string }[];
  production_companies: IProductionCompany[];
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string }[];
  type?: Media;
  vote_average: number;
  vote_count: number;
}
export interface IShow {
  id: number;
  name: string;
  tagline?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path: string;
  first_air_date: string;
  created_by: IPerson[];
  genres: IGenre[];
  in_production?: boolean;
  languages?: string[];
  last_air_date: string;
  next_episode_to_air?: string;
  networks: IProductionCompany[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country: string[];
  original_language: string;
  original_name?: string;
  popularity?: number;
  production_companies: IProductionCompany[];
  production_countries: { name: string }[];
  seasons: ISeason[];
  spoken_languages?: { english_name: string }[];
  status?: string;
  type?: Media;
  vote_average: number;
  vote_count?: number;
}
export interface IPerson {
  id: number;
  name: string;
  gender: number;
  profile_path: string;
  also_known_as: string[];
  place_of_birth: string;
  birthday: string;
  deathday?: string;
  biography: string;
  popularity: number;
  known_for_department: string;
}
export interface ICastCrew {
  cast: ICast[];
  crew: ICrew[];
}
export interface ICast extends IBase {
  name: string;
  character: string;
  profile_path: string;
}
export interface ICrew extends IBase {
  name: string;
  profile_path: string;
  job: string;
  department: string;
}

export interface ICredits {
  cast: IMediaCredit[];
  crew: IMediaCredit[];
}

export interface IMediaCredit {
  id: number;
  title?: string;
  name?: string;
  date?: string;
  year?: string;
  release_date?: string;
  first_air_date?: string;
  type?: string;
  job?: string;
  popularity: number;
  vote_average: number;
  character?: string;
  roles?: string[];
  genre_ids?: number[];
}

/* Misc */
export interface ICollection extends IBase {
  parts?: IMovieList[];
  backdrop_path: string;
  name: string;
  overview?: string;
  poster_path: string;
}
export interface IGenre {
  id: number;
  name: string;
}
export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
}
export interface ISeason {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  air_date: string;
  episode_count: number;
  season_number: number;
  vote_average: number;
  episodes: IEpisode[];
}
export interface IEpisode {
  id: number;
  name: string;
  episode_number: number;
  still_path: string;
  vote_average: number;
  runtime: number;
  overview: string;
  air_date: string;
}

export interface IVideo {
  key: string;
  type: string;
  site: string;
}

/* SEARCH */
export interface ISearchResultsObj {
  briefData: ISearchedMedia[];
  totalResults: number;
}
export interface ISearchResultsObjSmall {
  briefData: ISearchedMediaSmall[];
  totalResults: number;
}

export interface ISearchedMedia extends ISearchedMediaSmall {
  overview: string;
  popularity: number;
  original_language: string;
  vote_average: number;
  vote_count: number;
}

export interface ISearchedMediaSmall {
  id: number;
  name: string;
  title: string;
  media_type: string;
  first_air_date: string;
  release_date: string;
  poster_path: string;
  profile_path: string;
}

export interface ISearchResults {
  results: ISearchedMedia[];
  total_results: number;
  total_pages: number;
}

export interface IGenreMedia {
  results: IMovieList[];
  total_results: number;
  total_pages: number;
}
