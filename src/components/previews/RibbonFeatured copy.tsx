import { IMovieList } from "@/lib/types";
import { ReactNode, useRef } from "react";

function RibbonFeatured({
  length,
  children,
}: {
  length: number;
  children: ReactNode;
}) {
  // Ref for the movie strip container
  const stripRef = useRef<HTMLDivElement>(null);

  // Scroll handler for the left/right arrows
  const moveStrip = (direction: "left" | "right") => {
    const step = stripRef.current?.scrollWidth! / length;
    if (stripRef.current) {
      stripRef.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  // Returned JSX
  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-8xl bg-black h-32 w-32 rounded-full"
        onClick={() => moveStrip("left")}
      >
        &lt;
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-8xl bg-black h-32 w-32 rounded-full"
        onClick={() => moveStrip("right")}
      >
        &gt;
      </button>
      <div className="relative">
        {/* Container with overflow hidden and horizontal scrolling */}
        <div className="w-full overflow-x-hidden">
          {/* Featured movies strip */}
          <div className="flex gap-6 w-full overflow-x-hidden" ref={stripRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RibbonFeatured;
