import React from "react";

const AboutStats = () => {
  const stats = [
    {
      number: "100+",
      title: "Products",
      text: "Products available to explore",
    },
    {
      number: "20+",
      title: "Categories",
      text: "Different categories for everyone",
    },
    {
      number: "24/7",
      title: "Experience",
      text: "Shop whenever you want",
    },
    {
      number: "100%",
      title: "Simple",
      text: "Clean and easy shopping experience",
    },
  ];

  return (
    <section className="bg-[#F7F4EA] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-[#C7A15C] text-xs uppercase tracking-[0.2em] font-semibold">
            By The Numbers
          </span>

          <h2 className="mt-4 text-[#17241C] text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Everything in one place.
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#D8D4C5]">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="py-8 sm:py-10 pr-5 sm:pr-8 border-b lg:border-b-0 border-[#D8D4C5]"
            >
              <h3 className="text-[#17241C] text-3xl sm:text-4xl lg:text-5xl font-semibold">
                {stat.number}
              </h3>

              <h4 className="mt-3 text-[#17241C] font-semibold">
                {stat.title}
              </h4>

              <p className="mt-2 text-[#8A8776] text-sm leading-6 max-w-[180px]">
                {stat.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutStats;