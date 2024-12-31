import ButtonsPreviewWrapper from "@/components/previews/ButtonsPreviewWrapper";
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
      <div className={`flex gap-6 w-full overflow-x-hidden`} ref={ribbon}>
        {children}
      </div>
    </div>
  );
}

export default Ribbon;
