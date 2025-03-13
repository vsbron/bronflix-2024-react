import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { BASE_GAP_CLASS } from "@/lib/constants";
import {
  PreviewGroupProps,
  PreviewItemProps,
  PreviewMergedProps,
  PreviewsProps,
} from "@/lib/types";
import { IBase } from "@/lib/typesAPI";

import ButtonsPreview from "@/components/previews/ButtonsPreview";
import PreviewImage from "@/components/previews/PreviewImage";

function Previews<T extends IBase>({
  rawPreviews,
  pages = 2,
  width,
  height,
  type,
  subtitle,
  isTwoRows,
  merged = false,
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
        className={`flex ${BASE_GAP_CLASS} w-full overflow-x-hidden`}
        ref={ribbonRef}
      >
        {/* If there's width provided, then we scroll by one, otherwise by set */}
        {!!width
          ? merged
            ? rawPreviews.map((media: T) => (
                <PreviewMerged
                  key={media.id}
                  media={media}
                  type={type}
                  height={height}
                  width={width}
                />
              ))
            : rawPreviews.map((media: T) => (
                <PreviewItem
                  key={
                    subtitle !== "job" ? media.id : media.id + "-" + media.job
                  }
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
  const location = useLocation();
  const isPersonPath = location.pathname === "/profile";
  // Returned JSX
  return (
    <div
      className="block flex-shrink-0 rounded-lg overflow-x-hidden"
      style={{ flexBasis: width }}
    >
      <Link
        to={`/${type === "tv" ? "shows" : type}/${media.id}`}
        className="block"
        style={{ height: height }}
      >
        <PreviewImage media={media} type={type} hud={!isPersonPath} />
      </Link>
      {subtitle && (
        <div className="text-stone-400 text-center mt-4 text-[1.5rem] px-1 py-3 leading-tight border-red-900 border-t">
          {(media[subtitle] as string) || media.roles?.at(0)?.character || ""}
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
  // Returned JSX
  return (
    <div className={`${BASE_GAP_CLASS} w-full flex flex-shrink-0 flex-wrap`}>
      {previews.map((media) => (
        <Link
          key={media.id}
          to={`/${
            type === "tv"
              ? "shows"
              : type === "collection"
              ? "movies/collection"
              : type
          }/${media.id}`}
          className="block text-stone-50 flex-1"
          style={{ flexBasis, height: height }}
        >
          <PreviewImage media={media} type={type} />
        </Link>
      ))}
    </div>
  );
}

function PreviewMerged<T extends IBase>({
  media,
  height,
  width,
}: PreviewMergedProps<T>) {
  const location = useLocation();
  const isPersonPath = location.pathname === "/profile";

  // Returned JSX
  return (
    <div
      className="block flex-shrink-0 rounded-lg overflow-x-hidden"
      style={{ flexBasis: width }}
    >
      <Link
        to={`/${media.type === "tv" ? "shows" : media.type}/${media.id}`}
        className="block"
        style={{ height }}
      >
        <PreviewImage
          media={media}
          type={media.type!}
          posters={true}
          hud={!isPersonPath}
        />
      </Link>
    </div>
  );
}
