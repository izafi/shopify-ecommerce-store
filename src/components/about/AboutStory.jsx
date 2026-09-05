import React from "react";
import { ArrowUpRight } from "lucide-react";

const AboutStory = () => {
  return (
    <section className="bg-[#17241C] text-[#F5F1E6] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left */}
          <div>
            <span className="text-[#C7A15C] text-xs uppercase tracking-[0.2em]">
              Our Story
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Built around people,
              <span className="block text-[#C7A15C]">
                products & trust.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6 text-[#C9C6B8] text-sm sm:text-base leading-7">

            <p>
              Our store was created with one simple idea — make it easier for
              people to discover and purchase products they actually need.
            </p>

            <p>
              We focus on combining a clean shopping experience with carefully
              organized products, straightforward information, and a modern
              interface.
            </p>

            <p>
              From browsing products to discovering something new, every part
              of the experience is designed to feel simple and effortless.
            </p>

            <button className="mt-4 flex items-center gap-2 bg-[#C7A15C] text-[#17241C] px-5 py-3 text-sm font-semibold hover:bg-[#D8B471] transition-colors">
              Explore Products
              <ArrowUpRight size={17} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;