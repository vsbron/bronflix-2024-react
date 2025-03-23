import { Link } from "react-router-dom";

import logoFull from "@/assets/bronflix-logo-full.svg";
import { SITE_NAME } from "@/lib/constants";

function LogoFull() {
  // Returned JSX
  return (
    <Link to="/">
      <img
        src={logoFull}
        width="197"
        height="50"
        alt={SITE_NAME}
        title={`${SITE_NAME} logo`}
      />
    </Link>
  );
}

export default LogoFull;
