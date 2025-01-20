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

  // Returned JSX
  return (
    <div className="border-l-[1px] border-main-color px-12">
      <h2 className="mt-0 uppercase">Filmography</h2>
      <div>
        {modifiedCast.map((media: IMediaCredit) => {
          const mediaName = media.title || media.name;
          const year = media.release_date || media.first_air_date;

          return (
            <div>
              {mediaName} ({new Date(year!).getFullYear() || "TBA"})
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonFilmography;
