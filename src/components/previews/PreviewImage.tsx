import ScorePreview from "./ScorePreview";

import { MOVIES_IMG_URL } from "@/lib/constants";
import { PreviewImageProps } from "@/lib/types";
import { IBase } from "@/lib/typesAPI";

function PreviewImage({ media, type }: PreviewImageProps) {
  // Getting the correct image element
  const previewImg: keyof IBase =
    type === "actors"
      ? "profile_path"
      : type === "tv"
      ? "backdrop_path"
      : "poster_path";
  const imagePath = media[previewImg];

  // Getting correct classes for name element
  const getPreviewClassNames = (type: string) =>
    type === "tv"
      ? "text-[2.2rem] px-6 pb-3 pt-10"
      : "text-[2rem] px-3 pb-2 pt-20";

  // Returned JSX
  return (
    <div
      style={{
        backgroundImage: `url(${MOVIES_IMG_URL}w500${imagePath})`,
      }}
      className="rounded-lg h-full flex items-end preview-bg"
    >
      {media.name && (
        <div
          className={`bg-preview w-full font-heading font-light ${getPreviewClassNames(
            type
          )}`}
        >
          <h4>{media.name}</h4>
        </div>
      )}
      {media.vote_average && <ScorePreview score={media.vote_average} />}
    </div>
  );
}

export default PreviewImage;
