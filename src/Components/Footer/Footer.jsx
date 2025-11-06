import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0057A3] text-white py-16 px-10 md:px-28">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Products Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Products Service
          </h3>
          <ul className="space-y-3 text-base leading-relaxed">
            <li className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer">
              New Construction
            </li>
            <li className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer">
              Repair Construction
            </li>
            <li className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer">
              Remover
            </li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Corporate Office
          </h3>
          <p className="text-base leading-relaxed text-gray-100">
            House #28, Block-D, Road #4 <br />
            Rampura Banasree, Dhaka.
          </p>
        </div>

        {/* Factory */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Factory
          </h3>
          <p className="text-base leading-relaxed text-gray-100">
            Softotia, Batka Hat, Tongibari <br />
            Munshiganj-1521, Bangladesh.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
            Contact Us
          </h3>
          <p className="text-base mb-1">Cell: +8801788360303</p>
          <p className="text-base mb-4">E-mail: drfixit.bd@gmail.com</p>
          <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">
            Social Links
          </h3>
          <div className="flex gap-5 text-2xl">
            <a
              href="#"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-400 my-8"></div>

      {/* Footer Bottom */}
      <div className="text-center text-base text-gray-100 font-medium tracking-wide">
        Jahid Hossen
      </div>
    </footer>
  );
};

export default Footer;
