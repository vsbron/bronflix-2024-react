import { useState } from "react";

import Hamburger from "@/components/header/Hamburger";
import MobileNav from "@/components/header/MobileNav";

function MobileNavCont() {
  // Setting the state for the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Returned JSX
  return (
    <div>
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default MobileNavCont;
