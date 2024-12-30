import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Getting the pathname
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
