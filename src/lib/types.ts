import { ReactNode, Ref, RefObject } from "react";

/* Unions */
type Headings = "h1" | "h2";
export type RibbonDirections = "left" | "right";
export type MoviesAPIType = "popular" | "top_rated";

/* Context */
export type GenresContextType = {
  genres: IGenre[];
};
export type GenresProviderProps = { children: ReactNode };

/* Components */
export type ButtonProps = { children: ReactNode };
export type ButtonPreviewProps = { dir: RibbonDirections; clickHandler: any };
export type ButtonPreviewWrapperProps = {
  ribbon: RefObject<HTMLDivElement>;
  length: number;
};
export type HeadingProps = { children: string; as?: Headings };
export type LinkItemProps = { icon: ReactNode; title: string };
export type WrapperProps = { children: ReactNode; className?: string };

// Home page components
export type MoviesFeaturedProps = { movies: IMovieList[] };
export type MovieRatingProps = { score: number; count: number };
export type RibbonProps = {
  length: number;
  children: ReactNode;
  ribbon: any;
};

/* Movie/Show/Actor data */
export interface IMovie {
  id: string;
  title?: string;
  tagline?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  budget?: number;
  genres?: IGenre[];
  original_language?: string;
  original_title?: string;
  popularity?: number;
  production_countries?: { name: string }[];
  production_companies?: IProductionCompany[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: { english_name: string }[];
  vote_average?: number;
  vote_count?: number;
}
export interface IMovieList {
  id: string;
  title: string;
  overview?: string;
  poster_path: string;
  backdrop_path?: string;
  release_date?: string;
  original_language?: string;
  vote_average?: number;
  vote_count?: number;
  genre_ids?: number[];
}
export interface IShow {
  id: string;
  name: string;
  tagline?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path: string;
  first_air_date?: string;
  created_by?: IPerson[];
  episode_run_time?: any[];
  genres?: IGenre[];
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: any /**/;
  next_episode_to_air?: string;
  networks?: IProductionCompany[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: { country: string }[];
  original_language?: string;
  original_name?: string;
  popularity?: number;
  production_companies?: IProductionCompany[];
  production_countries?: { name: string }[];
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
  profile_path: string;
  also_known_as?: string[];
  biography?: string;
  birthday?: string;
  deathday?: string | null;
  gender?: number;
  place_of_birth?: string;
  popularity?: number;
}
///////////////
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
