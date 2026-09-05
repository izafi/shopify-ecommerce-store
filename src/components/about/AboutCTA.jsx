import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="bg-[#F7F4EA] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">

      <div className="max-w-7xl mx-auto">

        <div className="bg-[#17241C] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          <div className="max-w-2xl">

            <span className="text-[#C7A15C] text-xs uppercase tracking-[0.2em] font-semibold">
              Start Exploring
            </span>

            <h2 className="mt-4 text-[#F5F1E6] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Find something
              <span className="text-[#C7A15C]"> you love.</span>
            </h2>

            <p className="mt-5 text-[#C9C6B8] text-sm sm:text-base leading-7 max-w-xl">
              Explore our collection and discover products selected to make
              your everyday shopping experience better.
            </p>

          </div>

          <Link
            to="/product"
            className="shrink-0 bg-[#C7A15C] text-[#17241C] px-6 py-3.5 flex items-center gap-3 text-sm font-semibold hover:bg-[#D8B471] transition-colors"
          >
            Browse Products

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default AboutCTA;