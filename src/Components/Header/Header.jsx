import React, { useState, useRef, useEffect } from "react";
import { FaWater, FaShieldAlt } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import img1 from "../../Home-page-images/Banner.jpg";
import img2 from "../../Home-page-images/Banner.jpg";
import Logo from "../../Home-page-images/Logo.jpg";
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dealerModal, setDealerModal] = useState(false);
  const [dealerSuccess, setDealerSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);

  const slides = [img1, img2, "/assets/intro_video.mp4"];

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

  // Dealer Form Submission (mailto)
  const handleDealerSubmit = (e) => {
  e.preventDefault();
  const name = encodeURIComponent(e.target.dname?.value.trim() || "");
  const mobile = encodeURIComponent(e.target.dmobile?.value.trim() || "");
  const email = encodeURIComponent(e.target.demail?.value.trim() || "");
  const location = encodeURIComponent(e.target.dlocation?.value.trim() || "");

  let subject = encodeURIComponent("Dealer Request from Website");
  let body = `Hi, I would like to find Link dealer.%0AName: ${name}%0AMobile: ${mobile}%0A`;
  if (email) body += `Email: ${email}%0A`;
  if (location) body += `Location: ${location}%0A`;

  window.location.href = `mailto:webdeveloper2324@gmail.com?subject=${subject}&body=${body}`;

  setDealerSuccess(true);
  setTimeout(() => setDealerSuccess(false), 3000);
  setTimeout(() => setDealerModal(false), 3200);
};


  // Contact Form Submission (mailto)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = encodeURIComponent(e.target.name.value.trim());
    const mobile = encodeURIComponent(e.target.mobile.value.trim());
    const email = encodeURIComponent(e.target.email.value.trim());
    const location = encodeURIComponent(e.target.location.value.trim());

    let subject = encodeURIComponent("Call Back Request from Website");
    let body = `Hi! I would like to request Link call back.%0AName: ${name}%0AMobile: ${mobile}%0A`;
    if (email) body += `Email: ${email}%0A`;
    if (location) body += `Location: ${location}%0A`;

    window.location.href = `mailto:webdeveloper2324@gmail.com?subject=${subject}&body=${body}`;
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 3000);
  };

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Background Image + Video Fader */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {slides.map((slide, i) => {
          const isActive = activeSlide === i;

          if (slide.endsWith(".mp4")) {
            return (
              <video
                key={i}
                ref={videoRef}
                src={slide}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                autoPlay={isActive}
                muted
                loop
              />
            );
          }

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
      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1500px" }}
      >
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="#" className="shrink-0">
         <img
  className="h-12 md:h-16"
  src={Logo}
  alt="Dr. Fixit Ltd. Logo"
  loading="lazy"
/>

          </Link>

          {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white font-medium bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl">
  {/* HOME link */}


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
      className="inline-flex items-center space-x-1 hover:text-yellow-400"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {dropdownOpen && (
      <div className="absolute bg-yellow-400 text-black mt-4 w-48 rounded-md shadow-lg py-2 z-50">
 <Link to="/newconstruction" className="block px-4 py-2 hover:bg-yellow-500">
  New Construction
</Link>
<Link to="/repair" className="block px-4 py-2 hover:bg-yellow-500">
  Repair Construction
</Link>
<Link to="/remover" className="block px-4 py-2 hover:bg-yellow-500">
  Remover
</Link>

      </div>
    )}
  </li>

  {/* Other links */}
  <li>
    <Link href="#" className="hover:text-yellow-400">
      RESOURCE
    </Link>
  </li>
  <li>
    <Link href="#" className="hover:text-yellow-400">
      CERTIFICATE
    </Link>
  </li>
  <li>
    <Link href="#" className="hover:text-yellow-400">
      TEAM
    </Link>
  </li>
  <li>
    <Link href="#" className="hover:text-yellow-400">
      CONTACT
    </Link>
  </li>
</ul>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-20 right-4 w-64 bg-white rounded-lg shadow-xl p-4 z-20 md:hidden">
              <ul className="space-y-4 text-gray-800">
                <li>
                  <Link href="#" className="block hover:text-yellow-400        ">
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-yellow-400        ">
                    RESOURCE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-yellow-400        ">
                    CERTIFICATE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-yellow-400        ">
                    TEAM
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-yellow-400        ">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Content Section */}
     <div
  className="relative z-10 mx-auto px-8 grid md:grid-cols-2 gap-10 items-center mt-10 md:mt-15 md:ml-[200px] md:mr-0"
>
  {/* Left Text Section */}
  <div className="text-white justify-end  space-y-6 md:pr-0.5">
  <h2 className="text-3xl md:text-3xl font-semibold leading-snug">
  <span className="text-yellow-300 font-bold">DR. FIXIT LTD. </span>
offers Link comprehensive range of products to meet all your
  waterproofing needs
</h2>


<div className="flex flex-wrap  gap-6 text-xl font-semibold mt-4">
  <div className="flex items-center space-x-2">
    <FaWater className="text-yellow-300 text-2xl" />
    <span>Waterproofing</span>
  </div>
  <div className="flex items-center space-x-2">
    <GiBrickWall className="text-yellow-300 text-2xl" />
    <span>Damp Protect</span>
  </div>
  <div className="flex items-center space-x-2">
    <FaShieldAlt className="text-yellow-300 text-2xl" />
    <span>Excellent Durability</span>
  </div>
</div>


    <div>
   <form
  onSubmit={handleContactSubmit}
  className="bg-white/15 ml-7 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl space-y-4 text-white md:w-[680px] mx-auto mt-10"
>
  <h2 className="text-center text-2xl font-semibold pb-7 text-white">
    Reach Out to Our Team
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {/* Name */}
    <div className="relative">
      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-lg" />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="pl-10 p-3 text-[17px] rounded-md bg-white/10 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
        required
      />
    </div>

    {/* Mobile */}
    <div className="relative">
      <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-lg" />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile"
        className="pl-10 p-3 text-[17px] rounded-md bg-white/10 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
        required
      />
    </div>

    {/* Email */}
    <div className="relative">
      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-lg" />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        className="pl-10 p-3 text-[17px] rounded-md bg-white/10 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
      />
    </div>

    {/* Location */}
   <div className="relative">
    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-lg" />
    <input
      type="text"
      name="dlocation"
      placeholder="District/Upazila"
      className="pl-10 p-3 text-[17px] rounded-md bg-white/10 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
    />
  </div>
  </div>

  <div className="flex items-start space-x-2 mt-3">
    <input type="checkbox" className="mt-1 accent-yellow-400" />
    <p className="text-sm text-white/90">
      I consent to receiving calls based on the information provided above.
    </p>
  </div>

  <button
    type="submit"
    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md mt-4 transition-all ml-2 md:ml-4"
  >
    Please Return My Call
  </button>

</form>

      {/* Bottom Info */}
 <div className="mt-10 text-left overflow-hidden">
  <div className="inline-block animate">
    <p className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow-md">
      <FaWater className="text-black" />
      Dr. Fixit Ltd. Advice Centre
      <span className="text-[#111] text-[18px] font-bold ml-1">+8801788360303</span>
    </p>
  </div>
</div>


    </div>
  </div>
</div>

    </header>
  );
};

export default Header;
