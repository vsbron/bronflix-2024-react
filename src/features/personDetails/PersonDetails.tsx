import { useState } from "react";

import {
  BIO_PREVIEW_LENGTH,
  GENDERS,
  MEDIA_IMG_URL,
  PREVIEWS_GAP_CLASS,
} from "@/lib/constants";
import { IPerson } from "@/lib/typesAPI";
import { formatDate, getTextPreview } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

function PersonDetails({ person }: { person: IPerson }) {
  // Destructuring data
  const {
    name,
    gender,
    birthday,
    deathday,
    place_of_birth,
    biography,
    known_for_department,
  } = person;

  // Setting the state for expanded biography text
  const [isBioExpanded, setIsBioExpanded] = useState<boolean>(false);

  // Handling the person data
  const formattedBirthday = formatDate(birthday);
  const formattedDeathday = deathday ? formatDate(deathday) : null;

  // Toggle bio handler
  function toggleBioHandler() {
    setIsBioExpanded((iE) => !iE);
  }

  // Returned JSX
  return (
    <>
      <div className={`flex ${PREVIEWS_GAP_CLASS}`}>
        <img
          src={`${MEDIA_IMG_URL}w400${person.profile_path}`}
          className="rounded-lg w-[20rem]"
        />
        <div className="flex flex-col justify-end">
          <div className="text-[4rem] font-heading">{name}</div>
          <div>Gender: {GENDERS[gender]}</div>
          <div>Known for: {known_for_department}</div>
          <div>Birthday: {formattedBirthday}</div>
          {formattedDeathday && <div>Deathday: {formattedDeathday}</div>}
          <div>Place of Birth: {place_of_birth}</div>
        </div>
      </div>
      <div>
        <Heading as="h3">Biography</Heading>
        <div>
          <div className="mb-4">
            {isBioExpanded
              ? biography
              : getTextPreview(biography, BIO_PREVIEW_LENGTH)}
          </div>
          <Button onClick={toggleBioHandler}>
            <span>Read {isBioExpanded ? "Less" : "More"}</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default PersonDetails;
