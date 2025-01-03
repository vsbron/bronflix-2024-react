import { Link } from "react-router-dom";

import PreviewImage from "@/components/previews/PreviewImage";
import { IBase } from "@/lib/typesAPI";
import { PreparedPreviewsProps } from "@/lib/types";
import { PREVIEWS_GAP_CLASS } from "@/lib/constants";

export function PreparePreviews<T extends IBase>({
  rawPreviews,
  pages,
  height,
  type,
  isTwoRows,
}: PreparedPreviewsProps<T>) {
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
    <>
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
                className={`block text-stone-50 flex-1 ${height}`}
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
    </>
  );
}
