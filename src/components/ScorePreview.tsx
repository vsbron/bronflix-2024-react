import { UserIcon } from "@heroicons/react/24/outline";

import { ScorePreviewProps } from "@/lib/types";
import { scoreColor } from "@/utils/helpers";

import IconWrapper from "@/components/IconWrapper";

function ScorePreview({
  score = 0,
  count,
  isHighlighted = false,
  isBig = false,
}: ScorePreviewProps) {
  // Editing the score
  const adjustedScore = score.toFixed(1);

  // Getting the colors for the score
  const { bgColor, color } = scoreColor(parseFloat(adjustedScore));

  // Returned JSX
  return (
    <div className={"flex items-center gap-4"}>
      {/* The Score */}
      <div
        className={`flex justify-center items-center text-[1.4rem] leading-[1.4rem] px-3 pt-1.5 pb-1 rounded-xl ${bgColor} ${color} ${
          count &&
          (isBig
            ? "text-[1.75rem] leading-[2.25rem] px-4"
            : "text-2xl px-3.5 py-2")
        } ${!isHighlighted && "absolute top-3 left-3 font-medium rounded-lg"}`}
      >
        {score > 0 ? adjustedScore : "Not Rated"}
      </div>

      {/* The Votes (if rated) */}
      {count ? (
        <span style={{ fontSize: isBig ? "1.6rem" : "1.4rem" }}>
          <IconWrapper icon={<UserIcon />}>
            {(count! / 1000).toFixed(2)}K
          </IconWrapper>
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default ScorePreview;
