import {
  NOTABLE_POPULARITY_LIMIT,
  NOTABLE_SCORE_LIMIT,
  NOTABLE_WORK_LIMIT,
} from "@/lib/constants";
import { IMediaCredit } from "@/lib/typesAPI";

import Previews from "@/components/previews/Previews";
import Heading from "@/components/ui/Heading";

function PersonNotableWork({ credits }: { credits: IMediaCredit[] }) {
  // Filtering out the notable work
  const notableWork = credits
    .filter(
      (movie: IMediaCredit) =>
        movie.popularity > NOTABLE_POPULARITY_LIMIT &&
        movie.vote_average >= NOTABLE_SCORE_LIMIT
    )
    .sort((a, b) => b.vote_average - a.vote_average)
    .filter(
      (movie: IMediaCredit, i: number, self: IMediaCredit[]) =>
        i === self.findIndex((m: IMediaCredit) => m.id === movie.id)
    )
    .slice(0, NOTABLE_WORK_LIMIT);

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
