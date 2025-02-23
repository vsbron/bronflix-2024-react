import { EnvelopeIcon, UserIcon, CakeIcon } from "@heroicons/react/24/outline";

import { ModalProvider } from "@/context/ModalContext";
import { NO_AVATAR_PNG } from "@/lib/assets";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { useUser } from "@/redux/reducers/userReducer";
import { formatDate } from "@/utils/helpers";

import IconWrapper from "@/components/IconWrapper";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import EditProfileForm from "@/components/Forms/EditProfileForm";
import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";

function ProfileDetails() {
  // Getting the user data from the Redux
  const { name, title, email, createdAt, gender, birthday } = useUser();

  // Returned JSX
  return (
    <section>
      <Heading>Profile</Heading>
      <div className={`grid grid-cols-[auto_1fr] ${BASE_GAP_CLASS} items-end`}>
        <img src={NO_AVATAR_PNG} className="rounded-lg w-[25rem]" />
        <div className="flex flex-col gap-2 items-start">
          <h2 className="m-0 text-6xl">{name}</h2>
          <div className="text-[2rem] italic text-stone-400">{title}</div>
          <div className="mt-1">
            <IconWrapper icon={<EnvelopeIcon />}>{email}</IconWrapper>
          </div>
          <div className="flex gap-8 text-2xl">
            <IconWrapper icon={<UserIcon />}>{gender}</IconWrapper>
            <IconWrapper icon={<CakeIcon />}>
              {birthday !== "Unknown" ? formatDate(birthday) : birthday}
            </IconWrapper>
          </div>
          <div className="text-2xl text-stone-400 italic mt-4">
            — Member since {formatDate(createdAt)}
          </div>
          <ModalProvider>
            <div className={`flex ${BASE_GAP_CLASS}`}>
              <ModalProvider.Trigger name="edit-profile">
                <Button>
                  <span>Edit Profile</span>
                </Button>
              </ModalProvider.Trigger>
              <ModalProvider.Content name="edit-profile">
                <EditProfileForm />
              </ModalProvider.Content>
              <ModalProvider.Trigger name="change-password">
                <Button>
                  <span>Update Password</span>
                </Button>
              </ModalProvider.Trigger>
              <ModalProvider.Content name="change-password">
                <ChangePasswordForm />
              </ModalProvider.Content>
            </div>
          </ModalProvider>
        </div>
      </div>
    </section>
  );
}

export default ProfileDetails;
