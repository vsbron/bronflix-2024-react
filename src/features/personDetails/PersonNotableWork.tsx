import {
  EXCLUDED_GENRE_IDS,
  NOTABLE_POPULARITY_LIMIT,
  NOTABLE_SCORE_LAST,
  NOTABLE_SCORE_LIMIT,
  NOTABLE_SCORE_SECONDARY,
  NOTABLE_WORK_LIMIT,
} from "@/lib/constants";
import { PersonNotableWorkProps } from "@/lib/types";
import { IMediaCredit } from "@/lib/typesAPI";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";

function PersonNotableWork({ credits, personName }: PersonNotableWorkProps) {
  // Filtering out the notable work
  const filterNotableWork = (credits: IMediaCredit[], scoreLimit: number) => {
    return credits.reduce<any[]>((acc, media) => {
      // Creating filtering boolean based on whether media has genres we need, a role for Person (not playing himself), is popular and above rating we set
      const isNotable =
        media.genre_ids!.length > 0 &&
        !media.genre_ids!.some((id) => EXCLUDED_GENRE_IDS.includes(id)) &&
        (media.character || media.job) &&
        media.character !== personName &&
        media.character !== "Self" &&
        media.popularity > NOTABLE_POPULARITY_LIMIT &&
        media.vote_average >= scoreLimit;

      // Checking if media is unique
      const isUnique = !acc.some((m) => m.id === media.id);

      // If it's unique and passes condition, add it to an array
      if (isNotable && isUnique) acc.push(media);

      // Return the array
      return acc;
    }, []);
  };

  // Primary filtering
  let notableWork = filterNotableWork(credits, NOTABLE_SCORE_LIMIT);

  // Fallback to secondary filtering if empty
  if (notableWork.length <= 3) {
    notableWork = filterNotableWork(credits, NOTABLE_SCORE_SECONDARY);
  }

  // Fallback to last filtering if empty
  if (notableWork.length <= 5) {
    notableWork = filterNotableWork(credits, NOTABLE_SCORE_LAST);
  }

  // Sort and slice to get the final result
  notableWork = notableWork
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, NOTABLE_WORK_LIMIT);

  // Guard clause
  if (notableWork.length === 0) return;

  // Returned JSX
  return (
    <div>
      <Heading as="h3">Notable work</Heading>
      <Previews
        rawPreviews={notableWork}
        width="18rem"
        height="27rem"
        type="movies"
        merged={true}
      />
    </div>
  );
}

export default PersonNotableWork;
