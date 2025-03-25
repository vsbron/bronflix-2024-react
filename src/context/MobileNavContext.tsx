import { createContext, useContext, useState } from "react";

// Creating the context
const MobileNavContext = createContext({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  toggleMenu: () => {},
});

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  // Setting the state for opened/closed menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Creating the function to handle the state change
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Returned Provider
  return (
    <MobileNavContext.Provider
      value={{ isMenuOpen, openMenu, closeMenu, toggleMenu }}
    >
      {children}
    </MobileNavContext.Provider>
  );
}

// Custom hook for easier use
export function useMobileNav() {
  return useContext(MobileNavContext);
}
