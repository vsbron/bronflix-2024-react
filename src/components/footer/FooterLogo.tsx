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
      className="hidden lg:block w-[22rem] xs:w-[30rem] sm:w-[60rem] xl:w-[36rem] absolute -right-5 xs:right-0 sm-right-16 lg:-right-12 xl:right-36 top-52 xs:top-0 sm:top-[50%] sm:-translate-y-1/2 opacity-15 xl:opacity-35 -rotate-12 -z-10"
    />
  );
}

export default FooterLogo;
