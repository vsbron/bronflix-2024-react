import { IMediaCredit } from "@/lib/typesAPI";

function PersonFilmography({
  cast,
  crew,
}: {
  cast: IMediaCredit[];
  crew: IMediaCredit[];
}) {
  const modifiedCast = cast
    .map((media) => {
      return {
        ...media,
        date: media.release_date || media.first_air_date,
      };
    })
    .sort(
      (a: any, b: any) =>
        new Date(a.date).getFullYear() - new Date(b.date).getFullYear()
    );

  console.log(modifiedCast);

  // Returned JSX
  return (
    <div className="border-l-[1px] border-main-color px-12">
      <h2 className="mt-0 uppercase">Filmography</h2>
      <div className="flex flex-col gap-2">
        {modifiedCast.map((media: IMediaCredit) => {
          const mediaName = media.title || media.name;
          const year = media.release_date || media.first_air_date;

          return (
            <div
              className="flex justify-between relative text-2xl"
              key={media.id}
            >
              <div className="bg-stone-950 pr-2">
                {new Date(year!).getFullYear() || "TBA"}{" "}
                <span className="inline-block mx-2">·</span> {mediaName}
              </div>
              <div className="bg-stone-950 pl-2">
                {media.character || "TBA"}
              </div>
              <div className="absolute left-0 right-0 bottom-2 h-[1px] border-b border-dashed border-stone-600 -z-10"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonFilmography;
