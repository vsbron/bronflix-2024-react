import { useRef } from "react";

import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { RibbonProps } from "@/lib/types";

import ButtonsPreview from "@/components/previews/ButtonsPreview";

function Ribbon({ length, children, isScrollByOne }: RibbonProps) {
  // Setting the ref for the ribbon
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Returned JSX
  return (
    <div className="relative">
      <ButtonsPreview
        ribbon={ribbonRef}
        length={length}
        isScrollByOne={isScrollByOne}
      />
      <div
        className={`flex ${PREVIEWS_GAP_CLASS} w-full overflow-x-hidden`}
        ref={ribbonRef}
      >
        {children}
      </div>
    </div>
  );
}

export default Ribbon;
