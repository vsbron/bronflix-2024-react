import { useState } from "react";

import { GENDERS, MEDIA_IMG_URL, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { IPerson } from "@/lib/typesAPI";
import { formatDate } from "@/utils/helpers";

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

  // Formatting the biography
  const formattedBio = biography
    .split("\n\n")
    .map((paragraph, i) => <p key={i}>{paragraph}</p>);

  // Toggle bio handler
  function toggleBioHandler() {
    setIsBioExpanded((iE) => !iE);
  }

  // Returned JSX
  return (
    <>
      <div className={`flex gap-10`}>
        <img
          src={`${MEDIA_IMG_URL}w400${person.profile_path}`}
          className="rounded-lg w-[20rem]"
          alt={person.name}
          title={`${person.name} photo`}
        />
        <div className="flex flex-col justify-end">
          <div className="text-[4rem] font-heading">{name}</div>
          <div>Gender: {GENDERS[gender]}</div>
          <div>Known for: {known_for_department}</div>
          <div>Birthday: {formattedBirthday}</div>
          {formattedDeathday && <div>Deathday: {formattedDeathday}</div>}
          {place_of_birth && <div>Place of Birth: {place_of_birth}</div>}
        </div>
      </div>
      {biography && (
        <div>
          <Heading as="h3">Biography</Heading>
          <div>
            <div className="mb-4">
              {isBioExpanded ? formattedBio : formattedBio[0]}
            </div>
            {formattedBio.length > 1 && (
              <Button onClick={toggleBioHandler}>
                <span>Read {isBioExpanded ? "Less" : "More"}</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PersonDetails;
