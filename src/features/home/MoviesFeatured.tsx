import { useState } from "react";

import MovieHighlight from "./MovieHighlight";

import { MOVIES_IMG_URL } from "@/lib/constants";
import { IMovie, MoviesFeaturedProps } from "@/lib/types";

function MoviesFeatured({ movies }: MoviesFeaturedProps) {
  // Setting the state for the chosen movie
  const [chosenMovie, setChosenMovie] = useState<IMovie>(movies[0]);

  // Click handler to change the movie
  const handleClick = (movie: IMovie) => {
    setChosenMovie(movie);
  };

  // Returned JSX
  return (
    <div className="h-[80rem] relative">
      <MovieHighlight movie={chosenMovie} />

      {/* Featured movies strip */}
      <div className="flex gap-6 h-[25rem] w-full">
        {movies.map((movie: IMovie) => (
          <div
            key={movie.id}
            onClick={() => handleClick(movie)}
            className="block h-full basis-96 rounded-lg overflow-hidden relative cursor-pointer"
          >
            {/* prettier-ignore */}
            <div
              style={{backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`}}
              className="h-full preview-bg" />
            <div
              className={`absolute inset-0 border-4 border-red-900 pointer-events-none transition-opacity ${
                movie.id === chosenMovie.id ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesFeatured;
