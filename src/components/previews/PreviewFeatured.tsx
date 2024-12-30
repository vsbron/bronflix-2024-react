import PreviewImage from "./PreviewImage";

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
      className="block basis-72 h-[27rem] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
    >
      <PreviewImage media={movie} type={"movies"}>
        {movie.id === chosenMovieId && (
          <div className="absolute inset-0 border-4 border-red-900 pointer-events-none animate-fadeInForwards rounded-lg" />
        )}
      </PreviewImage>
    </div>
  );
}

export default PreviewFeatured;
