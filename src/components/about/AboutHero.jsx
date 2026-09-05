import React from "react";
import { ArrowDownRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="bg-[#F7F4EA] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Small Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#C7A15C]"></span>
          <span className="text-[#8A8776] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
            About Our Store
          </span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">

          <h1 className="text-[#17241C] text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            We make shopping
            <span className="block text-[#C7A15C]">
              simple & enjoyable.
            </span>
          </h1>

          <div className="lg:pb-2">
            <p className="text-[#5B5A4E] text-base sm:text-lg leading-7 max-w-xl">
              We believe online shopping should be simple, convenient, and
              enjoyable. Our goal is to bring quality products together in one
              place with an experience you can trust.
            </p>

            <div className="flex items-center gap-3 mt-8 text-[#17241C]">
              <div className="w-10 h-10 rounded-full border border-[#C7A15C] flex items-center justify-center">
                <ArrowDownRight size={18} />
              </div>

              <span className="text-sm font-medium">
                Discover our story
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;