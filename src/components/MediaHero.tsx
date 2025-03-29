import { useResponsive } from "@/hooks/useResponsive";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { MediaHeroPros } from "@/lib/types";
import { getMediaImages } from "@/utils/helpers";

import { DimOverlay } from "@/components/ui/Overlays";

function MediaHero({ media, small = false, children }: MediaHeroPros) {
  // Getting images paths
  const { posterPath, backgroundImage } = getMediaImages(media);

  // Getting a number of media queries from custom hook
  const { isMD, isLG } = useResponsive();

  // Setting the widths for poster
  let basicWidth, smallWidth;
  switch (true) {
    case isMD:
      basicWidth = "25rem";
      smallWidth = "25rem";
      break;
    case isLG:
      basicWidth = "32rem";
      smallWidth = "25rem";
      break;
    default:
      basicWidth = "40rem";
      smallWidth = "25rem";
  }

  // Returned JSX
  return (
    <div
      className={`flex items-stretch rounded-lg overflow-hidden max-xl:gap-4 ${BASE_GAP_CLASS}`}
    >
      <img
        src={posterPath}
        className="rounded-lg"
        style={{ width: small ? smallWidth : basicWidth }}
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
