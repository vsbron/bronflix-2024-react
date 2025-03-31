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
      <MediaHero media={collection} small={true}>
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-[2.5rem] xs:text-[3rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.2] font-heading">{name}</div>
          <div className="max-w-[65rem] mb-6 text-[1.5rem] lg:text-[1.6rem]">{overview}</div>
        </div>
      </MediaHero>
    </section>
  );
}

export default CollectionDetails;
