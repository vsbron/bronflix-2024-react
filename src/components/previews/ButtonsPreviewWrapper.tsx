import ButtonsPreview from "./ButtonsPreview";

import { ButtonPreviewWrapperProps, RibbonDirections } from "@/lib/types";

function ButtonsPreviewWrapper({ ribbon, length }: ButtonPreviewWrapperProps) {
  // Scroll handler for the left/right arrows
  const moveRibbon = (direction: RibbonDirections) => {
    const step = ribbon.current?.scrollWidth! / length;
    if (ribbon.current) {
      ribbon.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  // Returned JSX
  return (
    <div className="absolute z-10 -top-5 left-[100%] -translate-x-full -translate-y-full flex gap-6 pl-16 pr-8 py-2 bg-buttons-wrapper-gradient">
      <ButtonsPreview dir="left" clickHandler={moveRibbon} />
      <ButtonsPreview dir="right" clickHandler={moveRibbon} />
    </div>
  );
}

export default ButtonsPreviewWrapper;
