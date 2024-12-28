import ButtonsPreview from "@/components/previews/ButtonsPreview";
import { RibbonProps } from "@/lib/types";

function Ribbon({ length, children, ribbon }: RibbonProps) {
  // Returned JSX
  return (
    <div className="relative">
      <ButtonsPreview ribbon={ribbon} length={length} />
      <div className="relative">
        {/* Container with overflow hidden and horizontal scrolling */}
        <div className="w-full overflow-x-hidden">
          {/* Featured movies ribbon */}
          <div className="flex gap-6 w-full overflow-x-hidden" ref={ribbon}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ribbon;
