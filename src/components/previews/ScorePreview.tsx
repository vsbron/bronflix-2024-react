import { ScorePreviewProps } from "@/lib/types";
import { scoreColor } from "@/utils/helpers";

function ScorePreview({ score, isHighlighted = false }: ScorePreviewProps) {
  const adjustedScore = score.toFixed(1);
  // Getting the colors for the score
  const { bgColor, color } = scoreColor(parseFloat(adjustedScore));

  // Returned JSX
  return (
    <div
      className={`flex justify-center items-center leading-[1.4rem] px-3 pt-1.5 pb-1 rounded-xl ${bgColor} ${color} ${
        isHighlighted
          ? "text-2xl px-3.5 py-2"
          : "absolute z-20 top-3 left-3 text-[1.4rem] font-medium rounded-lg"
      }`}
    >
      {adjustedScore}
    </div>
  );
}

export default ScorePreview;
