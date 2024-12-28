import { scoreColor } from "@/utils/helpers";

function ScorePreview({ score }: { score: number }) {
  // Getting the colors for the score
  const { bgColor, color } = scoreColor(score);

  return (
    <div
      className={`absolute z-20 top-3 left-3 rounded-lg text-[1.4rem] font-medium leading-none px-2 py-1 ${bgColor} ${color}`}
    >
      {score.toFixed(2)}
    </div>
  );
}

export default ScorePreview;
