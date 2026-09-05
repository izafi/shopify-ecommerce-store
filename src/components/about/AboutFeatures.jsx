import React from "react";
import {
  ShieldCheck,
  Truck,
  Sparkles,
  Heart,
} from "lucide-react";

const AboutFeatures = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Reliable Shopping",
      text: "A simple and transparent experience designed to make shopping easier.",
    },
    {
      icon: <Truck size={24} />,
      title: "Fast Experience",
      text: "Quickly discover products and get the information you need.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Quality Products",
      text: "A wide collection of products organized for easy browsing.",
    },
    {
      icon: <Heart size={24} />,
      title: "Made For You",
      text: "Every part of our experience is designed with customers in mind.",
    },
  ];

  return (
    <section className="bg-[#EFEBDD] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

          <span className="text-[#C7A15C] text-xs uppercase tracking-[0.2em] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-[#17241C] text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Shopping made better.
          </h2>

          <p className="mt-5 text-[#6F6C60] text-sm sm:text-base leading-7">
            We keep things simple so you can focus on finding the products
            that are right for you.
          </p>

        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D5D0BF]">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F7F4EA] p-7 sm:p-8 hover:bg-[#17241C] hover:text-[#F5F1E6] transition-all duration-300 group"
            >

              <div className="w-12 h-12 rounded-full bg-[#17241C] text-[#C7A15C] flex items-center justify-center group-hover:bg-[#C7A15C] group-hover:text-[#17241C] transition-colors">
                {feature.icon}
              </div>

              <h3 className="mt-7 text-[#17241C] group-hover:text-[#F5F1E6] text-lg font-semibold transition-colors">
                {feature.title}
              </h3>

              <p className="mt-3 text-[#7B786B] group-hover:text-[#C9C6B8] text-sm leading-6 transition-colors">
                {feature.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;