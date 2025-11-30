import React, { useState, useRef, useEffect } from "react";
import {
  FaWater,
  FaShieldAlt,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";

import Logo from "../../Home-page-images/Logo.jpg";

// Use two DIFFERENT images here
import img1 from "../../Home-page-images/Banner.jpg";
// import img2 from "../../Home-page-images/Banner.jpg";  // <-- FIXED (must be different)

import video1 from "../../Home-page-images/Dr-Fixit-Web-Home-Page.mp4";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link, NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
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
        <div
          className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: "1500px" }}
        >
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img
                className="h-12 md:h-16"
                src={Logo}
                alt="Dr Fixit Ltd Logo"
                loading="lazy"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8 text-white font-medium bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-yellow-400" : "text-white"
                    } hover:text-yellow-400`
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
                    className={`w-4 h-4 transition-transform ${
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
                    <Link
                      to="/newconstruction"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      New Construction
                    </Link>
                    <Link
                      to="/repair"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      Repair Construction
                    </Link>
                    <Link
                      to="/remover"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      Remover
                    </Link>
                  </div>
                )}
              </li>
<li><Link to="#" className="hover:text-yellow-400">CERTIFICATE</Link></li>
            <li><Link to="/about-us" className="hover:text-yellow-400">ABOUT US</Link></li>
            <li><Link to="/faqs" className="hover:text-yellow-400">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">CONTACT</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
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
                    <Link to="#" className="block hover:text-yellow-400">
                      PRODUCTS
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block hover:text-yellow-400">
                      RESOURCE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block hover:text-yellow-400">
                      CERTIFICATE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block hover:text-yellow-400">
                      TEAM
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block hover:text-yellow-400">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>

        {/* Content Section */}
      </header>
   <section className="py-20 md:px-16 lg:px-28">
  <div className="max-w-6xl mx-auto rounded-2xl p-10 md:p-14 text-black">

    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-bold mb-12">
      Privacy Policy
    </h1>

    {/* Intro */}
    <div className="space-y-5 text-xl leading-8 mb-12">
      <p>
        Dr. Fixit Limited ("Company", "we", "our", "us") operates this store and website,
        including all related features, tools, products, and services ("Services").
        This Privacy Policy explains how we collect, use, and protect your
        personal data when you interact with us.
      </p>
      <p>By using our Services, you agree to the terms below.</p>
    </div>

    {/* ============================== 1. Information We Collect ============================== */}
    <h2 className="text-3xl font-bold mb-3">1. Information We Collect</h2>
    <p className="text-lg mb-5">We may collect the following information:</p>

    <div className="grid md:grid-cols-2 gap-8 text-lg">
      <div>
        <h3 className="font-semibold mb-2 text-xl">A. Contact Information</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name</li><li>Address</li><li>Phone Number</li><li>Email</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-xl">B. Orders & Transactions</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Products viewed or purchased</li>
          <li>Order history & refunds</li>
          <li>Payment method (not stored fully)</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-xl">C. Device & Usage Data</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP Address & Browser</li><li>Cookies activity</li><li>Pages viewed & session time</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-xl">D. Communication Records</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Support messages, email responses</li>
        </ul>
      </div>
    </div>

    {/* ============================== 2. Use of Information ============================== */}
    <h2 className="text-3xl font-bold mt-16 mb-4">2. How We Use Your Information</h2>

    <div className="space-y-8 text-lg leading-8">
      <div>
        <h3 className="font-semibold mb-2 text-xl">A. Service Operations</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Order processing, delivery & returns</li>
          <li>User account management</li>
          <li>Improve service quality & experience</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-xl">B. Marketing & Promotions</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Offers, product updates, newsletters</li>
          <li>Personalized advertising</li>
          <li>You may opt out anytime</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-xl">C. Security & Fraud Prevention</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Protecting your account</li>
          <li>Suspicious activity detection</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-xl">D. Legal Compliance</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Following laws & regulations</li>
          <li>Responding to legal requests</li>
        </ul>
      </div>
    </div>

    {/* ============================== 3–8 Sections ============================== */}
    <div className="space-y-14 mt-16 text-lg leading-8">

      <div>
        <h2 className="text-3xl font-bold mb-3">3. Sharing Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Delivery & courier partners</li>
          <li>Payment gateways</li>
          <li>Security & hosting tools</li>
          <li>Government if required</li>
        </ul>
        <p className="font-semibold mt-2">We DO NOT sell your personal data.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-3">4. Cookies & Tracking</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cart saving</li><li>Preferences memory</li>
          <li>Analytics & user flow</li><li>Performance improvement</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-3">5. Data Security</h2>
        <p>Strong protection measures are practiced, though no system is 100% risk-free.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-3">6. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access or modify data</li>
          <li>Delete account information</li>
          <li>Opt-out of marketing</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-3">7. Children's Privacy</h2>
        <p>No collection of data from users under age 13.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-3">8. Policy Updates</h2>
        <p>Changes to this policy are posted on this page.</p>
      </div>

    </div>
       <div className="mt-12  pt-6 space-y-2 text-lg md:text-xl">
      <h3 className="text-xl md:text-2xl  font-semibold">Contact Information:</h3>
      <p>Phone: +880 1898-795771</p>
      <p>Email: <a href="mailto:support@fixitgroupbd.com" className="text-black ">support@fixitgroupbd.com</a></p>
      <p>Address: House No. 09, Road No. 02, Block-C, Rampura Banasree, Dhaka-1219.</p>

      <h3 className="text-xl md:text-2xl font-semibold mt-12">Support Hours:</h3>
      <p>Monday to Friday: 10:00 AM to 5:00 PM</p>

      <h3 className="text-xl md:text-2xl font-semibold mt-12">Company Information:</h3>
      <p>Company Name: Dr. Fixit Limited</p>
      <p>Company Reg No: C-196176</p>
    </div>
  </div>

  {/* ============================== CONTACT INFO ============================== */}
     
</section>

    </section>
  );
};

export default PrivacyPolicy;
