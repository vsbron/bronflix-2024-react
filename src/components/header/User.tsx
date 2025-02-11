import avatar from "@/assets/profile.png";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { signOut } from "@/redux/reducers/authReducer";

function User() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
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
      <Button onClick={handleSignOut}>
        <span>LOG OUT</span>
      </Button>
    </div>
  );
}

export default User;
