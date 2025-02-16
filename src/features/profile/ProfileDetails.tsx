import { useUser } from "@/redux/reducers/userReducer";
import { formatDate } from "@/utils/helpers";

import Heading from "@/components/ui/Heading";
import { NO_AVATAR_PNG } from "@/lib/assets";
import { BASE_GAP_CLASS } from "@/lib/constants";

function ProfileDetails() {
  // Getting the user data from the Redux
  const { name, title, email, createdAt, avatar } = useUser();

  // Setting the avatar image source
  const avatarSrc = avatar || NO_AVATAR_PNG;

  // Returned JSX
  return (
    <section>
      <Heading>Profile</Heading>
      <div className={`grid grid-cols-[auto_1fr] ${BASE_GAP_CLASS} items-end`}>
        <img src={avatarSrc} className="rounded-lg" />
        <div className="grid grid-col gap-2">
          <h2 className="m-0">{name}</h2>
          {title && <div>{title}</div>}
          <div>{email}</div>
          <h5>Created at: {formatDate(createdAt)}</h5>
        </div>
      </div>
    </section>
  );
}

export default ProfileDetails;
