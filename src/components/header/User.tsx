import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

import { signOutUser } from "@/redux/reducers/authReducer";
import { auth } from "@/utils/firebase";

import Button from "@/components/ui/Button";
import avatar from "@/assets/profile.png";

function User() {
  // Getting the dispatch and navigate functions
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sign Out handler (clears session, state and redirect to index)
  const handleSignOut = () => {
    signOut(auth);
    dispatch(signOutUser());
    navigate("/");
  };

  // Returned JSX
  return (
    <div className="flex gap-6 items-center">
      <img
        src={avatar}
        className="rounded-full"
        width={50}
        height={50}
        alt="BroN"
        title="BroN avatar"
      />
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
