import LogoFull from "@/components/header/LogoFull";
import MobileNavCont from "@/components/header/MobileNavCont";

function HeaderMobile() {
  // Returned JSX
  return (
    <header className="fixed inset-0 bottom-auto px-6 pt-4 pb-10 z-20 flex justify-between items-center bg-header-gradient">
      <LogoFull />
      <MobileNavCont />
    </header>
  );
}

export default HeaderMobile;
