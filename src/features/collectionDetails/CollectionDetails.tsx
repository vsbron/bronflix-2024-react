import { NO_MOVIE_COVER, NO_MOVIE_POSTER } from "@/lib/assets";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { ICollection } from "@/lib/typesAPI";

import Heading from "@/components/Heading";
import { DimOverlay } from "@/components/Overlays";

function CollectionDetails({ collection }: { collection: ICollection }) {
  // Building images paths
  const posterPath = collection.poster_path
    ? `${MOVIES_IMG_URL}w500${collection.poster_path}`
    : NO_MOVIE_POSTER;
  const coverPath = collection.backdrop_path
    ? `${MOVIES_IMG_URL}original${collection.backdrop_path}`
    : NO_MOVIE_COVER;

  return (
    <>
      <section>
        <Heading>{collection.name}</Heading>
        <div className="flex items-stretch rounded-lg overflow-hidden gap-8">
          <img src={posterPath} className="basis-96 rounded-lg w-[40rem]" />
          <div
            style={{ backgroundImage: `url(${coverPath})` }}
            className="bg-no-repeat bg-cover basis-full relative flex flex-col justify-end px-10 py-8 rounded-lg"
          >
            <DimOverlay />
            <div className="relative z-10 flex flex-col gap-3">
              <div className="text-[4rem] -my-5 font-heading">
                {collection.name}
              </div>

              <div className="max-w-[65rem] mb-6">{collection.overview}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CollectionDetails;
