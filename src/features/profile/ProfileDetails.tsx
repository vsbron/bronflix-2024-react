import { EnvelopeIcon, UserIcon, CakeIcon } from "@heroicons/react/24/outline";

import { ModalProvider } from "@/context/ModalContext";
import { AVATARS } from "@/lib/assetsAvatars";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { useUser } from "@/redux/reducers/userReducer";
import { formatDate } from "@/utils/helpers";

import IconWrapper from "@/components/IconWrapper";
import EditProfileForm from "@/components/Forms/EditProfileForm";
import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";
import FormAvatars from "@/components/Forms/FormAvatars";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

function ProfileDetails() {
  // Getting the user data from the Redux
  const { name, title, email, createdAt, gender, birthday, avatar } = useUser();

  // Getting the avatars from AVATARS array
  const selectedAvatarPng =
    AVATARS.find((storedAvatar) => storedAvatar.name === avatar)?.png || avatar;
  const selectedAvatarWebp =
    AVATARS.find((storedAvatar) => storedAvatar.name === avatar)?.webp ||
    avatar;

  // Returned JSX
  return (
    <section>
      <ModalProvider>
        <Heading>Profile</Heading>
        <div
          className={`grid grid-cols-[auto_1fr] ${BASE_GAP_CLASS} items-end`}
        >
          <ModalProvider.Trigger name="change-avatar">
            <div className="relative text-stone-50 text-4xl cursor-pointer group">
              <div className="absolute inset-0 bg-stone-950/60 flex justify-center items-center p-5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Change avatar
              </div>
              <picture>
                <source srcSet={selectedAvatarWebp} type="image/webp" />
                <img src={selectedAvatarPng} className="rounded-lg w-[25rem]" />
              </picture>
            </div>
          </ModalProvider.Trigger>
          <ModalProvider.Content name="change-avatar">
            <FormAvatars />
          </ModalProvider.Content>

          <div className="flex flex-col gap-2 items-start">
            <h2 className="m-0 text-6xl">{name}</h2>
            <div className="text-[2rem] italic text-stone-400">{title}</div>
            <div className="mt-1">
              <IconWrapper icon={<EnvelopeIcon />}>{email}</IconWrapper>
            </div>
            <div className="flex gap-8 text-2xl">
              <IconWrapper icon={<UserIcon />}>{gender}</IconWrapper>
              <IconWrapper icon={<CakeIcon />}>
                {birthday !== "Unknown"
                  ? formatDate(birthday as string)
                  : birthday}
              </IconWrapper>
            </div>
            <div className="text-2xl text-stone-400 italic mt-4">
              — Member since {formatDate(createdAt)}
            </div>
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
          </div>
        </div>
      </ModalProvider>
    </section>
  );
}

export default ProfileDetails;
