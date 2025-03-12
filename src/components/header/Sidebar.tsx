import { useState } from "react";

import Logo from "@/components/header/Logo";
import Nav from "@/components/header/Nav";

function Sidebar() {
  // Setting the state for hovering effect
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Returned JSX
  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 py-5 px-8 flex flex-col z-30 transition-all duration-200 w-[7.5rem] ${
        isHovered ? "sidebar--expanded" : ""
      }`}
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-black) 40%, transparent)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
