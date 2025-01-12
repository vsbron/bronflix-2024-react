import { ReactNode, RefObject } from "react";
import { IBase, IGenre, IMovie, IMovieList } from "./typesAPI";

/* Unions */
type Headings = "h1" | "h2" | "h3";
type Media = "actors" | "tv" | "movies";
type PreviewSubtitles = "character" | "job";
export type RibbonDirections = "left" | "right";

/* Context */
export type GenresContextType = {
  genres: IGenre[];
};
export type GenresProviderProps = { children: ReactNode };
export type VideoContentProps = { video: string };
export type VideoContextProps = {
  isOpen: boolean;
  openVideo: () => void;
  closeVideo: () => void;
};
export type VideoProviderProps = { children: ReactNode };
export type VideoTriggerProps = { children: ReactNode };

/* Components */
export type ButtonProps = { children: ReactNode };
export type ButtonPreviewProps = { dir: RibbonDirections; clickHandler: any };
export type ButtonPreviewWrapperProps = {
  ribbon: RefObject<HTMLDivElement>;
  length: number;
  isScrollByOne?: boolean;
};
export type FooterHeadingProps = { children: string };
export type HeadingProps = { children: string; as?: Headings };
export type IconWrapperProps = {
  icon: ReactNode;
  children: ReactNode;
};
export type LinkItemProps = { icon: ReactNode; title: string };
export type PreviewsProps<T> = {
  rawPreviews: T[];
  pages?: number;
  width?: string;
  height: string;
  type: Media;
  subtitle?: PreviewSubtitles;
  isTwoRows?: boolean;
};
export type PreviewImageProps = {
  media: IBase;
  type: string;
  children?: ReactNode;
};
export type ScorePreviewProps = {
  score: number;
  count?: number;
  isHighlighted?: boolean;
  isBig?: boolean;
};
export type WrapperProps = { children: ReactNode; className?: string };

// Home page components
export type MoviesFeaturedProps = { movies: IMovieList[] };
export type MovieHighlightProps = { movie: IMovieList };
export type PreviewFeaturedProps = {
  movie: IMovieList;
  chosenMovieId: string;
  clickHandler: (movie: IMovieList) => void;
};
export type RibbonProps = {
  length: number;
  children: ReactNode;
  isScrollByOne?: boolean;
  cellWidth?: string;
};

// Movie page
export type MovieCastCrewProps = { movieId: string };
export type MovieDetailsProps = { movie: IMovie };
export type MoviesSimilarProps = {
  movieId: string;
};
