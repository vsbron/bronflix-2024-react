import { useState } from "react";
import { Link } from "react-router-dom";

import { FILMOGRAPHY_LIMIT } from "@/lib/constants";
import { PersonFilmographyProps } from "@/lib/types";
import { IMediaCredit } from "@/lib/typesAPI";

import Button from "@/components/ui/Button";
import { BlackGradientToTop } from "@/components/ui/Overlays";

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
      const role = media.job || media.character;

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
  const renderCredits = (credits: IMediaCredit[], sectionTitle: string) => {
    // Guard clause
    if (credits.length === 0) return null;

    return (
      <div>
        <h3 className="mt-4">{sectionTitle}</h3>
        {credits.map((media) => {
          // Destructuring and handling media data
          const { id, title, type, year, roles } = media;
          const combinedRoles = roles!.filter((role) => role !== "").join(", ");

          // Build credits list
          return (
            <div className="flex items-end relative" key={`${type}-${id}`}>
              <div className="bg-stone-950 pr-2 text-2xl flex">
                <div className="whitespace-nowrap">
                  {year || "TBA"}
                  <span className="inline-block mx-3">·</span>
                </div>
                <Link
                  to={`/${type}/${id}`}
                  className="text-red-300 hover:text-stone-50"
                >
                  {title}
                </Link>
              </div>
              <div className="bg-stone-950 pl-2 text-[1.4rem] ml-auto text-right">
                <span className="inline-block max-w-[40rem]">
                  {combinedRoles}
                </span>
              </div>
              <div className="absolute left-0 right-0 bottom-2 h-[1px] border-b border-dashed border-stone-600 -z-10" />
            </div>
          );
        })}
      </div>
    );
  };

  // Preparing the credits
  const modifiedCast = groupCredits(processCredits(cast));
  const modifiedCrew = groupCredits(processCredits(crew));

  // Checking if filmography is big
  const isBigFilmography =
    modifiedCast.length + modifiedCrew.length > FILMOGRAPHY_LIMIT;

  // Setting the state for the expanded filmography
  const [isExpanded, setIsExpanded] = useState<boolean>(!isBigFilmography);

  // Click handler
  const handleExpand = () => {
    setIsExpanded((iE) => !iE);
  };

  // Returned JSX
  return (
    <div className="border-l-[1px] border-main-color px-12">
      <h2 className="mt-0 uppercase">Filmography</h2>
      <div
        className={`flex flex-col gap-2 overflow-hidden relative ${
          isExpanded || !isBigFilmography ? "" : "h-[88rem]"
        }`}
      >
        {renderCredits(modifiedCast, "Actor")}
        {renderCredits(modifiedCrew, "Production")}
        {isBigFilmography && !isExpanded && (
          <BlackGradientToTop height="30rem" />
        )}
        {isBigFilmography && (
          <div
            className={`inset-0 top-auto z-10 flex justify-center mt-12 ${
              isExpanded ? "static" : "absolute"
            }`}
          >
            <Button onClick={handleExpand}>
              <span>{isExpanded ? "Hide" : "See"} full list</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonFilmography;
