import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      // If page opened from footer links
      if (state?.scrollTop) {
        const banner = document.getElementById("banners");
        banner?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // Default behaviour scroll top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [pathname, state]);

  return null;
}


