import React from "react";
import { ArrowDownRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-[#F7F4EA] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-28 pb-14">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#C7A15C]"></span>

          <span className="text-[#8A8776] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
            Contact Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">

          <h1 className="text-[#17241C] text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Let's start a
            <span className="block text-[#C7A15C]">
              conversation.
            </span>
          </h1>

          <div className="lg:pb-2">
            <p className="text-[#5B5A4E] text-base sm:text-lg leading-7 max-w-xl">
              Have a question, suggestion, or need some help? We'd love to
              hear from you. Send us a message and we'll get back to you.
            </p>

            <div className="flex items-center gap-3 mt-8 text-[#17241C]">
              <div className="w-10 h-10 rounded-full border border-[#C7A15C] flex items-center justify-center">
                <ArrowDownRight size={18} />
              </div>

              <span className="text-sm font-medium">
                We'd love to hear from you
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;