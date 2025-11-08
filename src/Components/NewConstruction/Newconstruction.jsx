import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import img1 from "../../New-construction-images/banner.png";
import img2 from "../../New-construction-images/banner2.png"; 
import img3 from "../../New-construction-images/banner3.png"; 
import Logo from "../../Home-page-images/Logo.jpg";

const Newconstruction = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);
  const location = useLocation();

  const slides = [img1, img2, img3 ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (activeSlide === slides.length - 1 && videoRef.current) {
      videoRef.current.play();
    }
  }, [activeSlide, slides.length]);

  // Determine if PRODUCTS should be active
  const isProductsActive =
    dropdownOpen ||
    location.pathname === "/newconstruction" ||
    location.pathname === "/repair" ||
    location.pathname === "/remover";

  return (
    <section>
      <header className="relative w-full h-[600px] overflow-hidden">
        {/* Background slides */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
  {slides.map((slide, i) => {
    const isActive = activeSlide === i; // ✅ define isActive here

    return (
      <img
        key={i}
        src={slide}
        alt={`slide-${i}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
    );
  })}

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />
</div>


        {/* Navbar */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1500px" }}>
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="#" className="shrink-0">
              <img className="h-12 md:h-16" src={Logo} alt="Dr. Fixit Ltd. Logo" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white font-medium bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-yellow-400 transition-colors duration-200 ${
                      isActive ? "text-yellow-400" : "text-white"
                    }`
                  }
                >
                  HOME
                </NavLink>
              </li>

              {/* PRODUCTS dropdown */}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`inline-flex items-center space-x-1 transition-colors duration-200 ${
                    isProductsActive ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-400`}
                >
                  <span>PRODUCTS</span>
                  <svg
                    className={`h-4 w-4 transform transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute bg-yellow-400 text-black mt-4 w-48 rounded-md shadow-lg py-2 z-50">
                    <NavLink
                      to="/newconstruction"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      New Construction
                    </NavLink>
                    <NavLink
                      to="/repair"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      Repair Construction
                    </NavLink>
                    <NavLink
                      to="/remover"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      Remover
                    </NavLink>
                  </div>
                )}
              </li>

              {/* Other links */}
              <li><Link to="#" className="hover:text-yellow-400">RESOURCE</Link></li>
              <li><Link to="#" className="hover:text-yellow-400">CERTIFICATE</Link></li>
              <li><Link to="#" className="hover:text-yellow-400">TEAM</Link></li>
              <li><Link to="#" className="hover:text-yellow-400">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <section>
        <div className=" py-[200px] text-5xl text-center  justify-center">
          <h1>Repair | Renovate New Construction </h1>

        </div>
      </section>
    </section>
  );
};

export default Newconstruction;
