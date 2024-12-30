import { Link } from "react-router-dom";

import PreviewImage from "@/components/previews/PreviewImage";
import { IBase } from "@/lib/typesAPI";
import { PreparedPreviewsProps } from "@/lib/types";

export function PreparePreviews<T extends IBase>({
  rawPreviews,
  pages,
  height,
  type,
}: PreparedPreviewsProps<T>) {
  // Calculating how many elements we need to display on the page
  const elementsPerPage = Math.ceil(rawPreviews.length / pages);

  // Returned JSX
  return (
    <>
      {Array.from({ length: pages }).map((_, i) => {
        // Getting the start and end indexes for the previews set
        const start = i * elementsPerPage;
        const end = start + elementsPerPage;

        // Prepare each set
        return (
          <div className="flex gap-6 w-full flex-shrink-0">
            {rawPreviews.slice(start, end).map((media: T) => (
              <Link
                key={media.id}
                to={`/${type === "tv" ? "shows" : type}/${media.id}`}
                className={`block flex-1 ${height} rounded-lg overflow-hidden relative cursor-pointer`}
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
