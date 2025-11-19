import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import img4 from "../../AboutUs-images/Fixit-Group-About-us.png";

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
    <div className="relative h-[60vh] sm:h-[68vh] md:h-[76vh] lg:h-[76vh] overflow-hidden" aria-label="Hero background">
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

        <li><Link to="/about-us" className="hover:text-yellow-400 text-amber-300">ABOUT US</Link></li>
        <li><Link to="#" className="hover:text-yellow-400">CERTIFICATE</Link></li>
        <li><Link to="#" className="hover:text-yellow-400">RESOURCE</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">CONTACT</Link></li>
      </ul>
    </nav>
  </div>

  {/* Banner Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Fixit Group</h1>
      <p className="text-base md:text-xl max-w-2xl mx-auto">
        Building a stronger, smart Bangladesh through innovation, quality, and trust.
      </p>
    </div>
  </div>
</div>

      {/* ================== About Section ================== */}
      <section className="relative overflow-hidden">
        {/* Wave Shape (orange background with curve) */}
        <div className="bg-[#A12420] w-full h-[200px]">
          <div className="absolute top-0 right-0 w-full z-0">
            <img
              src={waveShape}
              alt="Wave Shape"
              className="w-full h-full  object-cover"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-3 md:gap-6 px-6 md:px-12 lg:px-50 pt-[50px] pb-10 text-center md:text-left">
            {/* Logo */}
            <img
              src={logo5}
              alt="Fixit Logo"
              className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] object-contain mx-auto md:mx-0"
            />

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black leading-tight">
              About{" "}
              <span className="text-white sm:text-[#A12420] font-bold">
                Fixit Group
              </span>
            </h2>
          </div>
        </div>

        {/* Header (Logo + About Text on orange area) */}

        {/* Red Content Section (corrected color) */}
        <div className="relative bg-[#A12420] text-white px-6 md:px-12 lg:px-10 py-16 z-[-1000]">
          <div className="max-w-[1488px] mx-auto">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-white">Fixit Group</span> began
                its journey in 2019, entering the construction market in
                Bangladesh under the <strong>National</strong> brand. We
                initially introduced Link wide range of construction chemical
                products, including{" "}
                <strong>
                  Concrete Admixture, Waterproofing Experts for Leak-free Home,
                  Damp Proofing, Wall Crack & Water Wall Sealer
                </strong>
                . Within Link short period, these products gained the trust and
                confidence of customers nationwide, establishing{" "}
                <span className="font-bold text-white">Fixit Group</span> as
                Link trusted and reliable name in the{" "}
                <strong>Construction Chemical Industry of Bangladesh.</strong>
              </p>

              <p>
                In 2022, we expanded into the Lubricant Industry through our new
                brand, <span className="font-bold text-white">JAGUAR</span>. Our
                goal was to provide high-quality Industrial Lubricants and
                Automotive Lubricants, ensuring superior performance for both
                industrial and automotive sectors. Today, Jaguar Lubricants
                stands as Link symbol of quality and long-lasting performance in
                the Bangladesh market.
              </p>

              <p>
                In 2024, our business entered Link new era when we officially
                registered with the Bangladesh Government under the name{" "}
                <span className="font-bold text-white">Dr. Fixit Limited</span>,
                obtaining RJSC certification along with all required legal and
                business documents. This milestone marked Link significant
                chapter in Fixit Group’s history-a period of strong growth and
                overwhelming positive feedback from our valued customers.
                Alhamdulillah!
              </p>

              <p>
                In 2025, we proudly became the{" "}
                <span className="font-bold text-white">
                  Authorized Importer of Motul
                </span>{" "}
                in Bangladesh. Through this partnership, we brought
                world-renowned <strong>Motul Lubricants</strong> to the local
                market, further strengthening our presence in the{" "}
                <strong>automotive and industrial lubricant industry.</strong>
              </p>

              <p>
                However, our entrepreneurial journey began much earlier-back in
                2014, with Link printing business named{" "}
                <span className="italic font-bold">
                  Shadow Design & Printing
                </span>
                . From that humble beginning, we have gradually expanded across
                multiple sectors, driven by dedication, innovation, and customer
                trust.
              </p>

              <p>
                Today,{" "}
                <span className="font-bold text-white ">Fixit Group</span>{" "}
                stands as Link symbol of quality, durability, and reliability in{" "}
                <strong>
                  Bangladesh’s construction, lubricant, and printing industries.
                </strong>
              </p>
            </div>
          </div>
        </div>
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
      <div className="flex items-center justify-center px-4 py-[80px] bg-white text-center">
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
