import { MovieRibbonDirections } from "@/lib/types";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

function ButtonsPreview({ ribbon, length }: any) {
  // Scroll handler for the left/right arrows
  const moveRibbon = (direction: MovieRibbonDirections) => {
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
      <button
        className="cursor-pointer w-16"
        onClick={() => moveRibbon("left")}
      >
        <ChevronLeftIcon />
      </button>

      <button
        className="cursor-pointer w-16"
        onClick={() => moveRibbon("right")}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default ButtonsPreview;
