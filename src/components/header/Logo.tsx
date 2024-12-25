import { Link } from "react-router-dom";

import logo from "@/assets/bronflix-logo.png";

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
