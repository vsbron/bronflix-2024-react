import { useEffect, useRef, useState } from "react";

import MovieHighlight from "./MovieHighlight";
import { GenresProvider } from "@/context/GenresContext";
import { VideoProvider } from "@/context/VideoContext";

import PreviewFeatured from "@/components/previews/PreviewFeatured";
import {
  HOME_MOVIE_CHANGE_INTERVAL,
  PREVIEWS_GAP_CLASS,
} from "@/lib/constants";
import { MoviesFeaturedProps } from "@/lib/types";
import { IMovieList } from "@/lib/typesAPI";
import ButtonsPreviewWrapper from "@/components/previews/ButtonsPreviewWrapper";

function MoviesFeatured({ movies }: MoviesFeaturedProps) {
  // Setting the state for the chosen movie and ref for ribbon element
  const [chosenMovie, setChosenMovie] = useState<IMovieList>(movies[0]);
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Use Effect that changes the chosen movie overtime
  useEffect(() => {
    const interval = setInterval(() => {
      setChosenMovie((prevMovie) => {
        const currentIndex = movies.findIndex(
          (movie) => movie.id === prevMovie.id
        );
        const nextIndex = (currentIndex + 1) % movies.length;
        scrollToMovie(movies[nextIndex]);
        return movies[nextIndex];
      });
    }, HOME_MOVIE_CHANGE_INTERVAL);

    // Cleanup function
    return () => clearInterval(interval);
  }, [movies, chosenMovie]);

  // Click handler to change the movie
  const handleClick = (movie: IMovieList) => {
    setChosenMovie(movie);
    scrollToMovie(movie);
  };

  // Scroll the ribbon to make the chosen movie visible
  const scrollToMovie = (movie: IMovieList) => {
    const movieIndex = movies.findIndex((m) => m.id === movie.id);
    const movieElement = ribbonRef.current?.children[movieIndex] as HTMLElement;

    if (movieElement && ribbonRef.current) {
      const containerWidth = ribbonRef.current.offsetWidth;
      const moviePosition = movieElement.offsetLeft;
      const movieWidth = movieElement.offsetWidth;

      // Check if the movie is out of the view to the left
      if (moviePosition < ribbonRef.current.scrollLeft) {
        ribbonRef.current.scrollTo({
          left: moviePosition,
          behavior: "smooth",
        });
      }
      // Check if the movie is out of the view to the right
      else if (
        moviePosition + movieWidth >
        ribbonRef.current.scrollLeft + containerWidth
      ) {
        ribbonRef.current.scrollTo({
          left: moviePosition + movieWidth - containerWidth,
          behavior: "smooth",
        });
      }
    }
  };

  // Returned JSX
  return (
    <div className="relative">
      <GenresProvider>
        <VideoProvider>
          <MovieHighlight movie={chosenMovie} />
        </VideoProvider>
      </GenresProvider>
      <div className="relative">
        <ButtonsPreviewWrapper
          ribbon={ribbonRef}
          length={movies.length}
          isScrollByOne={true}
        />
        <div
          className={`flex ${PREVIEWS_GAP_CLASS} w-full overflow-x-hidden`}
          ref={ribbonRef}
        >
          {movies.map((movie: IMovieList) => (
            <PreviewFeatured
              movie={movie}
              chosenMovieId={chosenMovie.id}
              clickHandler={handleClick}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesFeatured;
