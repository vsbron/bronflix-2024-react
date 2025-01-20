import { CollectionDetailsProps } from "@/lib/types";

import MediaHero from "@/components/MediaHero";
import Heading from "@/components/ui/Heading";

function CollectionDetails({ collection }: CollectionDetailsProps) {
  // Destructuring collection's data
  const { name, overview } = collection;

  // Returned JSX
  return (
    <section>
      <Heading>{name}</Heading>
      <MediaHero media={collection} posterWidth="25rem">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-[4rem] -mb-2 font-heading">{name}</div>
          <div className="max-w-[65rem] mb-6">{overview}</div>
        </div>
      </MediaHero>
    </section>
  );
}

export default CollectionDetails;
