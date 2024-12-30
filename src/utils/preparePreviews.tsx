import { Link } from "react-router-dom";

import ScorePreview from "@/components/previews/ScorePreview";
import { MOVIES_IMG_URL } from "@/lib/constants";
import { IBase } from "@/lib/typesAPI";

const getPreviewClassNames = (type: string) =>
  type === "tv"
    ? "text-[2.2rem] px-6 pb-3 pt-10"
    : "text-[2rem] px-3 pb-2 pt-20";

export function preparePreviews<T extends IBase>({
  rawPreviews,
  pages,
  height,
  type,
}: {
  rawPreviews: T[];
  pages: number;
  height: string;
  type: "actors" | "tv" | "movies";
}) {
  // Calculating how many elements we need to display on the page
  const elementsPerPage = Math.ceil(rawPreviews.length / pages);

  // Getting the correct image element
  const previewImg: keyof IBase =
    type === "actors"
      ? "profile_path"
      : type === "tv"
      ? "backdrop_path"
      : "poster_path";

  // Returned JSX
  return (
    <>
      {Array.from({ length: pages }).map((_, i) => {
        // Getting the start and end indexes for the previews set
        const start = i * elementsPerPage;
        const end = start + elementsPerPage;

        // Prepare each set
        return (
          <div key={i} className="flex gap-6 w-full flex-shrink-0">
            {rawPreviews
              .slice(start, end)
              .map(({ id, name, vote_average, [previewImg]: imagePath }: T) => (
                <Link
                  to={`/${type}/${id}`}
                  key={id}
                  className={`block flex-1 ${height} rounded-lg overflow-hidden relative cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: `url(${MOVIES_IMG_URL}w500${imagePath})`,
                    }}
                    className="rounded-lg h-full flex items-end preview-bg"
                  >
                    {name && (
                      <div
                        className={`bg-preview w-full font-heading font-light ${getPreviewClassNames(
                          type
                        )}`}
                      >
                        <h4>{name}</h4>
                      </div>
                    )}
                    {vote_average && <ScorePreview score={vote_average} />}
                  </div>
                </Link>
              ))}
          </div>
        );
      })}
    </>
  );
}
