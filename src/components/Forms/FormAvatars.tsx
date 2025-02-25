import { useEffect, useState } from "react";

import { AVATARS, NO_AVATAR } from "@/lib/assets";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { avatarImage } from "@/lib/types";

import { FormGroup, FormLabelError } from "@/components/Forms/FormElements";
import { useUser } from "@/redux/reducers/userReducer";
import Button from "../ui/Button";

function FormAvatars() {
  // Getting the user data from redux store
  const { avatar } = useUser();

  // Setting the state for the currently chosen avatar
  const [currentAvatar, setCurrentAvatar] = useState<string>(avatar);

  useEffect(() => {}, [currentAvatar]);

  // Returned JSX
  return (
    <FormGroup>
      <FormLabelError name="Avatars" />
      <div className={`flex ${BASE_GAP_CLASS} flex-col items-center`}>
        <div className="flex gap-2 flex-wrap max-w-[35rem]">
          {AVATARS.map((image) => {
            const imgSrc = (image as avatarImage).default;
            return (
              <img
                src={imgSrc}
                key={imgSrc}
                width={83}
                height={83}
                onClick={() => setCurrentAvatar(imgSrc)}
              />
            );
          })}
        </div>
        <Button onClick={() => setCurrentAvatar(NO_AVATAR)}>
          <span>REMOVE AVATAR</span>
        </Button>
      </div>
    </FormGroup>
  );
}

export default FormAvatars;
