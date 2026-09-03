import React, { useEffect, useState } from "react";
import {
  Package,
  ArrowRight,
} from "lucide-react";

import Cards from "./Cards";

const DISPLAY_FONT = "'Fraunces', Georgia, serif";

const CATEGORIES_TICKER = [
  "Electronics",
  "Fashion",
  "Beauty",
  "Groceries",
  "Furniture",
  "Home",
];

const ProductsApi = () => {

  // ================= STATES =================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // ================= FETCH PRODUCTS =================

  const fetchAllProducts = async () => {
    try {

      setLoading(true);
      setError("");

      const response = await fetch(
        "https://dummyjson.com/products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);

    } catch (error) {

      console.error(
        "Error fetching products:",
        error
      );

      setError(
        "Unable to load products. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  // ================= FETCH ON LOAD =================

  useEffect(() => {
    fetchAllProducts();
  }, []);


  return (

    <main className="bg-[#F7F4EA] min-h-screen">


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="bg-[#17241C]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 lg:py-28">

          <div className="max-w-3xl">

            <h1
              style={{
                fontFamily: DISPLAY_FONT,
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium tracking-tight text-[#F5F1E6] leading-[1.08]"
            >
              Everything you need,
              <br />
              nothing you don't.
            </h1>


            <div className="mt-5 sm:mt-6 w-14 sm:w-16 h-[3px] bg-[#C7A15C]" />


            <p className="mt-5 sm:mt-6 text-[#C9C6B8] text-sm sm:text-base md:text-lg max-w-xl leading-6 sm:leading-7 md:leading-relaxed">
              A carefully stocked collection of electronics,
              fashion, beauty, groceries and furniture — priced
              fairly, shipped reliably.
            </p>


            <div className="flex flex-col xs:flex-row sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-9">

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#C7A15C] hover:bg-[#D8B471] text-[#17241C] font-semibold px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base transition-colors duration-200"
              >
                Shop the collection

                <ArrowRight
                  size={17}
                  className="sm:w-[18px] sm:h-[18px]"
                />
              </a>


              <div className="flex items-center gap-2 text-[#8A8776] px-1 text-xs sm:text-sm md:text-base">

                <Package
                  size={17}
                  className="sm:w-[18px] sm:h-[18px]"
                  strokeWidth={1.75}
                />

                <span>
                  {products.length || 30}+ products in stock
                </span>

              </div>

            </div>

          </div>


          {/* Category ticker */}

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#F5F1E6]/10 flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-8">

            {CATEGORIES_TICKER.map((cat, i) => (

              <span
                key={cat}
                className="text-[#6E6C5E] text-xs sm:text-sm flex items-center gap-6 sm:gap-8"
              >

                {cat}

                {i < CATEGORIES_TICKER.length - 1 && (
                  <span className="text-[#C7A15C]/40">
                    ·
                  </span>
                )}

              </span>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS SECTION
      ===================================================== */}

      <section
        id="products"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      >


        {/* Section Heading */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-[#17241C]/10">

          <div>

            <h2
              style={{
                fontFamily: DISPLAY_FONT,
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#17241C] leading-tight"
            >
              The collection
            </h2>

            <p className="text-[#5B5A4E] text-sm sm:text-base md:text-lg mt-2 max-w-xl leading-6 sm:leading-7">
              Find everything you need from our wide range of
              quality products.
            </p>

          </div>


          {!loading && !error && (

            <div className="self-start md:self-auto text-xs sm:text-sm text-[#5B5A4E] whitespace-nowrap">

              <span
                className="font-semibold text-[#17241C] text-base sm:text-lg"
                style={{
                  fontFamily: DISPLAY_FONT,
                }}
              >
                {products.length}
              </span>{" "}

              products available

            </div>

          )}

        </div>


        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading && (

          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {[...Array(8)].map((_, index) => (

              <div
                key={index}
                className="bg-[#FFFDF7] border border-[#17241C]/10 overflow-hidden animate-pulse"
              >

                <div className="h-52 sm:h-56 md:h-60 lg:h-64 bg-[#17241C]/[0.06]" />

                <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">

                  <div className="h-4 bg-[#17241C]/[0.06] w-20" />

                  <div className="h-5 sm:h-6 bg-[#17241C]/[0.06] w-3/4" />

                  <div className="h-4 bg-[#17241C]/[0.06] w-full" />

                  <div className="h-4 bg-[#17241C]/[0.06] w-2/3" />

                  <div className="h-10 sm:h-11 bg-[#17241C]/[0.06]" />

                </div>

              </div>

            ))}

          </div>

        )}


        {/* =====================================================
            ERROR
        ===================================================== */}

        {!loading && error && (

          <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center px-4">

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#9C3B2E]/10 flex items-center justify-center text-[#9C3B2E] mb-4 sm:mb-5">

              <Package
                size={25}
                className="sm:w-7 sm:h-7"
                strokeWidth={1.75}
              />

            </div>


            <h3
              style={{
                fontFamily: DISPLAY_FONT,
              }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-[#17241C]"
            >
              Something went wrong
            </h3>


            <p className="text-[#5B5A4E] text-sm sm:text-base mt-2 mb-5 sm:mb-6">
              {error}
            </p>


            <button
              onClick={fetchAllProducts}
              className="bg-[#17241C] hover:bg-[#0F1811] text-[#F5F1E6] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-colors duration-200"
            >
              Try again
            </button>

          </div>

        )}


        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}

        {!loading && !error && (

          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map((product) => (

              <Cards
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </section>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">

        <div className="relative overflow-hidden bg-[#17241C] px-5 sm:px-7 md:px-10 lg:px-14 py-9 sm:py-12 md:py-16 border border-[#C7A15C]/20">

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">

            <div className="max-w-xl">

              <span className="text-[#C7A15C] text-xs sm:text-sm font-medium">
                Shopify
              </span>

              <h2
                style={{
                  fontFamily: DISPLAY_FONT,
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#F5F1E6] mt-1.5 sm:mt-2 leading-tight"
              >
                Find something you'll use.
              </h2>

              <p className="text-[#C9C6B8] text-sm sm:text-base md:text-lg mt-2 sm:mt-3 leading-6 sm:leading-7">
                Browse the full collection and discover the everyday
                things worth having.
              </p>

            </div>


            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-[#C7A15C] hover:bg-[#D8B471] text-[#17241C] font-semibold px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 whitespace-nowrap"
            >
              Browse collection

              <ArrowRight
                size={17}
                className="sm:w-[18px] sm:h-[18px]"
              />

            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ProductsApi;