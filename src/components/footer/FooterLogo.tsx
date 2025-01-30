import logo from "@/assets/bronflix-logo.svg";
import { SITE_NAME } from "@/lib/constants";

function FooterLogo() {
  // Returned JSX
  return (
    <img
      src={logo}
      width="360"
      height="525"
      alt={SITE_NAME}
      title={`${SITE_NAME} logo`}
      className="absolute right-36 -bottom-36 opacity-35 -rotate-12 -z-10"
    />
  );
}

export default FooterLogo;
