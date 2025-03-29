import { UserIcon } from "@heroicons/react/24/outline";

import { useResponsive } from "@/hooks/useResponsive";
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

  // Getting a number of media queries from custom hook
  const { isMD } = useResponsive();

  // Returned JSX
  return (
    <div className={"flex items-center gap-4"}>
      {/* The Score */}
      <div
        className={`flex justify-center items-center text-[1.2rem] md:text-[1.4rem] leading-[1.4rem] px-2 md:px-3 pt-1 md:pt-1.5 pb-0.5 md:pb-1 rounded-xl ${bgColor} ${color} ${
          count &&
          (isBig
            ? "text-[1.5rem] md:text-[1.75rem] leading-[2.25rem] px-3 md:px-4"
            : "text-2xl px-3.5 py-2")
        } ${
          !isHighlighted &&
          "absolute top-2 md:top-3 left-2 md:left-3 font-medium rounded-lg"
        }`}
      >
        {score > 0 ? adjustedScore : "Not Rated"}
      </div>

      {/* The Votes (if rated) */}
      {count ? (
        <span
          style={{ fontSize: isBig ? (isMD ? "1.4rem" : "1.6rem") : "1.4rem" }}
        >
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
