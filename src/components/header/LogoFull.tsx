import { Link } from "react-router-dom";

import logoFull from "@/assets/bronflix-logo-full.svg";
import { SITE_NAME } from "@/lib/constants";

function LogoFull() {
  // Returned JSX
  return (
    <Link to="/">
      <img
        src={logoFull}
        width="158"
        height="40"
        alt={SITE_NAME}
        title={`${SITE_NAME} logo`}
      />
    </Link>
  );
}

export default LogoFull;
