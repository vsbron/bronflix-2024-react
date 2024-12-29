import ButtonsPreview from "./ButtonsPreview";

import { ButtonPreviewWrapperProps, RibbonDirections } from "@/lib/types";

function ButtonsPreviewWrapper({
  ribbon,
  length,
  isScrollByOne = false,
}: ButtonPreviewWrapperProps) {
  // Scroll handler for the left/right arrows
  const scrollByOne = (direction: RibbonDirections) => {
    const step = ribbon.current?.scrollWidth! / length;
    if (ribbon.current) {
      ribbon.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  const scrollBySet = (direction: RibbonDirections) => {
    if (ribbon.current) {
      // Width of the visible previews (4 previews in this case)
      const visibleWidth = ribbon.current.offsetWidth;
      const scrollStep = visibleWidth; // Scroll by the width of the visible previews

      ribbon.current.scrollBy({
        left: direction === "left" ? -scrollStep : scrollStep,
        behavior: "smooth",
      });
    }
  };

  // Setting the scroll behavior
  const scrollFunction = isScrollByOne ? scrollByOne : scrollBySet;

  // Returned JSX
  return (
    <div className="absolute z-10 -top-5 left-[100%] -translate-x-full -translate-y-full flex gap-6 pl-16 pr-8 py-2 bg-buttons-wrapper-gradient">
      <ButtonsPreview dir="left" clickHandler={scrollFunction} />
      <ButtonsPreview dir="right" clickHandler={scrollFunction} />
    </div>
  );
}

export default ButtonsPreviewWrapper;
