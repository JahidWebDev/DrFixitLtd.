import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { FiDroplet, FiChevronRight, FiCheck, FiHome } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import img1 from "../../New-construction-images/download.jpg";
import Logo from "../../Home-page-images/Logo.jpg";
import product1 from "../../New-construction-images/Dr-Fixit-Brand-LW+-101-1-Litre.png";
import product2 from "../../New-construction-images/Dr-Fixit-Brand-Plaster-Master.png";
import product3 from "../../New-construction-images/Dr-Fixit-Brand-LW-101-30-Litre.png";
import product5 from "../../New-construction-images/Dr-Fixit-Brand-5400-Interior-Wall-Selaer.png";
import product8 from "../../New-construction-images/Dr-Fixit-Brand-302-Super-Latex-18-Litre 02.png";
import product9 from "../../New-construction-images/Fevilock-500-ml.png";
import product10 from "../../New-construction-images/Dr-Fixit-Brand-5100-Exterior-Sealer-18-Litre.png";
import product11 from "../../New-construction-images/Rust-Remover-01-Litre.png";
import product12 from "../../New-construction-images/Dr-Fixit-Brand-302-Super-Latex-1-Litre.png";

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
      "Dr. Fixit Dr.proof LW+ is a specially formulated integral liquid waterproofing compound made from high-quality plasticising agents, polymers, and active additives. It is used as a waterproof additive for cement concrete, mortar, and plaster. The compound enhances the cohesiveness of concrete, reduces segregation minimizes shrinkage cracks, and provides superior waterproofing and durability to structures.",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product1 }],
  },

  {
    id: 2,
    title: "1kg Dr. Fixit 302 Super Latex-Premium | SBR Waterproofing & Bonding Agent for Concrete Repair",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "1 Litre",
    subtitle: "Dr. Fixit 302 Super Latex",
    subtitletwo: "SBR Latex for repairs & waterproofing",
    description:
      "Dr. Fixit 302 Super Latex is a Styrene-Butadiene co-polymer latex designed for waterproofing, bonding, and concrete repair applications. This URP-based formulation enhances the strength, flexibility, and water resistance of cementitious mixes, making it an ideal solution for long-lasting repairs and surface protection.",
    images: [{ id: 1, url: product12 }],
  },

  {
    id: 3,
    title: "5kg Water Proofing & Water-Reducing Admixture, LW+ 101 Dr Fixit Brand",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "5 Litre",
    subtitle: "Dr. Fixit Drproof LW+",
    subtitletwo: "Integral Liquid Waterproofing Compound for Concrete & Plaster",
    description:
      "Integral Liquid Waterproofing Compound for Concrete & Plaster. Dr. Fixit Drproof LW+ is a specially formulated integral liquid waterproofing compound made from high-quality plasticising agents, polymers, and active additives. It is used as a waterproof additive for cement concrete, mortar, and plaster.",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product1 }],
  },

  {
    id: 4,
    title: "5kg Dr. Fixit 302 Super Latex-Premium | SBR Waterproofing & Bonding Agent for Concrete Repair",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "5 Litre",
    subtitle: "Dr. Fixit 302 Super Latex",
    subtitletwo: "SBR Latex for repairs & waterproofing",
    description:
      "Dr. Fixit 302 Super Latex is a Styrene-Butadiene co-polymer latex designed for waterproofing, bonding, and concrete repair applications. This URP-based formulation enhances the strength, flexibility, and water resistance of cementitious mixes.",
    images: [{ id: 1, url: product12 }],
  },

  {
    id: 5,
    title: "18kg Water Proofing & Water-Reducing Admixture, LW+ 101 Dr Fixit Brand",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "18 Litre",
    subtitle: "Dr. Fixit Drproof LW+",
    subtitletwo: "Integral Liquid Waterproofing Compound for Concrete & Plaster",
    description:
      "Dr. Fixit Dr.proof LW+ is a specially formulated integral liquid waterproofing compound made from high-quality plasticising agents, polymers, and active additives. It enhances cohesiveness, reduces shrinkage cracks, and provides superior waterproofing.",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product3 }],
  },

  {
    id: 6,
    title: "30kg Dr. Fixit 302 Super Latex-Premium SBR Waterproofing & Bonding Agent for Concrete Repair",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "30 Litre",
    subtitle: "Dr. Fixit 302 Super Latex",
    subtitletwo: "SBR Latex for repairs & waterproofing",
    description:
      "Dr. Fixit 302 Super Latex is a Styrene-Butadiene co-polymer latex designed for waterproofing, bonding, and concrete repair. It enhances strength, flexibility, and water resistance of cement mixes.",
    images: [{ id: 1, url: product8 }],
  },

  {
    id: 7,
    title: "30kg Water Proofing & Water-Reducing Admixture, LW+ 101 Dr Fixit Brand",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "30 Litre",
    subtitle: "Dr. Fixit Drproof LW+",
    subtitletwo: "Integral Liquid Waterproofing Compound for Concrete & Plaster",
    description:
      "Dr. Fixit Dr.proof LW+ is a specially formulated waterproofing compound that reduces cracking, increases durability, and improves concrete quality.",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product3 }],
  },

  {
    id: 8,
    title: "30kg Dr. Fixit 302 Super Latex-Premium SBR Waterproofing & Bonding Agent",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "30 Litre",
    subtitle: "Dr. Fixit 302 Super Latex",
    subtitletwo: "SBR Latex for repairs & waterproofing",
    description:
      "High-quality SBR waterproofing and bonding agent ideal for concrete repairs, increasing adhesion, and enhancing waterproofing performance.",
    images: [{ id: 1, url: product8 }],
  },

  {
    id: 9,
    title: "18kg Dr. Fixit 5400 Interior Wall Sealer - Water-Based Primer",
    brand: "Dr. Fixit Limited",
    category: "Paints",
    quantity: "18 Litre",
    subtitle: "Dr. Fixit 5400 Interior Wall Sealer",
    subtitletwo: "Excellent Finish Leveling",
    description:
      "A high-quality water-based primer for interior walls. Seals porous surfaces, improves paint adhesion, and ensures a smooth, durable finish.",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product5 }],
  },

  {
    id: 10,
    title: "1 Litre Dr. Fixit 302 Super Latex-Premium SBR Waterproofing & Bonding Agent",
    brand: "Dr. Fixit Limited",
    category: "Admixture",
    quantity: "1 Litre",
    subtitle: "Dr. Fixit 302 Super Latex",
    subtitletwo: "SBR Latex for repairs & waterproofing",
    description:
      "A premium SBR latex additive for waterproofing and bonding. Enhances durability, flexibility, and water resistance of cement mixes.",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product2 }],
  },

  {
    id: 11,
    title: "18kg Dr. Fixit 5100 Exterior Wall Sealer - Water-Based Primer",
    brand: "Dr. Fixit Limited",
    category: "Paints",
    quantity: "18 Litre",
    subtitle: "Dr. Fixit 5100 Exterior Wall Sealer",
    subtitletwo: "Excellent Finish Leveling",
    description:
      "High-performance water-based sealer for exterior walls. Provides moisture protection, increases durability, and enhances finishing coat performance.",
    availablePackaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    images: [{ id: 1, url: product10 }],
  },

  {
    id: 12,
    title: "1kg Dr. Fixit Multi Purpose Rust Remover",
    brand: "Dr. Fixit Limited",
    category: "Rust Remover",
    quantity: "1 Kg",
    subtitle: "Dr. Fixit Rust Remover - Multi-Purpose",
    description:
      "A powerful chemical solution that removes rust, corrosion, and iron oxide deposits from metal tools and construction equipment.",
    availablePackaging: "5ml, 1 litre, and 5 litre",
    images: [{ id: 1, url: product11 }],
  },

  {
    id: 13,
    title: "Fevilock – Premium Synthetic Resin Adhesive (Glue) – 250 gm",
    brand: "Dr. Fixit Limited",
    category: "Glue",
    quantity: "250 gm",
    subtitle: "Fevilock (Glue) - Premium Synthetic Resin Adhesive",
    description:
      "A high-quality, water-based resin adhesive for wood, paper, cardboard, and more. Ideal for home, school, and office use.",
    availablePackaging: "20gm, 50gm, 100gm, 200gm, and 250gm",
    images: [{ id: 1, url: product9 }],
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
                  <li><Link to="#" className="hover:text-yellow-400">CERTIFICATE</Link></li>
                              <li><Link to="/about-us" className="hover:text-yellow-400">ABOUT US</Link></li>
                              <li><Link to="/faqs" className="hover:text-yellow-400">FAQs</Link></li>
                              <li><Link to="/contact" className="hover:text-yellow-400">CONTACT</Link></li>
                 </ul>
               </nav>
      </div>
      </header>

      {/* PRODUCT DETAILS */}
  <section
  id="banner"
  className="w-full py-24 px-4 "
>
  <div className="mx-auto max-w-[1400px]">
    <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0057A3] tracking-wide">
      Product Details
    </h2>
    <div className="w-32 h-1 bg-[#FFCB05] mx-auto mt-4 mb-16 rounded-full"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

      {/* LEFT PRODUCT IMAGE */}
      <div className="flex flex-col items-center">

        {/* MAIN IMAGE */}
