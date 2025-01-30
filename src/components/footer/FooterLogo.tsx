import logo from "@/assets/bronflix-logo.svg";

function FooterLogo() {
  // Returned JSX
  return (
    <img
      src={logo}
      width="360"
      height="525"
      alt="BroNflix"
      title="BroNflix logo"
      className="absolute right-36 -bottom-36 opacity-35 -rotate-12 -z-10"
    />
  );
}

export default FooterLogo;
