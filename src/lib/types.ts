import { ReactNode } from "react";

// Union for the headers
type Headings = "h1" | "h2";

// Components
export type HeadingProps = { children: string; as?: Headings };
export type LinkItemProps = { icon: ReactNode; title: string };
export type WrapperProps = { children: ReactNode };

// Movie data
export interface IMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  tagline: string;
  release_date: string;
  runtime: string;
  budget: string;
  original_language: string;
  genres: IGenre[];
  origin_country: { country: string }[];
  production_companies: IProductionCompany[];
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
