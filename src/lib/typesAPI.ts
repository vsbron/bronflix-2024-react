export type APIFetchType = "popular" | "top_rated";

/* Fetched lists */
export interface IBase {
  id: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  profile_path?: string;
  vote_average?: number;
}
export interface IMovieList extends IBase {
  title: string;
  overview?: string;
  poster_path: string;
  backdrop_path?: string;
  release_date?: string;
  original_language?: string;
  vote_average: number;
  vote_count?: number;
  genre_ids?: number[];
}
export interface IShowList extends IBase {
  name: string;
  backdrop_path: string;
  vote_average: number;
}
export interface IPersonList extends IBase {
  name: string;
  profile_path: string;
}

/* Individual data*/
export interface IMovie {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
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
  vote_average: number;
  vote_count: number;
}
export interface IShow {
  id: string;
  name: string;
  tagline?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path: string;
  first_air_date: string;
  created_by?: IPerson[];
  episode_run_time?: any[];
  genres: IGenre[];
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: any /**/;
  next_episode_to_air?: string;
  networks?: IProductionCompany[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country: string[];
  original_language: string;
  original_name?: string;
  popularity?: number;
  production_companies: IProductionCompany[];
  production_countries: { name: string }[];
  seasons?: ISeason[];
  spoken_languages?: { english_name: string }[];
  status?: string;
  type?: string;
  vote_average?: number;
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
}

/* Misc */
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
}
export interface IVideo {
  key: string;
  type: string;
  site: string;
}
