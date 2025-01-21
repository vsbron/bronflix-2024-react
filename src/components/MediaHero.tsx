import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { MediaHeroPros } from "@/lib/types";
import { getMediaImages } from "@/utils/helpers";

import { DimOverlay } from "@/components/ui/Overlays";

function MediaHero({ media, posterWidth, children }: MediaHeroPros) {
  // Getting images paths
  const { posterPath, backgroundImage } = getMediaImages({ media });

  // Returned JSX
  return (
    <div
      className={`flex items-stretch rounded-lg overflow-hidden ${PREVIEWS_GAP_CLASS}`}
    >
      <img
        src={posterPath}
        className="rounded-lg"
        style={{ width: posterWidth }}
        alt={media.title || media.name}
        title={`${media.title || media.name} poster`}
      />
      <div
        style={{ backgroundImage }}
        className="bg-no-repeat bg-cover bg-center basis-full relative flex flex-col justify-end px-10 py-8 rounded-lg"
      >
        <DimOverlay />
        {children}
      </div>
    </div>
  );
}

export default MediaHero;
