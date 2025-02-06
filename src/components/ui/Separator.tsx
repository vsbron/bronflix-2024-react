import { SeparatorProps } from "@/lib/types";

function Separator({ className }: SeparatorProps) {
  // Returned JSX
  return <div className={`h-[1px] bg-red-900 ${className}`} />;
}

export default Separator;
