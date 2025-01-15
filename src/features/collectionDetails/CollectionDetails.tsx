import { CollectionDetailsProps } from "@/lib/types";

import Heading from "@/components/Heading";
import MediaHero from "@/components/MediaHero";

function CollectionDetails({ collection }: CollectionDetailsProps) {
  // Returned JSX
  return (
    <section>
      <Heading>{collection.name}</Heading>
      <MediaHero media={collection} posterWidth="25rem">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-[4rem] -mb-2 font-heading">
            {collection.name}
          </div>
          <div className="max-w-[65rem] mb-6">{collection.overview}</div>
        </div>
      </MediaHero>
    </section>
  );
}

export default CollectionDetails;
