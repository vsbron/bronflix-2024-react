import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

import { NO_AVATAR_PNG, NO_AVATAR_WEBP } from "@/lib/assets";
import { clearUserData, useUser } from "@/redux/reducers/userReducer";
import { auth } from "@/utils/firebase";

import Button from "@/components/ui/Button";

function User() {
  // Getting the user name from the redux
  const { name } = useUser();

  // Getting the dispatch and navigate functions
  const dispatch = useDispatch();

  // Sign Out handler (signs out and redirects to main page)
  const handleSignOut = () => {
    signOut(auth);
    dispatch(clearUserData());
  };

  // Returned JSX
  return (
    <div className="flex gap-6 items-center">
      <picture>
        <source srcSet={NO_AVATAR_WEBP} type="image/webp" />
        <img
          src={NO_AVATAR_PNG}
          className="rounded-full"
          width={50}
          height={50}
          alt={name}
          title={`${name} avatar`}
        />
      </picture>
      <Button>
        <Link to="/profile">PROFILE</Link>
      </Button>
      <Button onClick={handleSignOut}>
        <span>LOG OUT</span>
      </Button>
    </div>
  );
}

export default User;
