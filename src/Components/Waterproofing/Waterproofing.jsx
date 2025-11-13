
import { useEffect, useState } from "react";
import { FaWhatsapp, FaHandHoldingUsd, FaUserTie } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

import roofImg from "../../Home-page-images/rooftop.png";
import interiorImg from "../../Home-page-images/interior.png";
import bathroomImg from "../../Home-page-images/bathroom.png";
import exteriorImg from "../../Home-page-images/exterior.png";

import foundationImg from "../../Home-page-images/rooftop.png";
import basementImg from "../../Home-page-images/bathroom.png";
import roofCoatingImg from "../../Home-page-images/interior.png";
import tankImg from "../../Home-page-images/exterior.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";



const Waterproofing = ({
  thumbnailSrc = "https://youtu.be/IRQlROp0X-w?si=LMRNEG8Z1046Y8in",
  youtubeId = "VIDEO_ID", // replace with actual YouTube ID
  videoSrc = "https://youtu.be/IRQlROp0X-w?si=LMRNEG8Z1046Y8in", // optional MP4 link
}) => {
const [selected, setSelected] = useState("repair");

  // ✅ Local image array for "Repair | Renovate"
  const repairProducts = [
    {
      title: "Roof Waterproofing",
      img: roofImg,
    },
    {
      title: "Interior Waterproofing",
      img: interiorImg,
    },
    {
      title: "Bathroom Waterproofing",
      img: bathroomImg,
    },
    {
      title: "Exterior Waterproofing",
      img: exteriorImg,
    },
  ];

  // ✅ Local image array for "New Construction"
  const newConstruction = [
    {
      title: "Foundation Waterproofing",
      img: foundationImg,
    },
    {
      title: "Basement Waterproofing",
      img: basementImg,
    },
    {
      title: "Roof Coating",
      img: roofCoatingImg,
    },
    {
      title: "Tank Waterproofing",
      img: tankImg,
    },
  ];




  const items = [
    {
      title: "Structural Durability & Protection of Belongings",
      text:
        "Waterproofing prevents water from seeping into walls and the roof, keeping the structure solid and preserving furniture and possessions from moisture damage.",
    },
    {
      title: "Safeguarding Property & Health",
      text:
        "Dampness and mold weaken building materials and trigger respiratory ailments and allergies. Effective waterproofing mitigates these risks.",
    },
    {
      title: "Cost Efficiency & Reliability",
      text:
        "By waterproofing once and correctly, you avoid repeated repair work – saving both money and time in the long run.",
    },
    {
      title: "Preserving Interior Beauty & Comfort",
      text:
        "No more damp walls, peeling paint, or stains – your home stays fresh, clean, and comfortable inside.",
    },
    {
      title: "Boosting Property Value",
      text:
        "A well-waterproofed house is a long-term asset – it not only attracts buyers but also fetches a higher market price.",
    },
  ];

 const products = selected === "repair" ? repairProducts : newConstruction;

    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation after load
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
   <section>
     <section className="bg-white py-28 px-6 md:px-12 lg:px-20 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#02509F]">
            Why Is Waterproofing Important?
          </h2>
          <p className="mt-4 mb-20 text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            At Dr. Fixit Limited, we firmly believe that when your home is
            properly waterproofed during construction, it guarantees long-lasting
            benefits.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <ul className="space-y-7">
              {items.map((it, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <span className="inline-flex items-center justify-center h-3 w-3 rounded-full bg-[#008bb6]" />
                  </div>
                  <div>
                    <h3 className="text-[#008bb6] font-bold text-lg">
                      {it.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                      {it.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-600">
              During new home construction, <strong className="text-[#02509F]">Dr. Fixit Limited's </strong>
              waterproofing service is not just an expense – it's a strategic
              investment in your home's resilience. It ensures you remain free
              from future maintenance headaches and costs.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-lg shadow-lg overflow-hidden bg-gray-50 w-full">
              {/* Thumbnail */}
              <img
                src={thumbnailSrc}
                alt="Waterproofing video thumbnail"
                className="w-full max-w-full h-auto object-cover block"
              />

              {/* Play button */}
              <button
                aria-label="Play video"
                onClick={() => setIsOpen(true)}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                           bg-white rounded-full shadow-xl w-16 h-16 flex items-center justify-center
                           focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              </button>

              {/* Caption */}
              <div className="p-4 bg-white">
                <p className="text-center text-sm text-gray-500">
                  Explore this video to deepen your understanding of waterproofing
                </p>
              </div>
            </div>

            {/* Floating CTAs (desktop only) */}
                <div
      className={`hidden lg:flex flex-col gap-5 fixed right-8 top-1/3 z-40 transition-all duration-700 ${
        animate ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      {/* Let's Talk Button */}
   {/* Let's Talk Button */}
<a
  href="#contact"
  className="flex justify-center items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-leftRight"
>
   Let's Talk Button 
</a>

{/* Find a Dealer Button */}
<a
  href="#dealers"
  className="flex items-center gap-3 bg-yellow-400 text-black px-4 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-rightLeft"
>
  Find a Dealer Button
</a>


    
    </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Waterproofing video"
        >
          <div
            className="fixed inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-10 max-w-4xl w-full mx-auto bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-20 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 focus:outline-none"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Embed */}
            <div className="w-full relative pt-[56.25%]">
              {videoSrc ? (
                <video
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                  autoPlay
                >
                  <source src={videoSrc} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  title="Waterproofing video"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    {/* ✅ Full-Screen Fixed “Why Choose Dr. Fixit?” Section */}


    </section>
    <section className="bg-[#02509F] text-white w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
  <div className="max-w-[1400px] mx-auto text-center py-20">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Why Choose Dr. Fixit?
    </h2>
    <p className="text-lg md:text-xl text-gray-100 mb-16">
      Complete Waterproofing Solutions from the Industry Leader
    </p>

    {/* Features */}
    <div className="grid md:grid-cols-3 gap-12 text-center">
      {/* 1 */}
      <div className="flex flex-col items-center space-y-4">
        <GiWaterDrop className="text-[#FFD700] text-6xl" />
        <h3 className="text-xl md:text-2xl font-semibold">
          Pioneers in Waterproofing
        </h3>
        <p className="text-gray-100 leading-relaxed max-w-sm mx-auto">
          Dr. Fixit is a trusted name in waterproofing, offering a wide
          range of advanced solutions tailored for every part of your home.
          Our products are developed through world-class research centers.
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center space-y-4">
        <FaUserTie className="text-[#FFD700] text-6xl" />
        <h3 className="text-xl md:text-2xl font-semibold">
          Certified Dr. Fixit Experts
        </h3>
        <p className="text-gray-100 leading-relaxed max-w-sm mx-auto">
          Our applicators are professionally trained and certified to ensure
          consistent, high-quality service. Every expert comes equipped with
          the skills and knowledge to deliver reliable performance.
        </p>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center space-y-4">
        <FaHandHoldingUsd className="text-[#FFD700] text-6xl" />
        <h3 className="text-xl md:text-2xl font-semibold">
          Transparent and Fair Pricing
        </h3>
        <p className="text-gray-100 leading-relaxed max-w-sm mx-auto">
          Dr. Fixit offers fully transparent and fair pricing providing clear
          cost breakdowns for all its products and services to build trust and
          confidence with customers.
        </p>
      </div>
    </div>

    {/* Buttons */}
  
  </div>
</section>
    <section className="bg-white py-20 px-6 md:px-16 lg:px-28 w-full">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#02509F] mb-8">
          Why Choose Dr. Fixit?
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setSelected("repair")}
            className={`px-6 py-3 text-lg font-semibold rounded-l-full transition-all ${
              selected === "repair"
                ? "bg-[#FFD700] text-black"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Repair | Renovate
          </button>
          <button
            onClick={() => setSelected("new")}
            className={`px-6 py-3 text-lg font-semibold rounded-r-full transition-all ${
              selected === "new"
                ? "bg-[#FFD700] text-black"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            New Construction
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
                <LazyLoadImage
                  src={item.img}
                  alt={item.title}
                  
                  className="w-full h-[250px] object-cover"
                />
              <p className="text-lg font-medium text-gray-800 mt-4 mb-6">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
       
      </div>
    </section>
   </section>
  );
};

export default Waterproofing;
