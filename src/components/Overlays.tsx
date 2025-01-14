import {
  BlackGradientToRightProps,
  BlackGradientToTopProps,
} from "@/lib/types";

export function DimOverlay() {
  // Returned JSX
  return (
    <div className="absolute inset-0 bg-stone-950/85 backdrop-blur-[1px]" />
  );
}

export function BlackGradientToTop({ height }: BlackGradientToTopProps) {
  // Returned JSX
  return (
    <div
      className="absolute left-0 right-0 bottom-0 bg-featured-gradient-2"
      style={{ height }}
    />
  );
}

export function BlackGradientToRight({ width }: BlackGradientToRightProps) {
  // Returned JSX
  return (
    <div
      className="absolute top-0 bottom-0 left-0 w-2/5 bg-featured-gradient-1"
      style={{ width }}
    />
  );
}
