import { ReactNode, RefObject } from "react";
import { IGenre, IMovieList } from "./typesAPI";

/* Unions */
type Headings = "h1" | "h2";
export type RibbonDirections = "left" | "right";

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
  isScrollByOne?: boolean;
};
export type HeadingProps = { children: string; as?: Headings };
export type IconWrapperProps = {
  icon: ReactNode;
  children: ReactNode;
};
export type LinkItemProps = { icon: ReactNode; title: string };
export type ScorePreviewProps = {
  score: number;
  isHighlighted?: boolean;
};
export type WrapperProps = { children: ReactNode; className?: string };

// Home page components
export type MoviesFeaturedProps = { movies: IMovieList[] };
export type PreviewFeaturedProps = {
  movie: IMovieList;
  chosenMovieId: string;
  clickHandler: (movie: IMovieList) => void;
};
export type RibbonProps = {
  length: number;
  children: ReactNode;
  ribbon: any;
  isScrollByOne?: boolean;
  cellWidth?: string;
};
