import { useState } from "react";

import { GENDERS } from "@/lib/constants";
import { PersonDetailsProps } from "@/lib/types";
import { FormatTextBlock } from "@/utils/FormatTextBlock";
import { formatDate, getMediaImages } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { useUser } from "@/redux/reducers/userReducer";

function PersonDetails({ person }: PersonDetailsProps) {
  // Getting user data from Redux store
  const { uid, likedPeople } = useUser();

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

  // Getting images paths
  const { posterPath } = getMediaImages(person, "person");

  // Handling the person data
  const formattedBirthday = formatDate(birthday);
  const formattedDeathday = deathday ? formatDate(deathday) : null;

  // Formatting the biography
  const formattedBio = FormatTextBlock(biography);

  // Toggle bio handler
  function toggleBioHandler() {
    setIsBioExpanded((iE) => !iE);
  }

  // User lists buttons handlers
  const addToFavoritesHandler = () => {};

  // Returned JSX
  return (
    <>
      <div className={`flex gap-10`}>
        <img
          src={posterPath}
          className="rounded-lg w-[20rem]"
          alt={person.name}
          title={`${person.name} photo`}
        />
        <div className="flex flex-col justify-end items-start">
          <div className="text-[4rem] font-heading">{name}</div>
          <div>Gender: {GENDERS[gender]}</div>
          <div>Known for: {known_for_department}</div>
          <div>Birthday: {formattedBirthday}</div>
          {formattedDeathday && <div>Deathday: {formattedDeathday}</div>}
          <div className="mb-6">Place of Birth: {place_of_birth}</div>
          {uid && (
            <Button onClick={addToFavoritesHandler}>
              <span>Add to Favorites</span>
            </Button>
          )}
        </div>
      </div>
      {biography && (
        <div>
          <Heading as="h3">Biography</Heading>
          <div>
            <div className="mb-10">
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
