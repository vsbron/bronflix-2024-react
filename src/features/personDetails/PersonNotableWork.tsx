import {
  EXCLUDED_GENRE_IDS,
  NOTABLE_POPULARITY_LIMIT,
  NOTABLE_SCORE_LAST,
  NOTABLE_SCORE_LIMIT,
  NOTABLE_SCORE_SECONDARY,
  NOTABLE_WORK_LIMIT,
} from "@/lib/constants";
import { PersonNotableWorkProps } from "@/lib/types";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";
import { IMediaCredit } from "@/lib/typesAPI";

function PersonNotableWork({ credits }: PersonNotableWorkProps) {
  // Filtering out the notable work
  const filterNotableWork = (credits: IMediaCredit[], scoreLimit: number) => {
    return credits.reduce<any[]>((acc, movie) => {
      const isNotable =
        movie.popularity > NOTABLE_POPULARITY_LIMIT &&
        movie.vote_average >= scoreLimit &&
        movie.character &&
        !movie.genre_ids!.some((id) => EXCLUDED_GENRE_IDS.includes(id));

      // Checking if media is unique
      const isUnique = !acc.some((m) => m.id === movie.id);

      // If it's unique and passes condition, add it to an array
      if (isNotable && isUnique) acc.push(movie);

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
