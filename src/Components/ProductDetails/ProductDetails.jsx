import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { FiDroplet, FiChevronRight, FiCheck, FiHome } from "react-icons/fi";

import img1 from "../../New-construction-images/download.jpg";
import Logo from "../../Home-page-images/Logo.jpg";

import product1 from "../../New-construction-images/LW+ 20kg.png";
import product2 from "../../New-construction-images/LW+ 5kg.png";
import product3 from "../../New-construction-images/LW+ 20kg.png";
import product4 from "../../New-construction-images/LW+ 20kg.png";
import product5 from "../../New-construction-images/LW+ 20kg.png";

const products = [
  {
    id: 1,
    title: "1kg Water Proofing & Water-Reducing Admixture, LW+ 101 Dr Fixit Brand",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "1 Litre",
    subtitle: "Dr. Fixit Drproof LW+",
    subtitletwo: "Integral Liquid Waterproofing Compound for Concrete & Plaster",
    description:
      "Dr. Fixit Dr.proof LW+ is a specially formulated integral liquid waterproofing compound...",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product1 }],
    features: [
      "Waterproofs concrete during the construction stage.",
      "Improves workability.",
      "Avoids cracking.",
      "Protect concrete from corrosion.",
      "LW+ should be used in concrete, plaster and mortar in all the areas of house."
    ]
  },
  {
    id: 2,
    title: "1kg Dr. Fixit 302 Super Latex-Premium | SBR Waterproofing & Bonding Agent",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "1 Litre",
    subtitle: "Dr. Fixit 302 Super Latex",
    subtitletwo: "SBR Latex for repairs & waterproofing",
    description: "Dr. Fixit 302 Super Latex is a Styrene-Butadiene co-polymer latex...",
    images: [{ id: 1, url: product2 }],
    features: ["Bonding Agent", "Waterproofs concrete", "Improves flexibility", "Durable solution"]
  },
  {
    id: 3,
    title: "5kg Water Proofing & Water-Reducing Admixture, LW+ 101 Dr Fixit Brand",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "5 Litre",
    subtitle: "Dr. Fixit Drproof LW+",
    description: "Integral Liquid Waterproofing Compound for Concrete & Plaster...",
    images: [{ id: 1, url: product3 }],
    features: ["Waterproofs concrete", "Improves workability", "Avoids cracking", "Durable"]
  },
  {
    id: 4,
    title: "5kg Water Proofing & Water-Reducing Admixture, LW+ 101 Dr Fixit Brand",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "5 Litre",
    subtitle: "Dr. Fixit Drproof LW+",
    description: "Integral Liquid Waterproofing Compound for Concrete & Plaster...",
    images: [{ id: 1, url: product4 }],
    features: ["Waterproofs concrete", "Improves workability", "Avoids cracking", "Durable"]
  },
  {
    id: 5,
    title: "5kg Water Proofing & Water-Reducing Admixture, LW+ 101 Dr Fixit Brand",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "5 Litre",
    subtitle: "Dr. Fixit Drproof LW+",
    description: "Integral Liquid Waterproofing Compound for Concrete & Plaster...",
    images: [{ id: 1, url: product5 }],
    features: ["Waterproofs concrete", "Improves workability", "Avoids cracking", "Durable"]
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState(products[0]);
  const [activeImage, setActiveImage] = useState(products[0].images[0].url);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const currentProduct = products.find((p) => p.id === parseInt(id)) || products[0];
    setProduct(currentProduct);
    setActiveImage(currentProduct.images[0].url);
  }, [id]);

  const slides = [img1];

  const isProductsActive =
    location.pathname.includes("newconstruction") ||
    location.pathname.includes("repair") ||
    location.pathname.includes("remover");

  return (
    <section>
      {/* HEADER */}
      <header className="relative w-full h-[800px] overflow-hidden object-cover">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide}
              alt={`slide-${i}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                activeSlide === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* NAVBAR */}
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

      {/* PRODUCT DETAILS */}
      <section id="banner" className=" w-full py-30 px-4 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0057A3]">Product Details</h2>
        <div className="w-28 h-1 bg-[#FFCB05] mx-auto mt-2 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT PRODUCT IMAGE */}
          <div className="flex flex-col items-center">

  {/* MAIN IMAGE */}
  <div className="w-full max-w-[400px] h-[500px] flex items-center justify-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
    <img 
      src={activeImage} 
      alt="main" 
      className="object-contain w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
    />
  </div>

  {/* 3 THUMBNAIL LOOP (ID: 1,2,3,4,5) */}
  <div className="flex gap-4 mt-6">
    {[1, 2, 3, 4, 5,].map((pid) => {
      const item = products.find((p) => p.id === pid);

      return (
        <button
          key={pid}
          onClick={() => {
            setProduct(item);                   
            setActiveImage(item.images[0].url); 
          }}
          className={`
            h-[70px] w-[70px] rounded-xl p-1 bg-white shadow-md border transition-all duration-200
            ${product.id === item.id
              ? "border-[#0057A3] shadow-lg"
              : "border-gray-300 hover:border-[#0057A3]"}
          `}
        >
          <img
            src={item.images[0].url}
            alt="thumb"
            className="object-contain h-full w-full"
          />
        </button>
      );
    })}
  </div>

  {/* BUTTON */}
  <button className="mt-6 bg-[#0057A3] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#004680] transition">
    Find a Dealer
  </button>
</div>


          {/* RIGHT PRODUCT DETAILS */}
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-black">{product.title}</h3>
            <p className="text-gray-700 mt-1">{product.quantity}</p>

            <button className="bg-[#FFCB05] px-6 py-3 rounded-lg font-semibold mt-6 shadow">
              Features & Benefits
            </button>

            <div className="mt-6 space-y-4">
              {product.features?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F9FC] px-4 py-4 rounded-xl shadow-sm flex items-start gap-3 border border-gray-100"
                >
                  {idx === 0 && <FiDroplet className="text-[#0057A3] text-xl mt-1" />}
                  {idx === 1 && <FiChevronRight className="text-[#0057A3] text-xl mt-1" />}
                  {idx === 2 && <FiCheck className="text-[#0057A3] text-xl mt-1" />}
                  {idx === 3 && <FiCheck className="text-[#0057A3] text-xl mt-1" />}
                  {idx === 4 && <FiHome className="text-[#0057A3] text-xl mt-1" />}
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
