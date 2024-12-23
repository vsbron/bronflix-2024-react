import logo from "@/assets/bronflix-logo.png";
import { Link } from "react-router-dom";

function Logo() {
  // Returned JSX
  return (
    <Link to="/">
      <img
        src={logo}
        width="35"
        height="50"
        alt="BroNflix"
        title="BroNflix logo"
      />
    </Link>
  );
}

export default Logo;
