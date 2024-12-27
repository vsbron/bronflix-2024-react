import { useEffect, useRef, useState } from "react";

import MovieHighlight from "./MovieHighlight";

import { GenresProvider } from "@/context/GenresContext";
import { HOME_MOVIE_CHANGE_INTERVAL, MOVIES_IMG_URL } from "@/lib/constants";
import { IMovieList, MoviesFeaturedProps } from "@/lib/types";

function MoviesFeatured({ movies }: MoviesFeaturedProps) {
  // Setting the state for the chosen movie
  const [chosenMovie, setChosenMovie] = useState<IMovieList>(movies[0]);

  // Ref for the movie strip container
  const stripRef = useRef<HTMLDivElement>(null);

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

  // Scroll handler for the left/right arrows
  const moveStrip = (direction: "left" | "right") => {
    const step = stripRef.current?.scrollWidth! / movies.length;
    if (stripRef.current) {
      stripRef.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };
  // Scroll the strip to make the chosen movie visible
  const scrollToMovie = (movie: IMovieList) => {
    const movieIndex = movies.findIndex((m) => m.id === movie.id);
    const movieElement = stripRef.current?.children[movieIndex] as HTMLElement;

    if (movieElement && stripRef.current) {
      const containerWidth = stripRef.current.offsetWidth;
      const moviePosition = movieElement.offsetLeft;
      const movieWidth = movieElement.offsetWidth;

      // Check if the movie is out of the view to the left
      if (moviePosition < stripRef.current.scrollLeft) {
        stripRef.current.scrollTo({
          left: moviePosition,
          behavior: "smooth",
        });
      }
      // Check if the movie is out of the view to the right
      else if (
        moviePosition + movieWidth >
        stripRef.current.scrollLeft + containerWidth
      ) {
        stripRef.current.scrollTo({
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
        <MovieHighlight movie={chosenMovie} />
      </GenresProvider>
      <div className="relative">
        {/* Left arrow */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-8xl bg-black h-32 w-32 rounded-full"
          onClick={() => moveStrip("left")}
        >
          &lt;
        </button>

        {/* Right arrow */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-8xl bg-black h-32 w-32 rounded-full"
          onClick={() => moveStrip("right")}
        >
          &gt;
        </button>

        {/* Container with overflow hidden and horizontal scrolling */}
        <div className="w-full overflow-x-hidden">
          {/* Featured movies strip */}
          <div
            className="flex gap-6 h-[27rem] w-full overflow-x-hidden"
            ref={stripRef}
          >
            {movies.map((movie: IMovieList) => (
              <div
                key={movie.id}
                onClick={() => handleClick(movie)}
                className="block h-full basis-72 flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer"
              >
                {/* prettier-ignore */}
                <div
              style={{backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`}}
              className="h-full preview-bg" />
                {movie.id === chosenMovie.id && (
                  <div className="absolute inset-0 border-4 border-red-900 pointer-events-none animate-fadeInForwards" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesFeatured;
