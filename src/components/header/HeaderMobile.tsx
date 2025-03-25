import LogoFull from "@/components/header/LogoFull";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";

function HeaderMobile() {
  // Returned JSX
  return (
    <header className="fixed inset-0 bottom-auto px-6 pt-4 pb-10 z-20 flex justify-between items-center bg-header-gradient">
      <LogoFull />
      <Hamburger />
      <MobileNav />
    </header>
  );
}

export default HeaderMobile;
