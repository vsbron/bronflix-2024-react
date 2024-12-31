import ButtonsPreviewWrapper from "@/components/previews/ButtonsPreviewWrapper";
import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { RibbonProps } from "@/lib/types";

function Ribbon({ length, children, ribbon, isScrollByOne }: RibbonProps) {
  // Returned JSX
  return (
    <div className="relative">
      <ButtonsPreviewWrapper
        ribbon={ribbon}
        length={length}
        isScrollByOne={isScrollByOne}
      />
      <div
        className={`flex ${PREVIEWS_GAP_CLASS} w-full overflow-x-hidden`}
        ref={ribbon}
      >
        {children}
      </div>
    </div>
  );
}

export default Ribbon;
