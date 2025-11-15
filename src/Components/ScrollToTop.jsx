import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state?.showBanner) {
        const bannerSection = document.getElementById("banner");
        if (bannerSection) {
          bannerSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (state?.scrollTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0 });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.key]);

  return null;
}

