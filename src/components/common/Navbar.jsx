import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

/**
 * Font note: this design pairs a serif display face with a grotesk sans.
 * Add this to your index.html <head> once for the full effect (falls back
 * to Georgia / system sans gracefully if omitted):
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

const DISPLAY_FONT = "'Fraunces', Georgia, serif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F1E6] border-b border-[#17241C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-[70px] lg:h-[76px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            style={{ fontFamily: DISPLAY_FONT }}
            className="text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-tight text-[#17241C]"
          >
            Shop<span className="text-[#A9792F]">ify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-9 xl:gap-11">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-1 text-[13px] sm:text-sm lg:text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#17241C] after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[2px] after:bg-[#A9792F]"
                      : "text-[#5B5A4E] hover:text-[#17241C]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">

            {/* Search */}
            <button
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#17241C] hover:bg-[#17241C]/[0.06] rounded-full transition"
              aria-label="Search"
            >
              <Search size={17} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
            </button>

            {/* Cart */}
            <button
              className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#17241C] hover:bg-[#17241C]/[0.06] rounded-full transition"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={17} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#A9792F] text-[#F5F1E6] text-[8px] sm:text-[9px] font-semibold flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-[#17241C]/[0.06] transition text-[#17241C]"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.75} />
            ) : (
              <Menu size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.75} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#17241C]/10 py-3 sm:py-4">
            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-sm font-medium transition border-l-2 ${
                      isActive
                        ? "border-[#A9792F] bg-[#17241C]/[0.04] text-[#17241C]"
                        : "border-transparent text-[#5B5A4E] hover:bg-[#17241C]/[0.04]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Cart */}
              <button className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-sm text-[#5B5A4E] hover:bg-[#17241C]/[0.04] transition border-l-2 border-transparent">
                <ShoppingCart size={17} strokeWidth={1.75} />
                Shopping cart
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;