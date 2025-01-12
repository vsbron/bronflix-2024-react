import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { PREVIEWS_GAP, SCROLL_BY_ONE_MULTIPLIER } from "@/lib/constants";
import {
  ButtonPreviewProps,
  ButtonPreviewArrowProps,
  RibbonDirections,
} from "@/lib/types";

function ButtonsPreview({
  ribbon,
  length,
  isScrollByOne = false,
}: ButtonPreviewProps) {
  // Scroll handlers for the left/right directions
  const scrollByOne = (direction: RibbonDirections) => {
    const step = ribbon.current?.scrollWidth! / length; // Get the step distance (one preview)
    if (ribbon.current) {
      ribbon.current.scrollBy({
        left: (direction === "left" ? -step : step) * SCROLL_BY_ONE_MULTIPLIER,
        behavior: "smooth",
      });
    }
  };
  const scrollBySet = (direction: RibbonDirections) => {
    if (ribbon.current) {
      const ribbonWidth = ribbon.current.offsetWidth; // Get the step distance (one set)
      // Scroll by the width of the container + gap
      ribbon.current.scrollBy({
        left:
          direction === "left"
            ? -ribbonWidth - PREVIEWS_GAP
            : ribbonWidth + PREVIEWS_GAP,
        behavior: "smooth",
      });
    }
  };

  // Set the correct scroll behavior
  const scrollType = isScrollByOne ? scrollByOne : scrollBySet;

  // Returned JSX
  return (
    <div className="absolute z-10 -top-5 left-[100%] -translate-x-full -translate-y-full flex gap-6 pl-16 pr-8 py-2 bg-buttons-wrapper-gradient">
      <ButtonsPreviewArrow dir="left" clickHandler={scrollType} />
      <ButtonsPreviewArrow dir="right" clickHandler={scrollType} />
    </div>
  );
}

export default ButtonsPreview;

//////////////////
// Buttons Preview

function ButtonsPreviewArrow({ dir, clickHandler }: ButtonPreviewArrowProps) {
  // Returned JSX
  return (
    <button
      className="cursor-pointer w-16 hover:text-red-500 transition-colors duration-300"
      onClick={() => clickHandler(dir)}
    >
      {dir === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}
