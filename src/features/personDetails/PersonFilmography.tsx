import { IMediaCredit } from "@/lib/typesAPI";
import { Link } from "react-router-dom";

function PersonFilmography({
  cast,
  crew,
}: {
  cast: IMediaCredit[];
  crew: IMediaCredit[];
}) {
  const modifiedCast = cast
    .slice() // Make a shallow copy to avoid mutating the original array
    .sort((a: IMediaCredit, b: IMediaCredit) => {
      const dateA = new Date(a.date!).getFullYear();
      const dateB = new Date(b.date!).getFullYear();

      if (isNaN(dateA)) return 1; // Place invalid or TBA dates at the end

      return dateA - dateB;
    })
    .reverse();

  // Returned JSX
  return (
    <div className="border-l-[1px] border-main-color px-12">
      <h2 className="mt-0 uppercase">Filmography</h2>
      <div className="flex flex-col gap-2">
        {modifiedCast.length !== 0 && (
          <div>
            <h3>Actor</h3>
            {modifiedCast.map((media: IMediaCredit) => {
              // Setting some constants
              const mediaName = media.title || media.name;
              const year = media.release_date || media.first_air_date;
              const type = media.type === "tv" ? "shows" : media.type;
              return (
                <div className="flex justify-between relative" key={media.id}>
                  <div className="bg-stone-950 pr-2 text-2xl">
                    {new Date(year!).getFullYear() || "TBA"}{" "}
                    <span className="inline-block mx-2">·</span>{" "}
                    <Link
                      to={`/${type}/${media.id}`}
                      className="text-red-300 hover:text-stone-50"
                    >
                      {mediaName}
                    </Link>
                  </div>
                  <div className="bg-stone-950 pl-2 text-[1.4rem]">
                    {media.character || "TBA"}
                  </div>
                  <div className="absolute left-0 right-0 bottom-2 h-[1px] border-b border-dashed border-stone-600 -z-10"></div>
                </div>
              );
            })}
          </div>
        )}

        {crew.length !== 0 && (
          <div>
            <h3>Production</h3>
            {crew.map((media: IMediaCredit) => {
              // Setting some constants
              const mediaName = media.title || media.name;
              const year = media.release_date || media.first_air_date;
              const type = media.type === "tv" ? "shows" : media.type;
              return (
                <div className="flex justify-between relative" key={media.id}>
                  <div className="bg-stone-950 pr-2 text-2xl">
                    {new Date(year!).getFullYear() || "TBA"}{" "}
                    <span className="inline-block mx-2">·</span>{" "}
                    <Link
                      to={`/${type}/${media.id}`}
                      className="text-red-300 hover:text-stone-50"
                    >
                      {mediaName}
                    </Link>
                  </div>
                  <div className="bg-stone-950 pl-2 text-[1.4rem]">
                    {media.job || "TBA"}
                  </div>
                  <div className="absolute left-0 right-0 bottom-2 h-[1px] border-b border-dashed border-stone-600 -z-10"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonFilmography;
