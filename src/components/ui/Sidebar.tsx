import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Sidebar() {
  // Setting the state for hovering effect
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Returned JSX
  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 py-5 px-8 flex flex-col z-30 transition-all duration-300 ${
        isHovered ? "w-[15rem]" : "w-[7.5rem]"
      } bg-gradient-to-r from-stone-950 via-stone-950 to-transparent`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
