import { Link } from "react-router-dom";

import { MEDIA_IMG_URL } from "@/lib/constants";
import { MovieCollectionLinkProps } from "@/lib/types";

import { BlackGradientToTop } from "@/components/ui/Overlays";

function MovieCollectionLink({ collection }: MovieCollectionLinkProps) {
  // Returned JSX
  return (
    <div className="absolute bottom-8 right-8 z-20">
      <div className="text-xl mb-2 text-center">
        Check out the related movies from
      </div>
      <Link
        to={`/movies/collection/${collection.id}`}
        style={{
          backgroundImage: `url(${MEDIA_IMG_URL}/w400/${collection.backdrop_path})`,
        }}
        className="min-w-[25rem] relative bg-center bg-cover bg-no-repeat rounded-xl flex justify-center overflow-hidden hover:scale-95 transition-transform border-red-900 border-2"
      >
        <BlackGradientToTop height="50%" />
        <div className="relative z-10 px-8 pb-4 pt-52">
          <h4 className="text-[2rem] font-medium">{collection.name}</h4>
        </div>
      </Link>
    </div>
  );
}

export default MovieCollectionLink;
