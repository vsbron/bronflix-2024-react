import { useRef } from "react";
import { Link } from "react-router-dom";

import { NO_MOVIE_POSTER, NO_PERSON_PHOTO, NO_SHOW_COVER } from "@/lib/assets";
import { MOVIES_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import {
  PreviewGroupProps,
  PreviewImageProps,
  PreviewItemProps,
  PreviewsProps,
} from "@/lib/types";
import { IBase } from "@/lib/typesAPI";

import ScorePreview from "@/components/ScorePreview";
import ButtonsPreview from "@/components/previews/ButtonsPreview";

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
      <ButtonsPreview
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
}: PreviewItemProps<T>) {
  return (
    <div
      className="block  flex-shrink-0 rounded-lg overflow-x-hidden"
      style={{ flexBasis: width }}
    >
      <Link
        to={`/${type === "tv" ? "shows" : type}/${media.id}`}
        className="block"
        style={{ height: height }}
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
}: PreviewGroupProps<T>) {
  return (
    <div
      className={`${PREVIEWS_GAP_CLASS} w-full flex flex-shrink-0 flex-wrap`}
    >
      {previews.map((media) => (
        <Link
          key={media.id}
          to={`/${type === "tv" ? "shows" : type}/${media.id}`}
          className="block text-stone-50 flex-1"
          style={{ flexBasis, height: height }}
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
  const IMAGE_KEYS: Record<string, keyof IBase> = {
    actors: "profile_path",
    tv: "backdrop_path",
    movie: "poster_path",
  };

  const FALLBACK_IMAGES: Record<string, string> = {
    actors: NO_PERSON_PHOTO,
    tv: NO_SHOW_COVER,
    movie: NO_MOVIE_POSTER,
  };

  // Get the appropriate image key and fallback image
  const previewImg = IMAGE_KEYS[type] || "poster_path";
  const fallbackImg = FALLBACK_IMAGES[type] || NO_MOVIE_POSTER;

  // Build the final image path
  const imgPath = media[previewImg];
  const fullImgPath = `url(${
    imgPath ? MOVIES_IMG_URL + "w500" + imgPath : fallbackImg
  })`;

  // Getting correct classes for name element
  const getPreviewClassNames = (type: string) =>
    type === "tv"
      ? "text-[2.2rem] px-6 pb-3 pt-10"
      : "text-[2rem] px-3 pb-2 pt-20";

  // Returned JSX
  return (
    <div
      style={{
        backgroundImage: fullImgPath,
      }}
      className="rounded-lg h-full flex items-end preview-bg relative pt-3"
    >
      {children}
      {media.name && (
        <div
          className="bg-preview-gradient w-full text-[2rem] px-3 pb-2 pt-20"
          // prettier-ignore
          style={type === "tv" ? { fontSize: "2.2rem", padding: "2.5rem 1.5rem .75rem"} : {}}
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
