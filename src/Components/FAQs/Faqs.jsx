import React, { useState, useRef, useEffect } from "react";

import Logo from "../../Home-page-images/Logo.jpg";

// Use two DIFFERENT images here
import img1 from "../../Home-page-images/Banner.jpg";
// import img2 from "../../Home-page-images/Banner.jpg";  // <-- FIXED (must be different)

import video1 from "../../Home-page-images/Dr-Fixit-Web-Home-Page.mp4";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link, NavLink } from "react-router-dom";

const Faqs = () => {
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
            <li><Link to="/faqs" className="hover:text-yellow-400 text-yellow-500">FAQs</Link></li>
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
<section className="py-20 md:px-16 lg:px-28 bg-white text-black">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold  mb-14">Frequently Asked Questions</h2>

    <div className="space-y-10 text-lg md:text-xl leading-8">

      {/* Q1 */}
      <div>
        <h3 className="font-semibold text-2xl">1. What types of products do you sell?</h3>
        <p className="mt-2">
          We offer a wide range of building materials, including waterproofing solutions,
          construction chemicals, repair products, coatings, sealants, tools, and more.
        </p>
      </div>

      {/* Q2 */}
      <div>
        <h3 className="font-semibold text-2xl">2. Do you offer home delivery?</h3>
        <p className="mt-2">
          Yes. We provide delivery across Bangladesh. Delivery charges may vary depending on
          location and product weight.
        </p>
      </div>

      {/* Q3 */}
      <div>
        <h3 className="font-semibold text-2xl">3. How long does delivery take?</h3>
        <p className="mt-2">
          Most orders arrive within 2 -5 business days depending on the destination. Dhaka delivery
          is usually faster.
        </p>
      </div>

      {/* Q4 */}
      <div>
        <h3 className="font-semibold text-2xl">4. Can I return or exchange a product?</h3>
        <p className="mt-2">Yes, you can request a return or exchange if:</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>The item is unused & in original condition</li>
          <li>Request is made within 3 days of delivery</li>
          <li>You have the receipt or order number</li>
        </ul>
        <p className="mt-2 font-medium italic">(We can also create a full Return Policy page for you.)</p>
      </div>

      {/* Q5 */}
      <div>
        <h3 className="font-semibold text-2xl">5. What payment methods do you accept?</h3>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Cash on Delivery</li>
          <li>Mobile Banking (bkash/Nagad/Rocket)</li>
          <li>Online Gateway (if activated)</li>
          <li>Bank Transfer</li>
        </ul>
      </div>

      {/* Q6 */}
      <div>
        <h3 className="font-semibold text-2xl">6. Is Cash on Delivery available?</h3>
        <p className="mt-2">
          COD applies to most items except heavy or special-order products which may require
          advance payment.
        </p>
      </div>

      {/* Q7 */}
      <div>
        <h3 className="font-semibold text-2xl">7. Are your products genuine?</h3>
        <p className="mt-2">
          Yes- we supply authentic materials sourced directly from authorized distributors or
          manufacturers.
        </p>
      </div>

      {/* Q8 */}
      <div>
        <h3 className="font-semibold text-2xl">8. How do I choose the right product?</h3>
        <p className="mt-2">
          Contact our support team for guidance. We help you select correct materials for your
          construction or repair project.
        </p>
      </div>

      {/* Q9 */}
      <div>
        <h3 className="font-semibold text-2xl">9. Can I cancel an order?</h3>
        <p className="mt-2">
          Yes- cancellation is possible before shipment. After dispatch, cancellation is not
          allowed, but return terms may apply.
        </p>
      </div>

      {/* Q10 */}
      <div>
        <h3 className="font-semibold text-2xl">10. Do you provide technical support?</h3>
        <p className="mt-2">
          Yes, our specialists assist with usage instructions, application methods, and technical
          queries.
        </p>
      </div>

    </div>
  </div>
</section>


    </section>
  );
};

export default Faqs;
