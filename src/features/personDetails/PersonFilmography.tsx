import { Link } from "react-router-dom";

import { PersonFilmographyProps } from "@/lib/types";
import { IMediaCredit } from "@/lib/typesAPI";

function PersonFilmography({ cast, crew }: PersonFilmographyProps) {
  // Helper function that sorts the credits array
  const processCredits = (credits: IMediaCredit[]) =>
    credits
      .slice()
      .sort((a, b) => {
        const dateA = new Date(a.date!).getFullYear();
        const dateB = new Date(b.date!).getFullYear();

        if (isNaN(dateA)) return 1; // Place invalid or TBA dates at the end

        return dateA - dateB;
      })
      .reverse();

  // Helper function that combines multiple roles/jobs under one movie/show
  const groupCredits = (credits: IMediaCredit[]) => {
    const grouped = credits.reduce((acc, media) => {
      const year = new Date(media.date!).getFullYear();
      const key = `${year}-${media.title || media.name}`;
      const role = media.job || media.character || "TBA";

      if (!acc[key]) {
        acc[key] = {
          year,
          title: media.title || media.name,
          type: media.type === "tv" ? "shows" : media.type,
          roles: [role],
          id: media.id,
        };
      } else {
        acc[key].roles.push(role);
      }

      return acc;
    }, {} as Record<string, any>);

    return Object.values(grouped);
  };

  // Helper function that spreads the data to an HTML
  const renderCredits = (credits: any[], sectionTitle: string) => {
    if (credits.length === 0) return null;

    return (
      <div>
        <h3 className="mt-4">{sectionTitle}</h3>
        {credits.map((media) => {
          const roles = media.roles.join(", ");
          return (
            <div
              className="flex justify-between relative flex-wrap"
              key={media.id}
            >
              <div className="bg-stone-950 pr-2 text-2xl whitespace-nowrap">
                {media.year || "TBA"}{" "}
                <span className="inline-block mx-2">·</span>{" "}
                <Link
                  to={`/${media.type}/${media.id}`}
                  className="text-red-300 hover:text-stone-50 whitespace-nowrap"
                >
                  {media.title}
                </Link>
              </div>
              <div className="bg-stone-950 pl-2 text-[1.4rem] whitespace-nowrap ml-auto">
                {roles}
              </div>
              <div className="absolute left-0 right-0 bottom-2 h-[1px] border-b border-dashed border-stone-600 -z-10"></div>
            </div>
          );
        })}
      </div>
    );
  };

  // Preparing the credits
  const modifiedCast = groupCredits(processCredits(cast));
  const modifiedCrew = groupCredits(processCredits(crew));

  // Returned JSX
  return (
    <div className="border-l-[1px] border-main-color px-12">
      <h2 className="mt-0 uppercase">Filmography</h2>
      <div className="flex flex-col gap-2">
        {renderCredits(modifiedCast, "Actor")}
        {renderCredits(modifiedCrew, "Production")}
      </div>
    </div>
  );
}

export default PersonFilmography;
