import { useRef } from "react";
import { Link } from "react-router-dom";

import { MOVIES_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { PreviewImageProps, PreviewsProps } from "@/lib/types";
import { IBase } from "@/lib/typesAPI";

import ButtonsPreviewWrapper from "./ButtonsPreviewWrapper";
import ScorePreview from "./ScorePreview";

function Previews<T extends IBase>({
  rawPreviews,
  pages = 2,
  width,
  height,
  type,
  subtitle,
  isTwoRows,
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
      {/* Scroll Buttons */}
      <ButtonsPreviewWrapper
        ribbon={ribbonRef}
        length={length || rawPreviews.length}
        isScrollByOne={!!width}
      />

      {/* Ribbon */}
      <div
        className={`flex ${PREVIEWS_GAP_CLASS} w-full overflow-x-hidden`}
        ref={ribbonRef}
      >
        {/* If there's width provided, then we scroll by one, otherwise by set */}
        {!!width
          ? rawPreviews.map((media: T) => (
              <PreviewItem
                key={media.id}
                media={media}
                type={type}
                height={height}
                width={width!}
                subtitle={subtitle}
              />
            ))
          : Array.from({ length: pages }).map((_, i) => {
              // Calculating the number of previews in a set
              const start = i * elementsPerPage;
              const end = start + elementsPerPage;
              const previews = rawPreviews.slice(start, end);

              return (
                <PreviewGroup
                  key={i}
                  previews={previews}
                  type={type}
                  flexBasis={isTwoRows ? flexBasis : undefined}
                  height={height}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Previews;

//////////////////////////////////
// Item and group previews layouts

function PreviewItem<T extends IBase>({
  media,
  type,
  height,
  width,
  subtitle,
}: {
  media: T;
  type: string;
  height: string;
  width: string;
  subtitle?: keyof T;
}) {
  return (
    <div
      className="block  flex-shrink-0 rounded-lg overflow-x-hidden"
      style={{ flexBasis: width }}
    >
      <Link
        to={`/${type === "tv" ? "shows" : type}/${media.id}`}
        className={`h-[${height}] block`}
      >
        <PreviewImage media={media} type={type} />
      </Link>
      {subtitle && (
        <div className="text-stone-400 text-center mt-4 text-[1.5rem] px-1 py-3 leading-tight border-red-900 border-t">
          {media[subtitle] as string}
        </div>
      )}
    </div>
  );
}

function PreviewGroup<T extends IBase>({
  previews,
  type,
  flexBasis,
  height,
}: {
  previews: T[];
  type: string;
  flexBasis?: string;
  height: string;
}) {
  return (
    <div
      className={`${PREVIEWS_GAP_CLASS} w-full flex flex-shrink-0 flex-wrap`}
    >
      {previews.map((media) => (
        <Link
          key={media.id}
          to={`/${type === "tv" ? "shows" : type}/${media.id}`}
          className={`block text-stone-50 flex-1 h-[${height}]`}
          style={{ flexBasis }}
        >
          <PreviewImage media={media} type={type} />
        </Link>
      ))}
    </div>
  );
}

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
