import { useEffect, useState } from "react";

import { AVATARS, NO_AVATAR } from "@/lib/assets";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { avatarImage } from "@/lib/types";
import { setUserData, useUser } from "@/redux/reducers/userReducer";

import {
  FormError,
  FormGroup,
  FormLabelError,
} from "@/components/Forms/FormElements";
import Button from "@/components/ui/Button";
import { auth, db } from "@/utils/firebase";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";

function FormAvatars() {
  // Getting the user data from redux store
  const { avatar } = useUser();

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

  // Returned JSX
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="text-3xl">Choose an avatar</div>
      {avatarError && <FormError>{avatarError}</FormError>}
      <div className="flex gap-2 flex-wrap max-w-[40rem]">
        {AVATARS.map((image) => {
          const imgSrc = (image as avatarImage).default;
          return (
            <div
              onClick={() => setCurrentAvatar(imgSrc)}
              className="cursor-pointer"
            >
              <img src={imgSrc} key={imgSrc} width={76} height={76} />
            </div>
          );
        })}
      </div>
      <div className="mt-2 self-center">
        <Button
          onClick={() => setCurrentAvatar(NO_AVATAR)}
          disabled={isSubmitting}
        >
          <span>REMOVE AVATAR</span>
        </Button>
      </div>
    </div>
  );
}

export default FormAvatars;
