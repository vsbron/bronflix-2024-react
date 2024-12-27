import { useState } from "react";

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
    <div className="h-[75rem] relative">
      <div
        style={{
          backgroundImage: `url(${MOVIES_IMG_URL}/original/${chosenMovie.backdrop_path})`,
        }}
        className="h-full bg-no-repeat bg-[70vw_auto] bg-[top_right]"
      ></div>

      <div className="flex gap-6 h-[25rem] col-span-full absolute bottom-0 left-0 w-full">
        {movies.map((movie: IMovie) => (
          <div
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`block h-full basis-96 rounded-lg relative cursor-pointer ${
              movie.id === chosenMovie.id ? "border-4 border-red-900 " : ""
            }`}
          >
            <div
              style={{
                backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
              }}
              className="h-full preview-bg"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesFeatured;
