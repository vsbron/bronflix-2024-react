import { ReactNode, RefObject } from "react";
import {
  IBase,
  ICollection,
  IEpisode,
  IGenre,
  IMediaCredit,
  IMovie,
  IMovieList,
  IPerson,
  IShow,
  SearchedMedia,
  SearchedMediaSmall,
  SearchResultsObjSmall,
} from "./typesAPI";
import { z } from "zod";
import { contactFormSchema, signInFormSchema } from "./formSchemas";

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
export type ModalContentProps = {
  children: ReactNode;
  name: string;
  alternative?: boolean;
};
export type ModalContextProps = {
  activeModal: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
};
export type ModalProviderProps = { children: ReactNode };
export type ModalTriggerProps = { children: ReactNode; name: string };

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
export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  isActive?: boolean;
  type?: "submit" | "reset";
  disabled?: boolean;
};
export type ContentWallProps = { children: ReactNode };
export type FooterHeadingProps = { children: string };
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type SignInFormData = z.infer<typeof signInFormSchema>;
export type HeadingProps = { children: string; as?: Headings; id?: string };
export type NavItemProps = { icon: ReactNode; title: string };
export type SeparatorProps = { className?: string };
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
export type SeasonDetailsProps = { seasonNumber: string };
export type SeasonEpisodeProps = { episode: IEpisode };

// Search
export type SearchBriefResultsProps = {
  clearSearch: () => void;
  results: SearchResultsObjSmall;
  inputText: string;
};
export type SearchPaginationProps = {
  page: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
};
export type SearchPreviewProps = { media: SearchedMedia };
export type SearchPreviewSmallProps = { media: SearchedMediaSmall };
export type SearchResultsListProps = { query: string };
export type SearchSmallArrowProps = { children: string; dir: "left" | "right" };
