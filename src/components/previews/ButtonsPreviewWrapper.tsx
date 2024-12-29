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
      // Get the width of the first item, including the gap
      const firstItem = ribbon.current.children[0] as HTMLElement;
      if (!firstItem) return;

      const itemWidth = firstItem.offsetWidth;
      const gapWidth = parseFloat(getComputedStyle(ribbon.current).gap || "0");

      // Calculate the number of items visible in the container
      const visibleWidth = ribbon.current.offsetWidth;
      const itemsPerSet = Math.floor(visibleWidth / (itemWidth + gapWidth));

      // Total scroll step for one set
      const scrollStep = itemsPerSet * (itemWidth + gapWidth);

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
