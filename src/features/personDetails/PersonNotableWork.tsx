import {
  NOTABLE_POPULARITY_LIMIT,
  NOTABLE_SCORE_LIMIT,
  NOTABLE_SCORE_SECONDARY,
  NOTABLE_WORK_LIMIT,
} from "@/lib/constants";
import { IMediaCredit } from "@/lib/typesAPI";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";

function PersonNotableWork({ credits }: { credits: IMediaCredit[] }) {
  // Filtering out the notable work
  const filterNotableWork = (credits: IMediaCredit[], scoreLimit: number) => {
    return credits.reduce<IMediaCredit[]>((acc, movie) => {
      const isNotable =
        movie.popularity > NOTABLE_POPULARITY_LIMIT &&
        movie.vote_average >= scoreLimit;

      const isUnique = !acc.some((m) => m.id === movie.id);

      if (isNotable && isUnique) acc.push(movie);

      return acc;
    }, []);
  };

  // Primary filtering
  let notableWork = filterNotableWork(credits, NOTABLE_SCORE_LIMIT);

  // Fallback to secondary filtering if empty
  if (notableWork.length === 0) {
    notableWork = filterNotableWork(credits, NOTABLE_SCORE_SECONDARY);
  }

  // Sort and slice to get the final result
  notableWork = notableWork
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, NOTABLE_WORK_LIMIT);

  // Returned JSX
  return (
    <>
      {notableWork.length !== 0 && (
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
      )}
    </>
  );
}

export default PersonNotableWork;
