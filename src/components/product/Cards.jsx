import React from "react";
import {
  ShoppingCart,
  Star,
  ArrowRight,
} from "lucide-react";

const DISPLAY_FONT = "'Fraunces', Georgia, serif";

const Cards = ({ product }) => {
  return (
    <article className="group bg-[#FFFDF7] border border-[#17241C]/10 hover:border-[#C7A15C] overflow-hidden transition-colors duration-300">

      {/* ================= PRODUCT IMAGE ================= */}
      <div className="relative h-52 sm:h-56 md:h-60 lg:h-64 bg-[#17241C]/[0.04] overflow-hidden">

        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
        />

        {/* Discount */}
        <div className="absolute top-3 sm:top-4 left-0">
          <span className="bg-[#9C3B2E] text-[#F5F1E6] text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5">
            −{product.discountPercentage?.toFixed(0)}%
          </span>
        </div>

        {/* Cart Button */}
        <button
          className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-[#17241C]/90 backdrop-blur-sm flex items-center justify-center text-[#F5F1E6] opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#C7A15C] hover:text-[#17241C]"
          aria-label="Add to cart"
        >
          <ShoppingCart
            size={16}
            className="sm:w-[17px] sm:h-[17px]"
            strokeWidth={1.75}
          />
        </button>
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <div className="p-4 sm:p-5">

        {/* Category + Rating */}
        <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2.5 sm:mb-3">

          <span className="inline-block max-w-[70%] truncate text-[10px] sm:text-xs font-medium text-[#5B5A4E] border border-[#17241C]/15 px-2.5 sm:px-3 py-1 capitalize">
            {product.category}
          </span>

          <div className="flex items-center gap-1 text-xs sm:text-sm text-[#5B5A4E] shrink-0">
            <Star
              size={14}
              className="fill-[#C7A15C] text-[#C7A15C] sm:w-[15px] sm:h-[15px]"
            />
            {product.rating}
          </div>

        </div>

        {/* Title */}
        <h3
          style={{ fontFamily: DISPLAY_FONT }}
          className="font-medium text-base sm:text-lg lg:text-xl text-[#17241C] line-clamp-1 group-hover:text-[#9C3B2E] transition-colors duration-300"
        >
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#5B5A4E] leading-5 sm:leading-relaxed mt-1.5 sm:mt-2 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        {/* Brand */}
        <div className="flex items-center justify-between mt-3 sm:mt-4 text-[10px] sm:text-xs">

          <span className="text-[#8A8776]">
            Brand
          </span>

          <span className="font-medium text-[#17241C] max-w-[60%] truncate">
            {product.brand || "Shopify"}
          </span>

        </div>

        {/* Divider */}
        <div className="border-t border-[#17241C]/10 my-3 sm:my-4" />

        {/* Price + Availability */}
        <div className="flex items-end justify-between gap-3">

          {/* Price */}
          <div>
            <p className="text-[10px] sm:text-xs text-[#8A8776] mb-1">
              Price
            </p>

            <h4
              style={{ fontFamily: DISPLAY_FONT }}
              className="text-xl sm:text-2xl font-medium text-[#17241C]"
            >
              ${product.price}
            </h4>
          </div>

          {/* Availability */}
          <div className="text-right">

            <p className="text-[10px] sm:text-xs text-[#8A8776] mb-1">
              Availability
            </p>

            <span
              className={`text-[10px] sm:text-xs font-semibold ${
                product.stock > 20
                  ? "text-[#3F6B4F]"
                  : "text-[#B0632B]"
              }`}
            >
              {product.stock > 20
                ? "In stock"
                : "Limited stock"}
            </span>

          </div>

        </div>

        {/* View Product */}
        <button className="w-full mt-4 sm:mt-5 bg-[#17241C] hover:bg-[#C7A15C] hover:text-[#17241C] text-[#F5F1E6] py-2.5 sm:py-3 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors duration-300 group/button">

          View product

          <ArrowRight
            size={16}
            className="sm:w-[17px] sm:h-[17px] group-hover/button:translate-x-1 transition-transform"
          />

        </button>

      </div>
    </article>
  );
};

export default Cards;