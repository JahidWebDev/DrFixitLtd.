import React, { useState, useRef, useEffect } from "react";
import { FaWater, FaShieldAlt, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";

import Logo from "../../Home-page-images/Logo.jpg";

// Use two DIFFERENT images here
import img1 from "../../Home-page-images/Banner.jpg";
// import img2 from "../../Home-page-images/Banner.jpg";  // <-- FIXED (must be different)

import video1 from "../../Home-page-images/Dr-Fixit-Web-Home-Page.mp4";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link, NavLink } from "react-router-dom";


const RefundPolicy = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);



// Slides (Images + Video)
const slides = [
  { type: "image", src: img1 },
  // { type: "image", src: img2 },
  { type: "video", src: video1 },
];

// Auto Slide
useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, [slides.length]);

// Play Video
useEffect(() => {
  const s = slides[activeSlide];
  if (s.type === "video" && videoRef.current) {
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  }
}, [activeSlide]);




  return (
    <section>
        <header className="relative min-h-screen overflow-hidden">

      {/* Background Image + Video Fader */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
  {slides.map((slide, i) => {
    const isActive = activeSlide === i;

    return slide.type === "video" ? (
      <video
        key={i}
        ref={videoRef}
        src={slide.src}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
      />
    ) : (
      <LazyLoadImage
  key={i}
  src={slide.src}
  alt="hero-slide"
  className={`absolute inset-0 w-full h-full object-cover  duration-[1500ms] 
    brightness-110 ${isActive ? "opacity-100" : "opacity-0"}`}
 />

    );
  })}

  <div className="absolute inset-0 bg-black/40" />
</div>


      {/* Navbar */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1500px" }}>
        <nav className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img className="h-12 md:h-16" src={Logo} alt="Dr Fixit Ltd Logo" loading="lazy" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-white font-medium bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
                }
              >
                HOME
              </NavLink>
            </li>

            {/* Products Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center space-x-1 hover:text-yellow-400"
              >
                <span>PRODUCTS</span>
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute bg-yellow-400 text-black mt-4 w-48 rounded-md shadow-lg py-2 z-50">
                  <Link to="/newconstruction" className="block px-4 py-2 hover:bg-yellow-500">New Construction</Link>
                  <Link to="/repair" className="block px-4 py-2 hover:bg-yellow-500">Repair Construction</Link>
                  <Link to="/remover" className="block px-4 py-2 hover:bg-yellow-500">Remover</Link>
                </div>
              )}
            </li>

            <li><Link to="/about-us" className="hover:text-yellow-400">ABOUT US</Link></li>
            <li><Link to="#" className="hover:text-yellow-400">CERTIFICATE</Link></li>
            <li><Link to="#" className="hover:text-yellow-400">RESOURCE</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">CONTACT</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-20 right-4 w-64 bg-white rounded-lg shadow-xl p-4 z-20 md:hidden">
              <ul className="space-y-4 text-gray-800">
                <li><Link to="#" className="block hover:text-yellow-400">PRODUCTS</Link></li>
                <li><Link to="#" className="block hover:text-yellow-400">RESOURCE</Link></li>
                <li><Link to="#" className="block hover:text-yellow-400">CERTIFICATE</Link></li>
                <li><Link to="#" className="block hover:text-yellow-400">TEAM</Link></li>
                <li><Link to="/contact" className="block hover:text-yellow-400">CONTACT</Link></li>
              </ul>
            </div>
          )}

        </nav>
      </div>

      {/* Content Section */}
      
        
         

    </header>
  <section className="py-20 md:px-12 lg:px-24">
  <div className="max-w-6xl mx-auto rounded-2xl p-10 md:p-14 text-black">
    
    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-bold mb-14">
      Return & Refund Policy
    </h1>

    {/* Policy Description */}
    <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
      <p>Dr. Fixit Limited accepts returns on eligible items within 14 days of delivery.</p>
      <p>To be eligible for a return, items must meet the following conditions:</p>
      <ul className="list-disc pl-8 space-y-4">
        <li>All returned items must be in brand-new, unused condition with all original packaging, tags, and accessories included. Products that have been worn, taken on a test ride, or installed on a motorcycle are not eligible for return unless they are defective and fall under the manufacturer’s warranty. Packaging must also be in like-new condition-the same way you would expect to receive it if you were buying the item yourself.</li>
        <li>All returns are subject to a 20% restocking fee.</li>
        <li>Return shipping is the customer’s responsibility.</li>
        <li>We are not responsible for lost return shipments; we recommend using a trackable service and insuring the package if needed.</li>
        <li>To initiate a return, please contact us. Returns sent without prior approval may be denied.</li>
      </ul>
      <p className="text-blue-600 underline">https://www.drfixitbd.org/pages/contact</p>
    </div>

    {/* Return Address */}
    <div className="mt-10 text-xl md:text-2xl leading-relaxed space-y-2">
      <p><strong>Send Returns To:</strong></p>
      <p>Dr. Fixit Limited</p>
      <p>House No. 09, Road No. 02</p>
      <p>Block-C, Rampura Banasree, Dhaka-1219</p>
    </div>

    {/* Refund Info */}
    <div className="mt-8 text-xl md:text-2xl leading-relaxed space-y-4">
      <p>Once your return is received and inspected, we will notify you of the approval status. If approved, your refund (minus restocking fees) will be processed to your original payment method within 3-5 business days.</p>
      <p>Some items, such as race-use parts, electrical components, or special orders, may be final sale. Please reach out to confirm eligibility before returning any item.</p>
    </div>

  </div>
</section>





    </section>
  );
};

export default RefundPolicy;
