import { ResultsTwoColumnsProps } from "@/lib/types";
import { ISearchedMedia } from "@/lib/typesAPI";

import ResultPreview from "@/features/ResultPreview";

function ResultsTwoColumns({ media, type }: ResultsTwoColumnsProps) {
  // Returned JSX
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-x-24 gap-y-12 w-full md:w-3/4 lg:w-full xl:w-5/6 xxl:w-3/4">
      {media.map((media) => (
        <ResultPreview
          media={media as ISearchedMedia}
          key={media.id}
          type={type}
        />
      ))}
    </div>
  );
}

export default ResultsTwoColumns;
