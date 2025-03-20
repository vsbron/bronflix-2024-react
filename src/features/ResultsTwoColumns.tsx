import SearchPreview from "@/features/search/SearchPreview";

function ResultsTwoColumns({ media }: any) {
  // Returned JSX
  return (
    <div className="grid grid-cols-2 gap-x-24 gap-y-12 w-3/4">
      {media.map((media: any) => (
        <SearchPreview media={media} key={media.id} />
      ))}
    </div>
  );
}

export default ResultsTwoColumns;