<div
  className="w-full max-w-[500px] h-[600px] flex items-center justify-center 
             rounded-3xl border border-gray-200 p-6 
             overflow-hidden group bg-white"
>
  <LazyLoadImage
    src={activeImage}
    alt={product.title}
    effect="blur"
    className="object-contain w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
  />
</div>


        {/* THUMBNAILS */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setProduct(p);
                setActiveImage(p.images[0].url);
              }}
              className={`
                h-[80px] w-[80px] rounded-xl bg-white p-1 shadow-md border 
                transition-all duration-200 hover:shadow-xl 
                ${product.id === p.id ? "border-[#0057A3] shadow-lg scale-105" : "border-gray-300 hover:border-[#0057A3]"}
              `}
            >
              <img
                src={p.images[0].url}
                alt={p.title}
                className="object-contain h-full w-full rounded-lg"
              />
            </button>
          ))}
        </div>

        {/* BUTTON */}
        <button className="mt-10 bg-[#0057A3] text-white px-12 py-4 
                           rounded-2xl font-semibold shadow-lg hover:bg-[#004680] 
                           hover:shadow-xl transition-all duration-300 tracking-wide text-lg">
          Find a Dealer
        </button>
      </div>

      {/* RIGHT PRODUCT DETAILS */}
      <div className="mt-8 md:mt-0 lg:pt-[10px]">
        <div className="space-y-4 text-black">
          {/* Title */}
          {product.title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              {product.title}
            </h2>
          )}

          {/* Product Info */}
          <div className="space-y-2 pt-3 text-lg">
            {product.brand && <p><span className="font-semibold">Brand:</span> {product.brand}</p>}
            {product.category && <p><span className="font-semibold">Category:</span> {product.category}</p>}
            {product.quantity && <p><span className="font-semibold">Quantity:</span> {product.quantity}</p>}
          </div>

          {/* Availability */}
          <p className="pt-2 text-lg"><span className="font-semibold text-black">Availability:</span> <span className="text-green-600 font-medium">In Stock</span></p>

          {/* Description */}
          <div className="pt-6 space-y-3 text-base sm:text-lg leading-relaxed text-gray-700">
            {product.subtitle && <h3 className="text-xl sm:text-2xl font-semibold">{product.subtitle}</h3>}
            {product.subtitletwo && <p>{product.subtitletwo}</p>}
            {product.description && <p>{product.description}</p>}
            {product.availablePackaging && <p><span className="font-semibold">Available Packaging:</span> {product.availablePackaging}</p>}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </section>
  );
};

export default ProductDetails;
