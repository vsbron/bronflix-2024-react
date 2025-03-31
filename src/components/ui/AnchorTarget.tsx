import { AnchorTargetProps } from "@/lib/types";

function AnchorTarget({ id }: AnchorTargetProps) {
  // Returned JSX
  return <div id={id} className="relative -top-28 md:-top-3"></div>;
}

export default AnchorTarget;
