import LogoFull from "./LogoFull";

function HeaderMobile() {
  // Returned JSX
  return (
    <header className="fixed inset-0 bottom-auto p-6 z-20 flex justify-between bg-black">
      <LogoFull />
    </header>
  );
}

export default HeaderMobile;
