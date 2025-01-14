import { NO_MOVIE_COVER, NO_MOVIE_POSTER } from "@/lib/assets";
import { MEDIA_IMG_URL } from "@/lib/constants";
import { CollectionDetailsProps } from "@/lib/types";

import Heading from "@/components/Heading";
import { DimOverlay } from "@/components/Overlays";

function CollectionDetails({ collection }: CollectionDetailsProps) {
  // Building images paths
  const posterPath = collection.poster_path
    ? `${MEDIA_IMG_URL}w500${collection.poster_path}`
    : NO_MOVIE_POSTER;
  const backgroundImage = `url(${
    collection.backdrop_path
      ? `${MEDIA_IMG_URL}original${collection.backdrop_path}`
      : NO_MOVIE_COVER
  })`;

  // Returned JSX
  return (
    <>
      <section>
        <Heading>{collection.name}</Heading>
        <div className="flex items-stretch rounded-lg overflow-hidden gap-8">
          <img src={posterPath} className="rounded-lg w-[28rem]" />
          <div
            style={{ backgroundImage }}
            className="bg-no-repeat bg-cover bg-center basis-full relative flex flex-col justify-end px-10 py-8 rounded-lg"
          >
            <DimOverlay />
            <div className="relative z-10 flex flex-col gap-3">
              <div className="text-[4rem] -mb-2 font-heading">
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
