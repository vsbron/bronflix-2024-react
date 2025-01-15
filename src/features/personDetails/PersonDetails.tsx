import { MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { IPerson } from "@/lib/typesAPI";
import { formatDate } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";

function PersonDetails({ person }: { person: IPerson }) {
  // Handling the actor data
  const birthday = new Date(person.birthday).toString();

  // Returned JSX
  return (
    <>
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
    </>
  );
}

export default PersonDetails;
