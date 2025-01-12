import { Link } from "react-router-dom";

import { MOVIES_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { PreviewImageProps, PreviewsProps } from "@/lib/types";
import { IBase } from "@/lib/typesAPI";

import { useRef } from "react";
import ButtonsPreviewWrapper from "./ButtonsPreviewWrapper";
import ScorePreview from "./ScorePreview";

function Previews<T extends IBase>({
  rawPreviews,
  pages,
  height,
  type,
  isTwoRows,
  isScrollByOne,
}: PreviewsProps<T>) {
  // Setting the ref for the ribbon
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Calculating how many elements we need to display on the page
  const GAP = 15;
  const elementsPerPage = Math.ceil(rawPreviews.length / pages);
  const itemsPerRow = isTwoRows ? elementsPerPage / 2 : elementsPerPage;

  // Calculate dynamic flex-basis
  const flexBasis = `calc((100% - ${
    (itemsPerRow - 1) * GAP
  }px) / ${itemsPerRow})`;

  // Returned JSX
  return (
    <div className="relative">
      <ButtonsPreviewWrapper
        ribbon={ribbonRef}
        length={length}
        isScrollByOne={isScrollByOne}
      />
      <div
        className={`flex ${PREVIEWS_GAP_CLASS} w-full overflow-x-hidden`}
        ref={ribbonRef}
      >
        {Array.from({ length: pages }).map((_, i) => {
          // Getting the start and end indexes for the previews set
          const start = i * elementsPerPage;
          const end = start + elementsPerPage;

          // Prepare each set
          return (
            <div
              className={`${PREVIEWS_GAP_CLASS} w-full flex flex-shrink-0 flex-wrap`}
            >
              {rawPreviews.slice(start, end).map((media: T) => (
                <Link
                  key={media.id}
                  to={`/${type === "tv" ? "shows" : type}/${media.id}`}
                  className={`block text-stone-50 flex-1 h-[${height}]`}
                  style={{
                    flexBasis: isTwoRows ? flexBasis : "",
                  }}
                >
                  <PreviewImage media={media} type={type} />
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Previews;

//////////////////////////
// Image preview component

export function PreviewImage({ media, type, children }: PreviewImageProps) {
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
      className="rounded-lg h-full flex items-end preview-bg relative"
    >
      {children}
      {media.name && (
        <div
          className={`bg-preview-gradient w-full ${getPreviewClassNames(type)}`}
        >
          <h4>{media.name}</h4>
        </div>
      )}
      {media.vote_average !== undefined && (
        <ScorePreview score={media.vote_average} />
      )}
    </div>
  );
}
