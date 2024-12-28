import ScorePreview from "./ScorePreview";

import { MOVIES_IMG_URL } from "@/lib/constants";
import { PreviewFeaturedProps } from "@/lib/types";

function PreviewFeatured({
  movie,
  chosenMovieId,
  clickHandler,
}: PreviewFeaturedProps) {
  // Returned JSX
  return (
    <div
      key={movie.id}
      onClick={() => clickHandler(movie)}
      className="block basis-72 h-[27rem] flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer bg-featured-gradient-tl"
    >
      <div
        style={{
          backgroundImage: `url(${MOVIES_IMG_URL}w500${movie.poster_path})`,
        }}
        className="h-full preview-bg"
      />
      <ScorePreview score={movie.vote_average} />
      {movie.id === chosenMovieId && (
        <div className="absolute inset-0 border-4 border-red-900 pointer-events-none animate-fadeInForwards" />
      )}
    </div>
  );
}

export default PreviewFeatured;
