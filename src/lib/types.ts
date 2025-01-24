import { ReactNode, RefObject } from "react";
import {
  IBase,
  ICollection,
  IGenre,
  IMediaCredit,
  IMovie,
  IMovieList,
  IPerson,
  IShow,
} from "./typesAPI";

/* Unions */
type Headings = "h1" | "h2" | "h3";
type PreviewSubtitles = "character" | "job" | "department";
export type Media = "person" | "tv" | "movies";
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
export type ButtonPreviewProps = {
  ribbon: RefObject<HTMLDivElement>;
  length: number;
  isScrollByOne?: boolean;
};
export type ButtonPreviewArrowProps = {
  dir: RibbonDirections;
  clickHandler: any;
};
export type ErrorMediaProps = { type: string };
export type IconWrapperProps = {
  icon: ReactNode;
  children: ReactNode;
};
export type PreviewsProps<T> = {
  rawPreviews: T[];
  pages?: number;
  width?: string;
  height: string;
  type: Media;
  subtitle?: PreviewSubtitles;
  isTwoRows?: boolean;
  merged?: boolean;
};
export type PreviewItemProps<T> = {
  media: T;
  type: string;
  height: string;
  width: string;
  subtitle?: keyof T;
};
export type PreviewGroupProps<T> = {
  previews: T[];
  type: string;
  flexBasis?: string;
  height: string;
};
export type PreviewMergedProps<T> = {
  media: T;
  height: string;
  width: string;
  type: Media;
};
export type PreviewImageProps = {
  media: IBase;
  type: string;
  children?: ReactNode;
  posters?: boolean;
};
export type ScorePreviewProps = {
  score: number;
  count?: number;
  isHighlighted?: boolean;
  isBig?: boolean;
};

// UI
export type BlackGradientToTopProps = { height: string };
export type BlackGradientToRightProps = { width: string };
export type ButtonProps = { onClick?: () => void; children: ReactNode };
export type FooterHeadingProps = { children: string };
export type HeadingProps = { children: string; as?: Headings };
export type NavItemProps = { icon: ReactNode; title: string };
export type WrapperProps = { children: ReactNode; className?: string };

// Home page components
export type MoviesFeaturedProps = { movies: IMovieList[] };
export type MovieHighlightProps = { movie: IMovieList };

// General
export type MediaHeroPros = {
  media: IBase;
  posterWidth: string;
  children: ReactNode;
};
export type TrailerButtonProps = { video: string };

// Movie page
export type MovieCastCrewProps = { movieId: string };
export type MovieCollectionLinkProps = { collection: ICollection };
export type MovieDetailsProps = { movie: IMovie };
export type MoviesSimilarProps = {
  movieId: string;
};

// Movie collection page
export type CollectionDetailsProps = { collection: ICollection };
export type CollectionMoviesProps = { movies: IMovie[] };

// Person page
export type PersonDetailsProps = { person: IPerson };
export type PersonFilmographyProps = {
  cast: IMediaCredit[];
  crew: IMediaCredit[];
};
export type PersonNotableWorkProps = {
  credits: IMediaCredit[];
  personName: string;
};

// Show page
export type ShowCastCrewProps = { showId: string };
export type ShowDetailsProps = { show: IShow };
export type ShowSimilarProps = {
  showId: string;
};
