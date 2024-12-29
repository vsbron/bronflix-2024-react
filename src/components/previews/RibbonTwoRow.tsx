import ButtonsPreviewWrapper from "@/components/previews/ButtonsPreviewWrapper";
import { RibbonProps } from "@/lib/types";

function RibbonTwoRow({ length, children, ribbon, cellWidth }: RibbonProps) {
  // Calculating the number of columns and setting the class for the grid
  const columns = length / 2;
  const gridClass = `grid-cols-[repeat(${columns},${cellWidth})]`;

  // Returned JSX
  return (
    <div className="relative" style={{ width: "1815px" }}>
      <ButtonsPreviewWrapper ribbon={ribbon} length={length} />
      <div
        className={`grid ${gridClass} gap-6 w-full overflow-x-hidden`}
        ref={ribbon}
      >
        {children}
      </div>
    </div>
  );
}

export default RibbonTwoRow;
