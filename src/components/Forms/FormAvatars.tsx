import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { doc, getDoc, updateDoc } from "@firebase/firestore";

import { AVATARS, NO_AVATAR_M, NO_AVATAR_F } from "@/lib/assets";
import { setUserData, useUser } from "@/redux/reducers/userReducer";
import { auth, db } from "@/utils/firebase";

import { FormError } from "@/components/Forms/FormElements";
import Button from "@/components/ui/Button";

function FormAvatars() {
  // Getting the user data from redux store
  const { avatar, gender } = useUser();

  // Setting the state for the currently chosen avatar, submitting state and error
  const [currentAvatar, setCurrentAvatar] = useState<string>(avatar);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);

  // Getting the navigate and dispatch functions
  const dispatch = useDispatch();

  // Use effect that updates the Redux each time new avatar is chosen
  useEffect(() => {
    const updateAvatar = async () => {
      // Enable submitting state
      setIsSubmitting(true);

      try {
        // Guard clause
        if (!auth.currentUser) {
          setAvatarError("No authenticated user found.");
          setIsSubmitting(false);
          return;
        }

        // Getting the current user data
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);

        // Guard clause
        if (!userSnap.exists()) {
          setAvatarError("Cannot find user to update");
          setIsSubmitting(false);
        }
        const currentUserData = userSnap.data();

        // Setting updated fields
        const updatedUser = {
          ...currentUserData,
          avatar: currentAvatar,
        };

        // Updating the doc in firebase and updating the state with new user data
        await updateDoc(doc(db, "users", auth.currentUser.uid), updatedUser);
        dispatch(setUserData(updatedUser));
      } catch (e: unknown) {
        console.error(e);
        setAvatarError("Couldn't update the avatar due to unknown error");
      } finally {
        // Disabling submitting state
        setIsSubmitting(false);
      }
    };

    updateAvatar();
  }, [currentAvatar]);

  // Removing avatar handler (checks gender and assigns correct default avatar)
  const removeAvatarHandler = () => {
    setCurrentAvatar(gender === "Female" ? NO_AVATAR_F : NO_AVATAR_M);
  };

  // Returned JSX
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="text-[1.8rem]">Choose an avatar</div>
      {avatarError && <FormError>{avatarError}</FormError>}
      <div className="flex gap-1 flex-wrap max-w-[41rem]">
        {AVATARS.map(({ name, image }) => {
          // Setting some values for img
          const imgSrc = image.default;
          const altText = `Avatar ${name}`;
          const isActive = imgSrc === currentAvatar;

          // Returned image
          return (
            <div
              onClick={() => setCurrentAvatar(name)}
              className={`cursor-pointer border-[2px] ${
                isActive ? "border-red-700" : "border-transparent"
              }`}
            >
              <img src={imgSrc} key={name} width={76} alt={altText} />
            </div>
          );
        })}
      </div>
      <div className="mt-2 self-center">
        <Button onClick={removeAvatarHandler} disabled={isSubmitting}>
          <span>REMOVE AVATAR</span>
        </Button>
      </div>
    </div>
  );
}

export default FormAvatars;
