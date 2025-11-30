import React, { useState, useRef, useEffect } from "react";
import {
  FaWater,
  FaShieldAlt,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";

import Logo from "../../Home-page-images/Logo.jpg";

// Use two DIFFERENT images here
import img1 from "../../Home-page-images/Banner.jpg";
// import img2 from "../../Home-page-images/Banner.jpg";  // <-- FIXED (must be different)

import video1 from "../../Home-page-images/Dr-Fixit-Web-Home-Page.mp4";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link, NavLink } from "react-router-dom";

const TermsService = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);

  // Slides (Images + Video)
  const slides = [
    { type: "image", src: img1 },
    // { type: "image", src: img2 },
    { type: "video", src: video1 },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Play Video
  useEffect(() => {
    const s = slides[activeSlide];
    if (s.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activeSlide]);

  return (
    <section>
      <header className="relative min-h-screen overflow-hidden">
        {/* Background Image + Video Fader */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {slides.map((slide, i) => {
            const isActive = activeSlide === i;

            return slide.type === "video" ? (
              <video
                key={i}
                ref={videoRef}
                src={slide.src}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                muted
                loop
              />
            ) : (
              <LazyLoadImage
                key={i}
                src={slide.src}
                alt="hero-slide"
                className={`absolute inset-0 w-full h-full object-cover  duration-[1500ms] 
    brightness-110 ${isActive ? "opacity-100" : "opacity-0"}`}
              />
            );
          })}

          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navbar */}
        <div
          className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: "1500px" }}
        >
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img
                className="h-12 md:h-16"
                src={Logo}
                alt="Dr Fixit Ltd Logo"
                loading="lazy"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8 text-white font-medium bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-yellow-400" : "text-white"
                    } hover:text-yellow-400`
                  }
                >
                  HOME
                </NavLink>
              </li>

              {/* Products Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center space-x-1 hover:text-yellow-400"
                >
                  <span>PRODUCTS</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute bg-yellow-400 text-black mt-4 w-48 rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/newconstruction"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      New Construction
                    </Link>
                    <Link
                      to="/repair"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      Repair Construction
                    </Link>
                    <Link
                      to="/remover"
                      className="block px-4 py-2 hover:bg-yellow-500"
                    >
                      Remover
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/about-us" className="hover:text-yellow-400">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-yellow-400">
                  CERTIFICATE
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-yellow-400">
                  RESOURCE
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="absolute top-20 right-4 w-64 bg-white rounded-lg shadow-xl p-4 z-20 md:hidden">
                <ul className="space-y-4 text-gray-800">
                  <li>
                    <Link to="#" className="block hover:text-yellow-400">
                      PRODUCTS
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block hover:text-yellow-400">
                      RESOURCE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block hover:text-yellow-400">
                      CERTIFICATE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block hover:text-yellow-400">
                      TEAM
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block hover:text-yellow-400">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>

        {/* Content Section */}
      </header>
      <section className="py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto rounded-2xl p-8 md:p-12 text-black">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Terms of service
          </h1>

          {/* Policy Description */}
          <div className="space-y-6 text-lg md:text-xl ">
            <h6 className=" text-black font-semibold">OVERVIEW</h6>
            <p>
              Welcome to Dr. Fixit Limited.! The terms “we”, “us” and “our”
              refer to Dr. Fixit Limited.. Dr. Fixit Limited. op erates this
              store and website, including all related information, content,
              features, tools, products and ser vices in order to provide you,
              the customer, with a curated shopping experience (the “Services”).
              Dr. Fixit Limited. is powered by Shopify, which enables us to
              provide the Services to you. The below terms and con ditions,
              together with any policies referenced herein (these “Terms of
              Service” or “Terms”) describe your rights and responsibilities
              when you use the Services. Please read these Terms of Service
              carefully, as they include important information about your legal
              rights and cover areas such as warranty disclaimers and
              limitations of liability. By visiting, interacting with or using
              our Services, you agree to be bound by these Terms of Service and
              our Privacy Policy :
              https://www.drfixitbd.org/policies/privacy-policy
            </p>
          </div>

          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 1 - ACCESS AND ACCOUNT
            </h6>
            <p>
              {" "}
              By agreeing to these Terms of Service, you represent that you are
              at least the age of majority in your state or province of
              residence, and you have given us your consent to allow any of your
              minor dependents to use the Services on devices you own, purchase
              or manage. To use the Services, including accessing or browsing
              our online stores or purchasing any of the products or services we
              offer, you may be asked to provide cer tain information, such as
              your email address, billing, payment, and shipping information.
              You represent and warrant that all the information you provide in
              our stores is correct, current and complete and that you have all
              rights necessary to provide this information. You are solely
              responsible for maintaining the security of your account
              credentials and for all of your account activity. You may not
              transfer, sell, assign, or license your account to any other
              person.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 2 - OUR PRODUCTS
            </h6>
            <p>
              {" "}
              We have made every effort to provide an accurate representation of
              our products and services in our online stores. However, please
              note that colors or product appearance may differ from how they
              may appear on your screen due to the type of device you use to
              access the store and your device settings and configuration. We do
              not warrant that the appearance or quality of any products or
              services purchased by you will meet your expectations or be the
              same as depicted or rendered in our online stores. All
              descriptions of products are subject to change at any time without
              notice at our sole discretion. We re serve the right to
              discontinue any product at any time and may limit the quantities
              of any products that we offer to any person, geographic region or
              jurisdiction, on a case-by-case basis.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 3 - ORDERS
            </h6>
            <p>
              {" "}
              When you place an order, you are making an offer to purchase.
              MotoFactory Parts reserves the right to accept or decline your
              order for any reason at its discretion. Your order is not accepted
              until MotoFactory Parts confirms acceptance. We must receive and
              process your payment before your order is accepted. Please review
              your order carefully before submitting, as MotoFactory Parts may
              be unable to accommodate cancellation requests after an order is
              accepted. In the event that we do not accept, make a change to, or
              cancel an order, we will attempt to notify you by contacting the
              e-mail, billing address, and/or phone number provided at the time
              the order was made. Your purchases are subject to return or
              exchange solely in accordance with our Refund Policy :
              https://www.drfixitbd.org/policies/refund-policy. You represent
              and warrant that your purchases are for your own personal or
              household use and not for commercial resale or export.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 4 - PRICES AND BILLING
            </h6>
            <p>
              {" "}
              Prices, discounts and promotions are subject to change without
              notice. The price charged for a product or service will be the
              price in effect at the time the order is placed and will be set
              out in your order confirma tion email. Unless otherwise expressly
              stated, posted prices do not include taxes, shipping, handling,
              cus toms or import charges. Prices posted in our online stores may
              be different from prices offered in physical stores or in online
              or other stores operated by third parties. We may offer, from time
              to time, promotions on the Services that may affect pricing and
              that are governed by terms and conditions separate from these
              Terms. If there is a conflict between the terms for a promotion
              and these Terms, the promotion terms will govern. You agree to
              provide current, complete and accurate purchase, payment and
              account information for all purchases made at our stores. You
              agree to promptly update your account and other information, in
              cluding your email address, credit card numbers and expiration
              dates, so that we can complete your trans actions and contact you
              as needed. You represent and warrant that (i) the credit card
              information you pro vide is true, correct, and complete, (ii) you
              are duly authorized to use such credit card for the purchase,
              (iii) charges incurred by you will be honored by your credit card
              company, and (iv) you will pay charges incurred by you at the
              posted prices, including shipping and handling charges and all
              applicable taxes, if any.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              {" "}
              SECTION 5 - SHIPPING AND DELIVERY
            </h6>
            <p>
              {" "}
              We are not liable for shipping and delivery delays. All delivery
              times are estimates only and are not guaran teed. We are not
              responsible for delays caused by shipping carriers, customs
              processing, or events outside our control. Once we transfer
              products to the carrier, title and risk of loss passes to you.
            </p>
          </div>

          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 6 - INTELLECTUAL PROPERTY
            </h6>
            <p>
              Our Services, including but not limited to all trademarks, brands,
              text, displays, images, graphics, product reviews, video, and
              audio, and the design, selection, and arrangement thereof, are
              owned by MotoFactory Parts, its affiliates or licensors and are
              protected by U.S. and foreign patent, copyright and other
              intellectual property laws. These Terms permit you to use the
              Services for your personal, non-commercial use only. You must not
              reproduce, distribute, modify, create derivative works of,
              publicly display, publicly perform, repub lish, download, store,
              or transmit any of the material on the Services without our prior
              written consent. Except as expressly provided herein, nothing in
              these Terms grants or shall be construed as granting a li cense or
              other rights to you under any patent, trademark, copyright, or
              other intellectual property of Moto Factory Parts, Shopify or any
              third party. Unauthorized use of the Services may be a violation
              of federal and state intellectual property laws. All rights not
              expressly granted herein are reserved by MotoFactory Parts.
              MotoFactory Parts’s names, logos, product and service names,
              designs, and slogans are trademarks of Mo toFactory Parts or its
              affiliates or licensors. You must not use such trademarks without
              the prior written permission of MotoFactory Parts. Shopify’s name,
              logo, product and service names, designs and slogans are
              trademarks of Shopify. All other names, logos, product and service
              names, designs, and slogans on the Ser vices are the trademarks of
              their respective owners.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 7 - OPTIONAL TOOLS
            </h6>
            <p>
              You may be provided with access to customer tools offered by third
              parties as part of the Services, which we neither monitor nor have
              any control nor input. You acknowledge and agree that we provide
              access to such tools “as is” and “as available” without any
              warranties, representations or conditions of any kind and without
              any endorsement. We shall have no liability whatsoever arising
              from or relating to your use of op tional third-party tools. Any
              use by you of the optional tools offered through the site is
              entirely at your own risk and discretion and you should ensure
              that you are familiar with and approve of the terms on which tools
              are provided by the relevant third-party provider(s). We may also,
              in the future, offer new features through the Services (including
              the release of new tools and resources). Such new features shall
              also be deemed part of the Services and are subject to these Terms
              of Service.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              {" "}
              SECTION 8 - THIRD-PARTY LINKS
            </h6>
            <p>
              {" "}
              The Services may contain materials and hyperlinks to websites
              provided or operated by third parties (in cluding any embedded
              third party functionality). We are not responsible for examining
              or evaluating the content or accuracy of any third-party materials
              or websites you choose to access. If you decide to leave the
              Services to access these materials or third party sites, you do so
              at your own risk. We are not liable for any harm or damages
              related to your access of any third-party websites, or your
              purchase or use of any prod ucts, services, resources, or content
              on any third-party websites. Please review carefully the
              third-party's policies and practices and make sure you understand
              them before you engage in any transaction. Com plaints, claims,
              concerns, or questions regarding third-party products and services
              should be directed to the third-party.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              {" "}
              SECTION 9 - RELATIONSHIP WITH SHOPIFY
            </h6>
            <p>
              {" "}
              MotoFactory Parts is powered by Shopify, which enables us to
              provide the Services to you. However, any sales and purchases you
              make in our Store are made directly with MotoFactory Parts. By
              using the Services, you acknowledge and agree that Shopify is not
              responsible for any aspect of any sales between you and
              MotoFactory Parts, including any injury, damage, or loss resulting
              from purchased products and services. You hereby expressly release
              Shopify and its affiliates from all claims, damages, and
              liabilities arising from or related to your purchases and
              transactions with MotoFactory Parts.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 10 - PRIVACY POLICY
            </h6>
            <p>
              {" "}
              All personal information we collect through the Services is subject to our Privacy Policy : https://www.drfix
itbd.org/policies/privacy-policy. Because the Services are hosted by Shopify, Shopify collects and processes 
personal information about your access to and use of the Services in order to provide and improve the Ser
vices for you. Information you submit to the Services will be transmitted to and shared with Shopify as well 
as third parties that may be located in other countries than where you reside, in order to provide services 
to you. Review our privacy policy : https://www.drfixitbd.org/policies/privacy-policy.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              {" "}
              SECTION 11 - FEEDBACK
            </h6>
            <p>
              {" "}
               If you submit, upload, post, email, or otherwise transmit any ideas, suggestions, feedback, reviews, propos
als, plans, or other content (collectively, “Feedback”), you grant us a perpetual, worldwide, sublicensable, 
royalty-free license to use, reproduce, modify, publish, distribute and display such Feedback in any medium 
for any purpose, including for commercial use. We may, for example, use our rights under this license to 
operate, provide, evaluate, enhance, improve and promote the Services and to perform our obligations and 
exercise our rights under the Terms of Service. You also represent and warrant that: (i) you own or have all 
necessary rights to all Feedback; (ii) you have disclosed any compensation or incentives received in connec
tion with your submission of Feedback; and (iii) your Feedback will comply with these Terms. We are and 
shall be under no obligation (1) to maintain your Feedback in confidence; (2) to pay compensation for your 
Feedback; or (3) to respond to your Feedback. We may, but have no obligation to, monitor, edit or remove 
Feedback that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defama
tory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these 
Terms of Service. You agree that your Feedback will not violate any right of any third-party, including copy
right, trademark, privacy, personality or other personal or proprietary right. You further agree that your 
Feedback will not contain libelous or otherwise unlawful, abusive or obscene Feedback, or contain any com
puter virus or other malware that could in any way affect the operation of the Services or any related web
site. You may not use a false email address, pretend to be someone other than yourself, or otherwise mis
lead us or third-parties as to the origin of any Feedback. You are solely responsible for any Feedback you 
make and its accuracy. We take no responsibility and assume no liability for any Feedback posted by you or 
any third-party
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 12 - ERRORS, INACCURACIES AND OMISSIONS
            </h6>
            <p>
              {" "}
              Occasionally there may be information on or in the Services that contain typographical errors, inaccuracies 
or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, 
transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to 
change or update information or cancel orders if any information is inaccurate at any time without prior 
notice (including after you have submitted your order).
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 13 - PROHIBITED USES
            </h6>
            <p>
              {" "}
           You may access and use the Services for lawful purposes only. You may not access or use the Services, di
rectly or indirectly: (a) for any unlawful or malicious purpose; (b) to violate any international, federal, provin
cial or state regulations, rules, laws, or local ordinances; (c) to infringe upon or violate our intellectual prop
erty rights or the intellectual property rights of others; (d) to harass, abuse, insult, harm, defame, slander, 
disparage, intimidate, or harm any of our employees or any other person; (e) to transmit false or mislead
ing information; (f) to send, knowingly receive, upload, download, use, or re-use any material that does not 
comply with the these Terms; (g) to transmit, or procure the sending of, any advertising or promotional ma
terial, including any “junk mail,” “chain letter,” “spam,” or any other similar solicitation; (h) to impersonate or 
attempt to impersonate any other person or entity; or (i) to engage in any other conduct that restricts or in
hibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm MotoFactory 
Parts, Shopify or users of the Services, or expose them to liability. In addition, you agree not to: (a) upload 
or transmit viruses or any other type of malicious code that will or may be used in any way that will affect 
the functionality or operation of the Services; (b) reproduce, duplicate, copy, sell, resell or exploit any por
tion of the Services; (c) collect or track the personal information of others; (d) spam, phish, pharm, pretext, 
spider, crawl, or scrape; or (e) interfere with or circumvent the security features of the Services or any relat
ed website, other websites, or the Internet. We reserve the right to suspend, disable, or terminate your ac
count at any time, without notice, if we determine that you have violated any part of these Terms.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 14 - TERMINATION
            </h6>
            <p>
              {" "}
             We may terminate this agreement or your access to the Services (or any part thereof) in our sole discretion 
at any time without notice, and you will remain liable for all amounts due up to and including the date of 
termination. The following sections will continue to apply following any termination: Intellectual Property, 
Feedback, Termination, Disclaimer of Warranties, Limitation of Liability, Indemnification, Severability, 
Waiver; Entire Agreement, Assignment, Governing Law, Privacy Policy, and any other provisions that by 
their nature should survive termination.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 15 - DISCLAIMER OF WARRANTIES
            </h6>
            <p>
              {" "}
               The information presented on or through the Services is made available solely for general information pur
poses. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you 
place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from 
any reliance placed on such materials by you or any other visitor to the Services, or by anyone who may be 
informed of any of its contents.
            </p>
            <p className="mt-5">
              {" "}
             EXCEPT AS EXPRESSLY STATED BY MotoFactory Parts, THE SERVICES AND ALL PRODUCTS OFFERED 
THROUGH THE SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' FOR YOUR USE, WITHOUT ANY REPRE
SENTATION, WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ALL IM
PLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PAR
TICULAR PURPOSE, DURABILITY, TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE, REPRESENT OR 
WARRANT THAT YOUR USE OF THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE. 
SOME JURISDICTIONS LIMIT OR DO NOT ALLOW THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES SO 
THE ABOVE DISCLAIMER MAY NOT APPLY TO YOU.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              {" "}
              SECTION 16 - LIMITATION OF LIABILITY
            </h6>
            <p>
              {" "}
           TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO CASE SHALL MotoFactory Parts, OUR PARTNERS, DIREC
TORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, SERVICE PROVIDERS OR LICENSORS, OR 
THOSE OF SHOPIFY AND ITS AFFILIATES, BE LIABLE FOR ANY INJURY, LOSS, CLAIM, OR ANY DIRECT, INDI
RECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING, WITH
OUT LIMITATION, LOST PROFITS, LOST REVENUE, LOST SAVINGS, LOSS OF DATA, REPLACEMENT COSTS, OR 
ANY SIMILAR DAMAGES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY 
OR OTHERWISE, ARISING FROM YOUR USE OF ANY OF THE SERVICES OR ANY PRODUCTS PROCURED USING 
THE SERVICES, OR FOR ANY OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF THE SERVICES OR ANY 
PRODUCT, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN ANY CONTENT, OR ANY LOSS 
OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SERVICES OR ANY CONTENT (OR 
PRODUCT) POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, EVEN IF ADVISED 
OF THEIR POSSIBILITY.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 17 - INDEMNIFICATION
            </h6>
            <p>
              {" "}
              You agree to indemnify, defend and hold harmless MotoFactory Parts, Shopify, and our affiliates, partners, 
officers, directors, employees, agents, contractors, licensors, and service providers from any losses, damag
es, liabilities or claims, including reasonable attorneys’ fees, payable to any third party due to or arising out 
of (1) your breach of these Terms of Service or the documents they incorporate by reference, (2) your viola
tion of any law or the rights of a third party, or (3) your access to and use of the Services.
 We will notify you of any indemnifiable claim, provided that a failure to promptly notify will not relieve you 
of your obligations unless you are materially prejudiced. We may control the defense and settlement of 
such claim at your expense, including choice of counsel, but will not settle any claim requiring non-mone
tary obligations from you without your consent (not to be unreasonably withheld). You will cooperate in the 
defense of indemnified claims, including by providing relevant documents..
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 18 - SEVERABILITY
            </h6>
            <p>
              {" "}
               In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforce
able, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and 
the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination 
shall not affect the validity and enforceability of any other remaining provisions.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 19 - WAIVER; ENTIRE AGREEMENT
            </h6>
            <p>
              {" "}
            The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute 
a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us 
on this site or in respect to the Service constitutes the entire agreement and understanding between you 
and us and governs your use of the Service, superseding any prior or contemporaneous agreements, com
munications and proposals, whether oral or written, between you and us (including, but not limited to, any 
prior versions of the Terms of Service). Any ambiguities in the interpretation of these Terms of Service shall 
not be construed against the drafting party.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 20 - ASSIGNMENT
            </h6>
            <p>
              {" "}
         You may not delegate, transfer or assign this Agreement or any of your rights or obligations under these 
Terms without our prior written consent, and any such attempt will be null and void. We may transfer, 
assign, or delegate these Terms and our rights and obligations without consent or notice to you.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 21 - GOVERNING LAW
            </h6>
            <p>
              {" "}
             These Terms of Service and any separate agreements whereby we provide you Services shall be governed 
by and construed in accordance with the federal and state or territorial courts in the jurisdiction where Mo
toFactory Parts is headquartered. You and MotoFactory Parts consent to venue and personal jurisdiction in 
such courts.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 22 - HEADINGS
            </h6>
            <p>
              {" "}
             The headings used in this agreement are included for convenience only and will not limit or otherwise 
affect these Terms.
            </p>
          </div>
          <div className="overflow-x-auto mt-8 md:text-xl">
            <h6 className="text-black font-semibold pb-2.5">
              SECTION 23 - CHANGES TO TERMS OF SERVICE
            </h6>
            <p>
              {" "}
               You can review the most current version of the Terms of Service at any time on this page.
 We reserve the right, in our sole discretion, to update, change, or replace any part of these Terms of Service 
by posting updates and changes to our website. It is your responsibility to check our website periodically 
for changes. We will notify you of any material changes to these Terms in accordance with applicable law, 
and such changes will be effective on the date specified in the notice. Your continued use of or access to 
the Services following the posting of any changes to these Terms of Service constitutes acceptance of those 
changes.
            </p>
          </div>
            <div className="mt-12  pt-6 space-y-2 text-lg md:text-xl">
      <h3 className="text-xl md:text-2xl  font-semibold">Contact Information:</h3>
      <p>Phone: +880 1898-795771</p>
      <p>Email: <a href="mailto:support@fixitgroupbd.com" className="text-black ">support@fixitgroupbd.com</a></p>
      <p>Address: House No. 09, Road No. 02, Block-C, Rampura Banasree, Dhaka-1219.</p>

      <h3 className="text-xl md:text-2xl font-semibold mt-12">Support Hours:</h3>
      <p>Monday to Friday: 10:00 AM to 5:00 PM</p>

      <h3 className="text-xl md:text-2xl font-semibold mt-12">Company Information:</h3>
      <p>Company Name: Dr. Fixit Limited</p>
      <p>Company Reg No: C-196176</p>
    </div>
        </div>
      </section>
    </section>
  );
};

export default TermsService;
