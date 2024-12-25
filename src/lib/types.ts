import { ReactNode } from "react";

// Union for the headers
type Headings = "h1" | "h2";

// Components
export type HeadingProps = { children: string; as?: Headings };
export type LinkItemProps = { icon: ReactNode; title: string };
export type WrapperProps = { children: ReactNode; className?: string };

// Movie/Show/Actor data
export interface IMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  tagline: string;
  release_date: string;
  runtime: string;
  budget: string;
  original_language: string;
  genres: IGenre[];
  origin_country: { country: string }[];
  production_companies: IProductionCompany[];
}
export interface IShow {
  id: string;
  name: string;
  genres: IGenre[];
  origin_country: { country: string }[];
  overview?: string;
  poster_path: string;
  backdrop_path: string;
  tagline?: string;
  first_air_date: string;
  production_companies: IProductionCompany[];
  type: string;
  status: string;
  spoken_languages: { english_name: string }[];
  languages: string[];
  original_language: string;
  created_by: any[];
  episode_run_time: any[];
  in_production: boolean;
  last_air_date: string;
  networks: any[];
  last_episode_to_air: any;
  next_episode_to_air: any;
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: any[];
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
export interface IActor {
  id: number;
  name: string;
  profile_path: string;
  gender: number;
  birthday: string;
  deathday: string | null;
  place_of_birth: string;
  biography: string;
}
