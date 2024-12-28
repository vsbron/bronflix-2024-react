import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import { ButtonPreviewProps } from "@/lib/types";

function ButtonsPreview({ dir, clickHandler }: ButtonPreviewProps) {
  // Returned JSX
  return (
    <button
      className="cursor-pointer w-16 hover:text-red-500 transition-colors duration-300"
      onClick={() => clickHandler(dir)}
    >
      {dir === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}

export default ButtonsPreview;
