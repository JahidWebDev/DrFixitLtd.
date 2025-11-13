import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiSearch } from "react-icons/fi"; 


import img1 from "../../New-construction-images/banner.png";
import img2 from "../../New-construction-images/banner2.png"; 
import img3 from "../../New-construction-images/banner3.png"; 
import Logo from "../../Home-page-images/Logo.jpg";

const Newconstruction = () => {
 const [activeTab, setActiveTab] = useState("repair");
  const [selectedLeakage, setSelectedLeakage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Example product data
  const products = [
    { id: 1, name: "Dr.Proof 101 LW+", category: "Ceiling", type: "repair", imgs: ["/images/101LW+.png"] },
    { id: 2, name: "302 Super Latex", category: "Wall", type: "repair", imgs: ["/images/302SuperLatex.png"] },
    { id: 3, name: "New Construction Proof", category: "Ceiling", type: "repair", imgs: ["/images/newCeiling.png"] },
    { id: 4, name: "Ultra Seal 200", category: "Wall", type: "new", imgs: ["/images/ultraseal200.png"] },
    { id: 5, name: "FixIt Strong", category: "Ceiling", type: "repair", imgs: ["/images/fixitstrong.png"] },
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
     <section className="bg-gray-50 py-30 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1500px] mx-auto w-full">
        {/* Tabs */}
 <div className="flex flex-wrap justify-center mb-8 gap-x-4">
  {["repair", "new"].map((tab) => (
    <button
      key={tab}
      onClick={() => handleTabClick(tab)}
      className={`px-6 py-3 text-sm md:text-base border font-semibold transition-all rounded-t-lg ${
        activeTab === tab
          ? "bg-yellow-400 text-black shadow-md"
          : "bg-white hover:bg-gray-100 text-gray-700"
      } ${tab === "repair" ? "rounded-l-lg" : "rounded-r-lg"}`}
    >
      {tab === "repair" ? "Repair | Renovate" : "New Construction"}
    </button>
  ))}
</div>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filter */}
          <aside className="md:col-span-1 
                  rounded-2xl shadow-xl p-6 border border-gray-200 w-full max-w-[300px] h-[350px] 
                  bg-gradient-to-b from-blue-100 via-blue-50 to-white">
            <h3 className="text-lg font-bold text-blue-800 text-center mb-6">
              Where is the leakage?
            </h3>

  <div className="flex flex-col space-y-3 text-sm md:text-base">
  {leakageOptions.map((option) => {
    const isActive = selectedLeakage === option; // check if this option is selected
    return (
      <label
        key={option}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
          ${isActive 
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
        <span className={`font-medium ${isActive ? "text-white" : "text-gray-900 group-hover:text-white"}`}>
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
<div className="flex justify-center mb-15 relative w-full md:w-1/2 mx-auto mr-1">
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-10 pr-5 border border-gray-300 focus:border-blue-500 rounded-full py-3 shadow-sm focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
  />
  <FiSearch
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    size={20}
  />
</div>





            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex gap-2 overflow-x-auto h-56 w-full pb-2">
                      {p.imgs?.map((imgSrc, idx) => (
                        <LazyLoadImage
                          key={idx}
                          src={imgSrc}
                          alt={`${p.name} ${idx + 1}`}
                          effect="blur"
                          className="h-56 w-auto object-contain shrink-0"
                        />
                      ))}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
                      {p.name}
                    </h3>

                    <div className="mt-5 w-full flex flex-col gap-3">
                      <button className="border border-blue-700 text-blue-700 font-medium py-2 rounded-full hover:bg-blue-700 hover:text-white transition-all">
                        Product Details
                      </button>
                      <button className="bg-yellow-400 text-black font-medium py-2 rounded-full hover:bg-yellow-500 transition-all">
                        Find a Dealer
                      </button>
                    </div>
                  </div>
                ))}
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

export default Newconstruction;
