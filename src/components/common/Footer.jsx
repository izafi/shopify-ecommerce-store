import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const DISPLAY_FONT = "'Fraunces', Georgia, serif";

const Footer = () => {
  return (
    <footer className="bg-[#17241C] text-[#F5F1E6] mt-12 sm:mt-16 lg:mt-20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              style={{ fontFamily: DISPLAY_FONT }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight"
            >
              Shop<span className="text-[#C7A15C]">ify</span>
            </Link>

            <p className="text-[#C9C6B8] text-sm sm:text-base lg:text-[17px] max-w-md mt-4 sm:mt-5 leading-6 sm:leading-7 lg:leading-8">
              Quality products, honest prices, and a shopping experience
              built around what people actually need — every day.
            </p>

            <Link
              to="/product"
              className="inline-flex items-center gap-2 mt-6 sm:mt-7 border border-[#C7A15C] text-[#C7A15C] hover:bg-[#C7A15C] hover:text-[#17241C] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-[15px] font-medium transition-colors duration-200"
            >
              Browse products
              <ArrowUpRight size={15} className="sm:w-4 sm:h-4" strokeWidth={1.75} />
            </Link>
          </div>

          {/* Links */}
          <div>
            <h3
              style={{ fontFamily: DISPLAY_FONT }}
              className="text-base sm:text-lg lg:text-xl font-medium mb-4 sm:mb-5"
            >
              Explore
            </h3>

            <ul className="space-y-2.5 sm:space-y-3">

              {[
                { name: "Home", to: "/" },
                { name: "Products", to: "/product" },
                { name: "Recipes", to: "/recipes" },
                { name: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[#C9C6B8] hover:text-[#C7A15C] text-sm sm:text-[15px] lg:text-base transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3
              style={{ fontFamily: DISPLAY_FONT }}
              className="text-base sm:text-lg lg:text-xl font-medium mb-4 sm:mb-5"
            >
              Contact
            </h3>

            <div className="space-y-3.5 sm:space-y-4">

              {/* Email */}
              <div className="flex gap-2.5 sm:gap-3">
                <Mail size={16} className="text-[#C7A15C] mt-1 shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="text-[10px] sm:text-xs text-[#8A8776]">Email</p>
                  <p className="text-[#E7E4D6] text-xs sm:text-sm lg:text-[15px] mt-1 break-all">
                    support@shopify.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-2.5 sm:gap-3">
                <Phone size={16} className="text-[#C7A15C] mt-1 shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="text-[10px] sm:text-xs text-[#8A8776]">Phone</p>
                  <p className="text-[#E7E4D6] text-xs sm:text-sm lg:text-[15px] mt-1">
                    +92 324 8808971
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-2.5 sm:gap-3">
                <MapPin size={16} className="text-[#C7A15C] mt-1 shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="text-[10px] sm:text-xs text-[#8A8776]">Location</p>
                  <p className="text-[#E7E4D6] text-xs sm:text-sm lg:text-[15px] mt-1">
                    Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#F5F1E6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">

          <p className="text-[10px] sm:text-xs lg:text-sm text-[#8A8776] text-center sm:text-left">
            © 2026 Shopify. All rights reserved.
          </p>

          <p className="text-[10px] sm:text-xs lg:text-sm text-[#6E6C5E] text-center sm:text-right">
            Built with React & Tailwind CSS
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;