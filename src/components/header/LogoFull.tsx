import { Link } from "react-router-dom";

import logoFull from "@/assets/bronflix-logo-full.svg";
import { useMobileNav } from "@/context/MobileNavContext";
import { SITE_NAME } from "@/lib/constants";

function LogoFull() {
  // Getting the close mobile nav function from the context
  const { closeMenu } = useMobileNav();

  // Returned JSX
  return (
    <Link to="/" onClick={closeMenu}>
      <img
        src={logoFull}
        width="138"
        height="35"
        alt={SITE_NAME}
        title={`${SITE_NAME} logo`}
      />
    </Link>
  );
}

export default LogoFull;
