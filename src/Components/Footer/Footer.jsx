import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer className="bg-[#0057A3] text-white py-16 px-10 md:px-28">
  <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

    {/* Help & Support */}
   
<div>
  <h3 className="text-xl font-semibold mb-12 tracking-wide">Help & Support</h3>
  
  <ul className="space-y-3 text-base leading-relaxed">
    <li><Link to="/shipping-policy" className="hover:text-yellow-300">Shipping Policy</Link></li>
    <li><Link to="/refund-policy" className="hover:text-yellow-300">Return & Refund Policy</Link></li>
    <li><Link to="/terms-of-service" className="hover:text-yellow-300">Terms of Service</Link></li>
    <li><Link to="/privacy-policy" className="hover:text-yellow-300">Privacy Policy</Link></li>
    <li><Link to="/about-us" className="hover:text-yellow-300">About Us</Link></li>
    <li><Link to="/faqs" className="hover:text-yellow-300">FAQs</Link></li>
    <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
  </ul>
</div>

    {/* Products Service */}
    <div>
      <h3 className="text-xl font-semibold mb-12  tracking-wide">Products Service</h3>
      <ul className="space-y-3 text-base leading-relaxed">
        <li className="hover:text-yellow-300 cursor-pointer">New Construction</li>
        <li className="hover:text-yellow-300 cursor-pointer">Repair Construction</li>
        <li className="hover:text-yellow-300 cursor-pointer">Remover</li>
      </ul>
    </div>

    {/* Corporate Office */}
    <div>
      <h3 className="text-xl font-semibold mb-12 tracking-wide">Corporate Office</h3>
      <p className="text-base leading-relaxed text-gray-100">
        House #28, Block-D, Road #4 <br />
        Rampura Banasree, Dhaka.
      </p>
    </div>

    {/* Factory */}
    <div>
      <h3 className="text-xl font-semibold mb-12 tracking-wide">Factory</h3>
      <p className="text-base leading-relaxed text-gray-100">
        Softotia, Batka Hat, Tongibari <br />
        Munshiganj-1521, Bangladesh.
      </p>
    </div>

    {/* Contact & Social */}
    <div>
  <h3 className="text-xl font-semibold mb-12 tracking-wide">Contact Us</h3>
  <p className="text-base mb-1">Cell: +880 1898-795771</p>
  <p className="text-base mb-4">E-mail: dr.fixit.bd@gmail.com</p>

  <h3 className="text-xl font-semibold mt-6 mb-6 tracking-wide">Social Links</h3>

  <div className="flex flex-col gap-3 text-lg">

    <a className="flex items-center gap-3 transition-all cursor-pointer 
      hover:text-[#1877F2] hover:scale-105">
      <FaFacebookF size={20} className="bg-[#1877F2]" /> Facebook
    </a>

    <a className="flex items-center gap-3 transition-all cursor-pointer 
      hover:text-[#FF0000] hover:scale-105">
      <FaYoutube size={22} className="text-[#FF0000]"  /> Youtube
    </a>

    <a className="flex items-center gap-3 cursor-pointer transition-all duration-300 
  hover:bg-clip-text hover:text-transparent 
  hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:scale-105">
  <FaInstagram size={20} className="text-[#E4405F]" /> Instagram
</a>


  </div>
</div>

  </div>

  {/* Divider */}
  <div className="border-t border-blue-400 my-8"></div>

  {/* Footer Bottom */}
  <div className="text-center text-base text-gray-100 font-medium tracking-wide">
    © dr.fixit limited
  </div>
</footer>

  );
};

export default Footer;
