import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiSearch } from "react-icons/fi"; 


import img1 from "../../New-construction-images/banner.png";
import img2 from "../../New-construction-images/banner2.png"; 
import img3 from "../../New-construction-images/banner3.png"; 
import Logo from "../../Home-page-images/Logo.jpg";

import product1 from "../../New-construction-images/Dr-Fixit-Brand-LW+-101-1-Litre.png";
import product2 from "../../New-construction-images/Dr-Fixit-Brand-Plaster-Master.png";
import product3 from "../../New-construction-images/Dr-Fixit-Brand-LW-101-30-Litre.png";
import product5 from "../../New-construction-images/Dr-Fixit-Brand-5400-Interior-Wall-Selaer.png";
import product8 from "../../New-construction-images/Dr-Fixit-Brand-302-Super-Latex-18-Litre 02.png";
import product9 from "../../New-construction-images/Fevilock-500-ml.png";
import product10 from "../../New-construction-images//Dr-Fixit-Brand-5100-Exterior-Sealer-18-Litre.png";
import product11 from "../../New-construction-images/Rust-Remover-01-Litre.png";
import product12 from "../../New-construction-images/Dr-Fixit-Brand-302-Super-Latex-1-Litre.png";


const Remover = () => {
 const [activeTab, setActiveTab] = useState("repair");
  const [selectedLeakage, setSelectedLeakage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Example product data
const products = [
  { id: 1, name: "Dr Fixit Brand LW 101",category: "Wall", type: "repair", imgs: [product1], description: "1 Liter Waterproofing Expert" },
  { id: 2, name: "Dr Fixit Brand 302 Super Latex",category: "Wall", type: "repair", imgs: [product12], description: "1 Liter Waterproofing Expert" },
  { id: 3, name: "Dr. Fixit Brand LW+ 101",category: "Wall", type: "repair", imgs: [product1], description: "05 Liter Waterproofing Expert" },
  { id: 4, name: "Dr Fixit Brand 302 Super Latex",category: "Wall", type: "repair", imgs: [product12], description: "05 Liter Waterproofing Expert" },
  { id: 5, name: "Dr Fixit Brand LW 101",category: "Wall", type: "repair", imgs: [product3], description: "18 Liter Waterproofing Expert" },
  { id: 6, name: "Dr Fixit Brand 302 Super Latex",category: "Wall", type: "repair", imgs: [product8], description: "18 Liter Waterproofing Expert" },
  { id: 7, name: "Dr. Fixit Brand LW+ 101",category: "Wall", type: "repair", imgs: [product3], description: "30 Liter Waterproofing Expert" },
  { id: 8, name: "Dr Fixit Brand 302 Super Latex",category: "Wall", type: "repair", imgs: [product8], description: "18 Liter Waterproofing Expert" },
  { id: 9, name: "Dr Fixit Brand 5400 Interior Sealer", type: "repair", category: "Sealer", imgs: [product5], description: "18 Liter Paint Expert" },
  { id: 10, name: "Dr Fixit Brand Plaster Master",category: "Wall", type: "repair", imgs: [product2], description: "18 Liter Plaster Expert" },
  { id: 11, name: "Dr Fixit Brand 5100 Exterior Sealer", type: "repair", category: "Sealer", imgs: [product10], description: "18 Liter Paint Expert" },
  { id: 12, name: "Dr Fixit Brand Rust Remover", type: "repair", category: "Cleaner", imgs: [product11], description: "1 Liter Muilti-Purpase Rust Remover" },
  { id: 13, name: "Dr Fixit Brand Fevilock", type: "repair", category: "Glue", imgs: [product9], description: "500ml Liter Bonding Expert" },
];



  // Leakage options (same for all tabs, can be customized per tab)
  const leakageOptions = ["Ceiling", "Wall", "Woodworking", "Crack filling (If Any)"];

  // Filtered products based on tab, leakage, and search
  const filteredProducts = products.filter((p) => {
    const matchesTab = activeTab === "repair" ? p.type === "repair" : p.type === "new";
    const matchesLeak = selectedLeakage ? p.category === selectedLeakage : true;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesLeak && matchesSearch;
  });

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedLeakage(""); // reset leakage selection on tab change
    setSearchTerm("");      // optional: reset search
  };






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
  loading="lazy"
  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
    isActive ? "opacity-100" : "opacity-0"
  }`}
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
     <section className="py-30 px-4 md:px-8 lg:px-12">
  <div className="max-w-[1500px] mx-auto w-full">

    {/* Tabs */}
    <div className="flex flex-wrap justify-center mb-8 gap-x-4">
      {["repair", "new"].map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-6 py-3 text-sm md:text-base border font-semibold transition-all rounded-t-lg 
            ${
              activeTab === tab
                ? "bg-yellow-400 text-black shadow-md"
                : "bg-white hover:bg-gray-100 text-gray-700"
            }
            ${tab === "repair" ? "rounded-l-lg" : "rounded-r-lg"}
          `}
        >
          {tab === "repair" ? "Repair | Renovate" : "New Construction"}
        </button>
      ))}
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Sidebar Filter */}
      <aside className="md:col-span-1 ju rounded-2xl shadow-xl p-6 border border-gray-200 
                        w-full max-w-[300px] h-[350px] 
                        bg-gradient-to-b from-blue-100 via-blue-50 to-white">

        <h3 className="text-lg font-bold text-blue-800 text-center mb-6">
          Where is the leakage?
        </h3>

        <div className="flex flex-col space-y-3 text-sm md:text-base">
          {leakageOptions.map((option) => {
            const isActive = selectedLeakage === option;

            return (
              <label
                key={option}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "bg-blue-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 group"
                  }`}
              >
                <input
                  type="radio"
                  name="leakage"
                  value={option}
                  checked={isActive}
                  onChange={(e) => setSelectedLeakage(e.target.value)}
                  className="accent-blue-600 scale-125"
                />

                <span
                  className={`font-medium 
                    ${isActive ? "text-white" : "text-gray-900 group-hover:text-white"}`}
                >
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:col-span-3">

        {/* Search Bar */}
<div className="flex mt-7 mb-16 relative w-full md:w-1/3 ml-auto">
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full pl-10 pr-5 border border-gray-500 rounded-[16px] py-3
                 shadow-md text-black placeholder-gray-500
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                 outline-none transition-all bg-white"
    />
    <FiSearch
      className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
      size={20}
    />
  </div>
</div>




        {/* Product Grid */}
  {filteredProducts.length > 0 ? (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
    {filteredProducts.map((p, index) => {
      const small = index < 2;
      const imgHeight = small ? "h-50" : "h-60";
      const hoverScale = small ? "hover:scale-105" : "hover:scale-110";

      return (
        <div
          key={p.id}
          className="border-[2px] border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] bg-white"
        >
          {/* Image */}
          <div className="flex justify-center items-end w-full h-[260px] border-b-[2px] border-gray-200 rounded-t-2xl mt-5 group transition-all duration-300">
            {p.imgs?.map((imgSrc, idx) => (
              <LazyLoadImage
                key={idx}
                src={imgSrc}
                alt={`${p.name} ${idx + 1}`}
                effect="blur"
                className={`object-contain w-auto transition-transform duration-300 group-hover:scale-105 ${imgHeight}`}
              />
            ))}
          </div>

          {/* Product Info */}
          <div className="p-5 flex flex-col flex-grow justify-between text-center">
            <h3 className="text-[17px] font-bold text-[#222] mb-1 leading-[1.1]">
              {p.name}
            </h3>
           <p className="text-[14px] text-gray-600 mb-6 leading-[1.4]">
  {p.description}
</p>
          </div>

          {/* Buttons */}
          <div className="px-5 pb-5 flex flex-col gap-2 mt-auto">
           <Link
  to={`/productdetails/${p.id}`}
  state={{ showBanner: true }}
  className="border border-blue-700 text-blue-700 text-[15px] font-medium py-2 px-4 rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300 text-center inline-block"
>
  Product Details
</Link>

            <button className="bg-yellow-400 text-black text-[15px] font-medium py-2 rounded-md shadow-sm hover:bg-yellow-500 transition-all duration-300 text-center">
              Find a Dealer
            </button>
          </div>
        </div>
      );
    })}
  </div>
) : (
  <p className="text-center text-gray-500 mt-12 text-lg">
    No products found for this selection.
  </p>
)}

      </main>
    </div>
  </div>
</section>


    </section>
  );
};

export default Remover;
