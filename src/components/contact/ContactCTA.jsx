import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="bg-[#EFEBDD] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto">

          <span className="text-[#C7A15C] text-xs uppercase tracking-[0.2em] font-semibold">
            Keep Exploring
          </span>

          <h2 className="mt-4 text-[#17241C] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Looking for something
            <span className="block text-[#C7A15C]">
              special?
            </span>
          </h2>

          <p className="mt-5 text-[#6F6C60] text-sm sm:text-base leading-7">
            Explore our collection and discover products that might be just
            what you're looking for.
          </p>

          <Link
            to="/product"
            className="mt-8 mx-auto w-fit bg-[#17241C] text-[#F5F1E6] px-6 py-3.5 flex items-center gap-3 text-sm font-semibold hover:bg-[#C7A15C] hover:text-[#17241C] transition-colors"
          >
            Browse Products

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;