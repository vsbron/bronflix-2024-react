import { EnvelopeIcon, UserIcon, CakeIcon } from "@heroicons/react/24/outline";

import { NO_AVATAR_PNG } from "@/lib/assets";
import { BASE_GAP_CLASS } from "@/lib/constants";
import { useUser } from "@/redux/reducers/userReducer";
import { formatDate } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";
import IconWrapper from "@/components/IconWrapper";
import Button from "@/components/ui/Button";

function ProfileDetails() {
  // Getting the user data from the Redux
  const { name, title, email, createdAt, avatar, gender, birthday } = useUser();

  // Setting the avatar image source
  const avatarSrc = avatar || NO_AVATAR_PNG;

  // Returned JSX
  return (
    <section>
      <Heading>Profile</Heading>
      <div className={`grid grid-cols-[auto_1fr] ${BASE_GAP_CLASS} items-end`}>
        <img src={avatarSrc} className="rounded-lg" />
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
          <div className="text-2xl text-stone-400 italic mt-3">
            — Member since {formatDate(createdAt)}
          </div>
          <div className={`flex ${BASE_GAP_CLASS}`}>
            <Button>
              <span>Edit Profile</span>
            </Button>
            <Button>
              <span>Update Password</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileDetails;
