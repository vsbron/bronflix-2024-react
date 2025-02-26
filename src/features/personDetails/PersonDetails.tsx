import { useState } from "react";
import { useDispatch } from "react-redux";

import { GENDERS } from "@/lib/constants";
import { PersonDetailsProps } from "@/lib/types";
import { updateUserData, useUser } from "@/redux/reducers/userReducer";
import { FormatTextBlock } from "@/utils/FormatTextBlock";
import { formatDate, getMediaImages } from "@/utils/helpers";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

function PersonDetails({ person }: PersonDetailsProps) {
  // Getting user data from Redux store
  const { uid, likedPeople } = useUser();

  // Getting the navigate and dispatch functions
  const dispatch = useDispatch<any>();

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

  // Checking if person already in the favorites list
  const isLiked = likedPeople.some((p) => p.id === person.id);

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
  const addToFavoritesHandler = async () => {
    try {
      // Checking whether we need to add or remove person from the list
      const updatedList = isLiked
        ? likedPeople.filter((storedPerson) => storedPerson.id !== person.id)
        : [
            ...likedPeople,
            {
              id: person.id,
              name: person.name,
              profile_path: person.profile_path,
            },
          ];

      // Update the liked people list in the state and firebase
      dispatch(updateUserData({ updatedData: { likedPeople: updatedList } }));
    } catch (e: unknown) {
      console.error(e);
    }
  };

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
              <span>{isLiked ? "Remove from" : "Add to"} Favorites</span>
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
