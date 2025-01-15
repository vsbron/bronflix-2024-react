import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { IPerson } from "@/lib/typesAPI";

import Heading from "@/components/ui/Heading";
import { formatDate } from "@/utils/helpers";

function PersonDetails({ person }: { person: IPerson }) {
  // Handling the actor data
  const birthday = new Date(person.birthday).toString();

  // Returned JSX
  return (
    <div>
      <Heading>{person.name}</Heading>
      <div className="grid grid-cols-[3fr_2fr] gap-12">
        <div className="flex flex-col gap-10">
          <div className={`flex ${PREVIEWS_GAP_CLASS}`}>
            <img
              src={`${MEDIA_IMG_URL}w300${person.profile_path}`}
              className="rounded-lg"
            />
            <div className="flex flex-col justify-end">
              <div>Name: {person.name}</div>
              <div>Gender: {person.gender}</div>
              <div>Birthday: {formatDate(birthday)}</div>
              <div>Place of Birth: {person.place_of_birth}</div>
            </div>
          </div>
          <div>
            <Heading as="h3">Biography</Heading>
            <div>{person.biography}</div>
          </div>
          <div>
            <Heading as="h3">Notable work</Heading>
            <div></div>
          </div>
        </div>
        <div className="border-l-[1px] border-stone-700 px-12">
          <h2 className="mt-0 uppercase">Filmography</h2>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
