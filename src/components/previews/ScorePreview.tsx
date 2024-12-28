import { ScorePreviewProps } from "@/lib/types";
import { scoreColor } from "@/utils/helpers";

function ScorePreview({ score, isHighlighted = false }: ScorePreviewProps) {
  // Getting the colors for the score
  const { bgColor, color } = scoreColor(score);

  // Returned JSX
  return (
    <div
      className={`leading-none px-3 py-1 rounded-xl ${bgColor} ${color} ${
        isHighlighted
          ? "text-2xl px-3.5 py-2"
          : "absolute z-20 top-3 left-3 text-[1.4rem] font-medium rounded-lg"
      }`}
    >
      {parseFloat(score.toFixed(1)) * 10}
    </div>
  );
}

export default ScorePreview;
