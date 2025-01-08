import { useRef } from "react";

import ButtonsPreviewWrapper from "@/components/previews/ButtonsPreviewWrapper";
import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { RibbonProps } from "@/lib/types";

function Ribbon({ length, children, isScrollByOne }: RibbonProps) {
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Returned JSX
  return (
    <div className="relative">
      <ButtonsPreviewWrapper
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
