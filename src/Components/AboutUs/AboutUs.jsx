import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import img4 from "../../AboutUs-images/Fixit-Group-About-us.png";
import fixitHelmet from "../../New-construction-images/Biulding-&-Cap.png";
import logo from "../../Home-page-images/Logo.jpg";

import logo5 from "../../AboutUs-images/Fixit-Group-Logo-Black-&-White.png";
import waveShape from "../../AboutUs-images/Fixit-Group-Branding-Icon.png";

import fixitLogo from "../../AboutUs-images/Dr-Fixit-Logo.png";
import jaguarLogo from "../../AboutUs-images/Jaguar-logo.png";
import motulLogo from "../../AboutUs-images/Motul-Logo.png";
import shadowLogo from "../../AboutUs-images/Robinson-Can-Industrise.png";

import { Link, NavLink } from "react-router-dom";

const AboutUs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const businesses = [
    { logo: fixitLogo, link: "/drfixit" },
    { logo: jaguarLogo, link: "/jaguar" },
    { logo: motulLogo, link: "/motul" },
    { logo: shadowLogo, link: "/robinson" },
  ];

  return (
    <section className="relative">
      {/* ================== Banner Section ================== */}
 <div className="relative w-full h-screen overflow-hidden" aria-label="Hero background">
  {/* Lazy Background Image */}
  <LazyLoadImage
    src={img4}
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Navbar */}
  <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1500px" }}>
    <nav className="flex items-center justify-between py-4">
      <Link to="#" className="shrink-0">
        <img className="h-12 md:h-16" src={logo} alt="Dr. Fixit Ltd. Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white font-medium bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors duration-200 ${isActive ? "text-yellow-400" : "text-white"}`
            }
          >
            HOME
          </NavLink>
        </li>

        {/* PRODUCTS dropdown */}
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-200"
          >
            <span>PRODUCTS</span>
            <svg
              className={`h-4 w-4 transform transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute bg-yellow-400 text-black mt-4 w-48 rounded-md shadow-lg py-2 z-50">
              <NavLink to="/newconstruction" className="block px-4 py-2 hover:bg-yellow-500">
                New Construction
              </NavLink>
              <NavLink to="/repair" className="block px-4 py-2 hover:bg-yellow-500">
                Repair Construction
              </NavLink>
              <NavLink to="/remover" className="block px-4 py-2 hover:bg-yellow-500">
                Remover
              </NavLink>
            </div>
          )}
        </li>

        <li><Link to="#" className="hover:text-yellow-400">CERTIFICATE</Link></li>
                    <li><Link to="/about-us" className="hover:text-yellow-400 text-yellow-500">ABOUT US</Link></li>
                    <li><Link to="/faqs" className="hover:text-yellow-400">FAQs</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-400">CONTACT</Link></li>
      </ul>
    </nav>
  </div>

  {/* Banner Content */}
<div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      Welcome to <span className="text-yellow-400">DR. FIXIT LTD.</span>
    </h1>

    <p className="text-base md:text-xl leading-relaxed opacity-90">
      Building a stronger, smart Bangladesh through innovation, quality, and trust.
    </p>
  </div>
</div>

</div>


      {/* ================== About Section ================== */}
      <section className="relative overflow-hidden">
        {/* Wave Shape (orange background with curve) */}
        

        {/* Header (Logo + About Text on orange area) */}

        {/* Red Content Section (corrected color) */}

      <section className="bg-[#F0F2F1] py-10 px-10 md:px-16">
        <div className="max-w-[1300px] mx-auto">
          {/* Heading and Image in one line */}
          <div className="flex flex-col md:flex-row justify-between items-center lg:items-end mb-8">
            {/* Heading */}
            <h2 className="text-10xl md:text-[43px] font-normal text-black mb-6 md:mb-0 lg:mb-2">
              About <span className="font-bold">Dr. Fixit Limited</span>
            </h2>

            {/* Image */}
            <div className="w-[180px] md:w-[260px] lg:w-[600px] flex justify-center md:justify-end">
              <img
                src={fixitHelmet}
                alt="Dr. Fixit Helmet"
                className="object-contain lg:translate-y-1"
              />
            </div>
          </div>

          {/* Paragraphs */}
          <p className="text-[15px] md:text-[30px] text-[#222] leading-relaxed mb-5 text-justify">
            In 2024, our business entered a new phase when we officially
            registered with the Government of Bangladesh under the name{" "}
            <span className="font-bold">Dr. Fixit Limited</span>, completing all
            legal and business documentation along with{" "}
            <span className="font-bold">RJSC certification</span>. This
            significant milestone marked the beginning of a new era in{" "}
            <span className="font-bold">Fixit Group’s</span> history, where we
            received overwhelming positive feedback from our valued customers.
            Alhamdulillah!
          </p>

          <p className="text-[15px] md:text-[30px] text-[#222] leading-relaxed text-justify">
            We quickly gained the trust of our customers, and within a short
            period, <span className="font-bold">Dr. Fixit Limited</span>{" "}
            established itself as a trusted and reliable name in Bangladesh’s{" "}
            <span className="font-bold">Construction Chemical Industry</span>.
            We offer a wide range of products including{" "}
            <span className="font-bold">
              Concrete Admixture, Waterproofing Solutions for Leak-free Homes,
              Damp Proofing, Damp Guard, Heat Proofing, and Wall Crack Solutions
            </span>
            , which have become a symbol of quality and reliability for our
            clients. Today, <span className="font-bold">Dr. Fixit Limited</span>{" "}
            maintains a leading position in the construction industry in
            Bangladesh, and every product and service we provide ensures
            customer trust and satisfaction.
          </p>
        </div>
      </section>
      </section>

      {/* ================== Logo Grid Section ================== */}
     <section className="pt-16 sm:pt-20 md:pt-[200px]">
  <div className="max-w-[1500px] mx-auto px-4">
    
    <div className="text-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 justify-items-center pb-16 sm:pb-20 md:pb-[200px]">
        {businesses.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="group flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center w-[120px] sm:w-[160px] md:w-[220px] h-[60px] sm:h-[90px] md:h-[110px] transition-all duration-300">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-[80%] max-w-[90%] object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-xs sm:text-sm md:text-base font-semibold text-gray-800">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>

  </div>
</section>


      {/* ================== Vision / Mission / Goals ================== */}
      <div className="max-w-8xl mx-auto bg-[#e6e7e870] my-10 text-gray-900 ">
        {" "}
        {/* Vision Section */}{" "}
        <section className="flex flex-col md:flex-row items-stretch p-6 sm:p-8 md:p-10 transition-all duration-300 cursor-pointer hover:bg-white">
          {/* Left Heading */}
          <div className="md:w-1/3 flex items-center justify-center mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
              Our Vision
            </h2>
          </div>

          {/* Right Content */}
          <div className="md:flex-1 md:p-10 px-2 sm:px-4">
            <p className="text-justify leading-relaxed text-base sm:text-lg max-w-[600px]">
              To become one of the leading multi-sector companies in Bangladesh,
              recognized for innovation, quality, and customer trust in the
              fields of construction chemicals, lubricants, and printing
              solutions. We aim to support national industrial growth through
              sustainable, high-performance, and reliable products that make
              life easier and businesses stronger.
            </p>
          </div>
        </section>
        {/* Mission Section */}{" "}
        <section className="flex flex-col md:flex-row items-stretch p-6 sm:p-8 md:p-10 transition-all duration-300 cursor-pointer bg-[#F9AE41] hover:bg-[#fbbb4d]">
          {/* Left Heading */}
          <div className="md:w-1/3 flex items-center justify-center mb-6 md:mb-0 px-2 sm:px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
              Our Mission
            </h2>
          </div>

          {/* Right Content */}
          <div className="md:flex-1 md:p-8 px-2 sm:px-4">
            <ul className="list-disc list-inside space-y-3 text-base sm:text-lg leading-relaxed">
              <li>
                Deliver premium-quality products & services that exceed customer
                expectations.
              </li>
              <li>
                Maintain honesty, transparency & professionalism in all
                operations.
              </li>
              <li>
                Foster innovation & sustainability across all business sectors.
              </li>
              <li>
                Build long-term, trust-based relationships with customers,
                employees, and partners.
              </li>
            </ul>
          </div>
        </section>
        {/* Goals Section */}{" "}
        <section className="flex flex-col md:flex-row items-stretch p-6 sm:p-8 md:p-10 transition-all duration-300 hover:bg-white">
          {/* Left Heading */}
          <div className="md:w-1/3 flex items-center justify-center mb-6 md:mb-0 px-2 sm:px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
              Our Goals
            </h2>
          </div>

          {/* Right Content */}
          <div className="md:flex-1 md:p-8 px-2 sm:px-4">
            <ul className="list-disc list-inside space-y-3 text-base sm:text-lg leading-relaxed marker:text-red-500">
              <li>
                Expand Fixit Group’s footprint both nationally and globally.
              </li>
              <li>
                Strengthen our portfolio in construction chemicals, industrial &
                automotive lubricants, and printing solutions.
              </li>
              <li>
                Ensure 100% customer satisfaction through quality and
                after-sales service.
              </li>
              <li>
                Promote eco-friendly & sustainable practices for Link better
                future.
              </li>
              <li>
                Develop Link skilled and dedicated team to drive continuous
                growth.
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Final Statement */}
      <div className="flex items-center justify-center px-4 py-20 bg-white text-center">
        <p className="text-xl leading-relaxed max-w-3xl">
          <span className="text-red-600 underline font-semibold">FIXIT GROUP</span>{" "}
          is dedicated to quality, sustainability, and innovation – building a stronger,
          smarter Bangladesh.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
