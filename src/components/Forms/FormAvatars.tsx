import { useState } from "react";
import { useDispatch } from "react-redux";

import { NO_AVATAR_M, NO_AVATAR_F } from "@/lib/assets";
import { AVATARS } from "@/lib/assetsAvatars";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { AppDispatch } from "@/lib/typesRedux";
import { updateUserData, useUser } from "@/redux/reducers/userReducer";
import { auth } from "@/utils/firebase";

import Button from "@/components/ui/Button";
import { FormError } from "@/components/Forms/FormElements";

function FormAvatars() {
  // Getting the user data from redux store
  const { avatar, gender } = useUser();

  // Setting the state for the currently chosen avatar, submitting state and error
  const [currentAvatar, setCurrentAvatar] = useState<string>(avatar);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);

  // Getting the navigate and dispatch functions
  const dispatch = useDispatch<AppDispatch>();

  // Handler to update avatar in Redux and Firebase
  const updateAvatarHandler = async () => {
    // Enable submitting state
    setIsSubmitting(true);

    try {
      // Guard clause
      if (!auth.currentUser) {
        setAvatarError("No authenticated user found.");
        setIsSubmitting(false);
        return;
      }

      // Update the show watchlist in the state and firebase
      dispatch(updateUserData({ updatedData: { avatar: currentAvatar } }));
    } catch (e: unknown) {
      console.error(e);
      setAvatarError("Couldn't update the avatar due to unknown error");
    } finally {
      // Disabling submitting state
      setIsSubmitting(false);
    }
  };

  // Removing avatar handler (checks gender and assigns correct default avatar)
  const removeAvatarHandler = () => {
    // Set the new avatar
    const newAvatar = gender === "Female" ? NO_AVATAR_F : NO_AVATAR_M;

    // Update the state, redux and firestore
    setCurrentAvatar(newAvatar);
    dispatch(updateUserData({ updatedData: { avatar: newAvatar } }));
  };

  // Returned JSX
  return (
    <div className="flex flex-col items-start gap-3">
      <h3 className="mb-2 mt-0">Choose an avatar</h3>
      {avatarError && <FormError>{avatarError}</FormError>}
      <div className="flex md:gap-1 flex-wrap max-w-[41rem]">
        {AVATARS.map(({ name, png }) => {
          // Setting some values for img
          const imgSrc = png;
          const altText = `Avatar ${name}`;
          const isActive = imgSrc.includes(currentAvatar);

          // Returned image
          return (
            <div
              onClick={() => setCurrentAvatar(name)}
              className={`cursor-pointer border-[2px] w-[5.6rem] md:w-[7.6rem] overflow-hidden ${
                isActive ? "border-red-700" : "border-transparent"
              }`}
              key={name}
            >
              <img
                src={imgSrc}
                key={name}
                width={76}
                className="max-md:scale-110"
                alt={altText}
              />
            </div>
          );
        })}
      </div>
      <div className={`mt-2 self-center flex ${BASE_GAP_CLASS}`}>
        <Button onClick={removeAvatarHandler} disabled={isSubmitting}>
          <span>REMOVE AVATAR</span>
        </Button>
        <Button onClick={updateAvatarHandler} disabled={isSubmitting}>
          <span>SAVE AVATAR</span>
        </Button>
      </div>
    </div>
  );
}

export default FormAvatars;
