import { useMobileNav } from "@/context/MobileNavContext";

function Hamburger() {
  // Getting the Mobile Nav state from the Context
  const { isMenuOpen, toggleMenu } = useMobileNav();

  // Returned JSX
  return (
    <div
      onClick={toggleMenu}
      className={`cursor-pointer w-16 h-[2.25rem] relative  transition-all ${
        isMenuOpen ? "rotate-90 top-[.5px]" : "-top-[2px]"
      }`}
    >
      <span
        className={`hamburger-line ${
          isMenuOpen ? "top-1/2 rotate-45" : "top-0"
        }`}
      ></span>
      <span
        className={`hamburger-line top-1/2 ${
          isMenuOpen ? "opacity-0" : "opacity-1"
        }`}
      ></span>
      <span
        className={`hamburger-line ${
          isMenuOpen ? "top-1/2 -rotate-45" : "top-full"
        }`}
      ></span>
    </div>
  );
}

export default Hamburger;
