import Button from "@/components/Button";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { MovieCollectionLinkProps } from "@/lib/types";
import { Link } from "react-router-dom";

function MovieCollectionLink({ collection }: MovieCollectionLinkProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${MOVIES_IMG_URL}/original/${collection.backdrop_path})`,
      }}
      className="px-20 py-10 pt-20 bg-center bg-cover relative"
    >
      <div className="absolute inset-0 bg-stone-950/70"></div>
      <div className="relative z-10">
        <div className="text-3xl mb-1">This movie is part of the</div>
        <h4 className="text-[3.5rem] mb-8">{collection.name}</h4>
        <Button>
          <Link to="">LEARN MORE</Link>
        </Button>
      </div>
    </div>
  );
}

export default MovieCollectionLink;
