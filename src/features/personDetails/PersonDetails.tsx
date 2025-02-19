import { useState } from "react";
import { useDispatch } from "react-redux";
import { doc, getDoc, updateDoc } from "@firebase/firestore";

import { GENDERS } from "@/lib/constants";
import { PersonDetailsProps } from "@/lib/types";
import { setUserData, useUser } from "@/redux/reducers/userReducer";
import { FormatTextBlock } from "@/utils/FormatTextBlock";
import { auth, db } from "@/utils/firebase";
import { formatDate, getMediaImages } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

function PersonDetails({ person }: PersonDetailsProps) {
  // Getting user data from Redux store
  const { uid, likedPeople } = useUser();

  // Getting the navigate and dispatch functions
  const dispatch = useDispatch();

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
  const isLiked = likedPeople.includes(person.id);

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
      // Getting the current user data
      const userRef = doc(db, "users", auth!.currentUser!.uid);
      const userSnap = await getDoc(userRef);

      // Guard clause
      if (!userSnap.exists()) {
        console.error("Cannot find user data");
        return;
      }
      const currentUserData = userSnap.data();

      // Setting updated fields
      const updatedUser = {
        ...currentUserData,
        likedPeople: [...likedPeople, person.id],
      };

      // Updating the doc in firebase and updating the state with new user data
      await updateDoc(doc(db, "users", auth!.currentUser!.uid), updatedUser);
      dispatch(setUserData(updatedUser));
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
