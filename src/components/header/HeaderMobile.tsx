import LogoFull from "@/components/header/LogoFull";
import MobileNav from "@/components/header/MobileNav";

function HeaderMobile() {
  // Returned JSX
  return (
    <header className="fixed inset-0 bottom-auto px-6 pt-4 pb-10 z-20 flex justify-between bg-header-gradient">
      <LogoFull />
      <MobileNav />
    </header>
  );
}

export default HeaderMobile;
