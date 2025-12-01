import React, { useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../Home-page-images/Logo.jpg";
import img1 from "../../AboutUs-images/FixitGroup-Contact-Banner.png";
import emailjs from "emailjs-com";

const Contactus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [img1];

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_a4t7uq6",
        "template_3wjfacu",
        form.current,
        "jpez9azGNJatkyjQE"
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setIsSending(false);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section className="relative">
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px] transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Banner Text */}
        <div className="absolute bottom-8 left-5 sm:bottom-10 sm:left-10 md:left-20 lg:left-40 text-left ">
          <p className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl drop-shadow-lg">
            Contact <span className="font-bold">Us</span>
          </p>
        </div>

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
                    <li><Link to="/about-us" className="hover:text-yellow-400">ABOUT US</Link></li>
                    <li><Link to="/faqs" className="hover:text-yellow-400">FAQs</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-400 text-yellow-500">CONTACT</Link></li>
      </ul>
    </nav>
  </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <section id="banners" className="  bg-[#FAF9F6] py-20 sm:py-28 md:py-40 px-4 sm:px-10 md:px-20 lg:px-40">
        <div  className="mb-10 text-center md:text-left">
          <p className="text-sm font-semibold text-black mb-2">
            <span className="text-red-600">//</span> GET IN TOUCH
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Let’s work together to create <br className="hidden sm:block" />
            <span className="font-bold bg-gradient-to-r from-[#C62828] to-[#F57C00] bg-clip-text text-transparent">
              the life and business
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Left Form */}
          <div className="bg-black text-white backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Send A Message</h3>
            <p className="text-sm text-gray-300 mb-6">
              Unlock your potential with expert guidance! Schedule a free
              consultation toward personal and business success.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
                />
                <input
                  type="tel"
                  name="company"
                  placeholder="Phone Number"
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className={`flex items-center justify-center gap-2 bg-gradient-to-r from-[#C62828] to-[#F57C00] text-white font-semibold px-6 py-2 rounded-full transition-transform duration-200 ${
                  isSending
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-105 hover:opacity-90"
                }`}
              >
                {isSending ? "Sending..." : "Submit Message"}{" "}
                <ArrowRight size={18} />
              </button>

              {sent && (
                <p className="text-green-500 text-sm mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Right Info */}
          <div className="flex flex-col justify-center space-y-10 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Call Us
              </h4>
              <p className="text-base text-gray-600 mb-3">
                Call us today for personalized coaching and transformative
                growth!
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 font-medium text-gray-900 text-lg justify-center md:justify-start">
                <Phone className="text-[#F57C00] mx-auto sm:mx-0" size={24} />
                <span>+880 1898-795771</span>
              </div>
            </div>

            <hr className="border-t border-gray-300 w-4/5 mx-auto md:mx-0" />

            <div>
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Email Us
              </h4>
              <p className="text-base text-gray-600 mb-3">
                Email us now for expert coaching and tailored growth solutions!
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 font-medium text-gray-900 text-lg justify-center md:justify-start">
                <Mail className="text-[#F57C00] mx-auto sm:mx-0" size={24} />
                <span>support@fixitgroupbd.com</span>
              </div>
            </div>

            <hr className="border-t border-gray-300 w-4/5 mx-auto md:mx-0" />

            <div>
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Visit Us
              </h4>
              <p className="text-base text-gray-600 mb-3">
                Visit us for personalized coaching and guidance toward lasting
                success!
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 font-medium text-gray-900 text-lg justify-center md:justify-start">
                <MapPin className="text-[#F57C00] mx-auto sm:mx-0" size={24} />
                <span>
                  House No. 09, Road No. 02, Block-C, Rampura, Banasree.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contactus;
