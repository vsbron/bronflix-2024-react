import { Link } from "react-router-dom";

import logo from "@/assets/bronflix-logo.svg";
import { SITE_NAME } from "@/lib/constants";

function Logo() {
  // Returned JSX
  return (
    <Link to="/">
      <img
        src={logo}
        width="35"
        height="50"
        alt={SITE_NAME}
        title={`${SITE_NAME} logo`}
      />
    </Link>
  );
}

export default Logo;
