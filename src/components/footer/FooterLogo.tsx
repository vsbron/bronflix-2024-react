import logo from "@/assets/bronflix-logo-big.png";

function FooterLogo() {
  // Returned JSX
  return (
    <img
      src={logo}
      width="277"
      height="442"
      alt="BroNflix"
      title="BroNflix logo"
      className="absolute right-48 -bottom-20 opacity-35 -rotate-12"
    />
  );
}

export default FooterLogo;
