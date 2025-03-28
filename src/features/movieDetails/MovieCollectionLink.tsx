import { Link } from "react-router-dom";

import { NO_MOVIE_COVER } from "@/lib/assets";
import { MEDIA_IMG_URL } from "@/lib/constants";
import { MovieCollectionLinkProps } from "@/lib/types";

import { BlackGradientToTop } from "@/components/ui/Overlays";

function MovieCollectionLink({ collection }: MovieCollectionLinkProps) {
  // Setting the cover image for the collection link
  const coverImg = `url(${
    collection.backdrop_path
      ? `${MEDIA_IMG_URL}/w400/${collection.backdrop_path}`
      : `${NO_MOVIE_COVER}`
  }`;

  // Returned JSX
  return (
    <div className="absolute top-4 xxl:top-auto xxl:bottom-8 right-8 z-20">
      <div className="text-xl mb-2 text-center">
        Check out the related movies from
      </div>
      <Link
        to={`/movies/collection/${collection.id}`}
        style={{ backgroundImage: coverImg }}
        className="w-[20rem] xxl:w-auto min-w-0 xxl:min-w-[25rem] relative bg-center bg-cover bg-no-repeat rounded-xl flex justify-center overflow-hidden hover:scale-95 transition-transform border-red-900 border-2"
      >
        <BlackGradientToTop height="50%" />
        <div className="relative z-10 px-5 xxl:px-8 pb-0 pt-[4.5rem] xxl:pb-4 xxl:pt-52">
          <h4 className="text-center text-[1.6rem] xxl:text-[2rem] leading-8 font-medium">
            {collection.name}
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default MovieCollectionLink;
