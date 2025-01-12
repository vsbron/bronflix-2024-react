import { PREVIEWS_GAP, SCROLL_BY_ONE_MULTIPLIER } from "@/lib/constants";
import { ButtonPreviewWrapperProps, RibbonDirections } from "@/lib/types";

import ButtonsPreview from "./ButtonsPreview";

function ButtonsPreviewWrapper({
  ribbon,
  length,
  isScrollByOne = false,
}: ButtonPreviewWrapperProps) {
  // Scroll handlers for the left/right arrows
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
      <ButtonsPreview dir="left" clickHandler={scrollType} />
      <ButtonsPreview dir="right" clickHandler={scrollType} />
    </div>
  );
}

export default ButtonsPreviewWrapper;
