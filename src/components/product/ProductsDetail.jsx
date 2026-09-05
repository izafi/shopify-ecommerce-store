import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Star,
  Package,
  ShieldCheck,
  Truck,
  Minus,
  Plus,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const DISPLAY_FONT = "'Fraunces', Georgia, serif";

const ProductsDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // ================= GET PRODUCT =================

  const getProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const data = await response.json();

      setProduct(data);
      setActiveImage(0);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Unable to load this product.");
    } finally {
      setLoading(false);
    }
  };

  // ================= FETCH PRODUCT =================

  useEffect(() => {
    getProduct();
  }, [id]);

  // ================= QUANTITY =================

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F4EA]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <div className="animate-pulse">

            {/* Breadcrumb Skeleton */}

            <div className="h-4 w-48 bg-[#17241C]/10 mb-8" />

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">

              {/* Image */}

              <div className="h-[400px] sm:h-[500px] bg-[#17241C]/10" />

              {/* Content */}

              <div className="space-y-5">

                <div className="h-6 w-24 bg-[#17241C]/10" />

                <div className="h-12 w-3/4 bg-[#17241C]/10" />

                <div className="h-20 w-full bg-[#17241C]/10" />

                <div className="h-8 w-32 bg-[#17241C]/10" />

                <div className="h-14 w-full bg-[#17241C]/10" />

                <div className="h-14 w-full bg-[#17241C]/10" />

              </div>

            </div>

          </div>

        </div>

      </main>
    );
  }

  // ================= ERROR =================

  if (error) {
    return (
      <main className="min-h-screen bg-[#F7F4EA] flex items-center justify-center px-4">

        <div className="text-center">

          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#9C3B2E]/10 flex items-center justify-center text-[#9C3B2E]">
            <Package size={28} />
          </div>

          <h2
            style={{ fontFamily: DISPLAY_FONT }}
            className="text-2xl sm:text-3xl text-[#17241C] font-medium"
          >
            Product not found
          </h2>

          <p className="text-[#5B5A4E] mt-2 mb-6">
            {error}
          </p>

          <Link
            to="/product"
            className="inline-flex items-center gap-2 bg-[#17241C] text-[#F5F1E6] px-6 py-3 hover:bg-[#C7A15C] hover:text-[#17241C] transition-colors"
          >
            <ArrowLeft size={17} />
            Back to products
          </Link>

        </div>

      </main>
    );
  }

  const images =
    product.images?.length > 0
      ? product.images
      : [product.thumbnail];

  return (
    <main className="min-h-screen bg-[#F7F4EA]">

      {/* =====================================================
          TOP NAV / BREADCRUMB
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">

        <Link
          to="/product"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#5B5A4E] hover:text-[#9C3B2E] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to collection
        </Link>

      </div>


      {/* =====================================================
          PRODUCT DETAILS
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20">


          {/* =================================================
              LEFT - PRODUCT IMAGES
          ================================================= */}

          <div>

            {/* Main Image */}

            <div className="relative bg-[#FFFDF7] border border-[#17241C]/10 h-[380px] sm:h-[480px] md:h-[520px] overflow-hidden">

              <img
                src={images[activeImage]}
                alt={product.title}
                className="w-full h-full object-contain p-8 sm:p-10 md:p-14"
              />

              {/* Discount */}

              {product.discountPercentage && (
                <div className="absolute top-5 left-0">

                  <span className="bg-[#9C3B2E] text-[#F5F1E6] text-xs sm:text-sm font-semibold px-3 py-1.5">
                    −{product.discountPercentage.toFixed(0)}%
                  </span>

                </div>
              )}

            </div>


            {/* Image Thumbnails */}

            {images.length > 1 && (

              <div className="flex gap-3 mt-4 overflow-x-auto pb-1">

                {images.map((image, index) => (

                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#FFFDF7] border overflow-hidden transition-all ${
                      activeImage === index
                        ? "border-[#C7A15C]"
                        : "border-[#17241C]/10 hover:border-[#17241C]/30"
                    }`}
                  >

                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />

                  </button>

                ))}

              </div>

            )}

          </div>


          {/* =================================================
              RIGHT - PRODUCT INFORMATION
          ================================================= */}

          <div className="flex flex-col justify-center">

            {/* Category */}

            <div className="flex items-center gap-3 mb-4">

              <span className="inline-block border border-[#17241C]/15 text-[#5B5A4E] px-3 py-1 text-xs font-medium capitalize">
                {product.category}
              </span>

              {product.brand && (
                <span className="text-xs sm:text-sm text-[#8A8776]">
                  {product.brand}
                </span>
              )}

            </div>


            {/* Title */}

            <h1
              style={{ fontFamily: DISPLAY_FONT }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.08] text-[#17241C]"
            >
              {product.title}
            </h1>


            {/* Rating */}

            <div className="flex items-center gap-3 mt-5">

              <div className="flex items-center gap-1">

                <Star
                  size={17}
                  className="fill-[#C7A15C] text-[#C7A15C]"
                />

                <span className="text-sm font-medium text-[#17241C]">
                  {product.rating}
                </span>

              </div>

              <span className="text-[#8A8776]">
                •
              </span>

              <span className="text-sm text-[#5B5A4E]">
                Customer rating
              </span>

            </div>


            {/* Divider */}

            <div className="border-t border-[#17241C]/10 my-6" />


            {/* Description */}

            <p className="text-[#5B5A4E] text-sm sm:text-base leading-7 max-w-xl">
              {product.description}
            </p>


            {/* Price */}

            <div className="mt-6">

              <p className="text-xs text-[#8A8776] mb-1">
                Price
              </p>

              <div className="flex items-center gap-3">

                <h2
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="text-3xl sm:text-4xl font-medium text-[#17241C]"
                >
                  ${product.price}
                </h2>

                {product.discountPercentage && (
                  <span className="text-sm text-[#8A8776] line-through">
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}

              </div>

            </div>


            {/* Stock */}

            <div className="mt-5 flex items-center gap-2">

              <span
                className={`w-2 h-2 rounded-full ${
                  product.stock > 20
                    ? "bg-[#3F6B4F]"
                    : "bg-[#B0632B]"
                }`}
              />

              <span
                className={`text-sm font-medium ${
                  product.stock > 20
                    ? "text-[#3F6B4F]"
                    : "text-[#B0632B]"
                }`}
              >
                {product.stock > 20
                  ? `In stock — ${product.stock} available`
                  : `Limited stock — ${product.stock} left`}
              </span>

            </div>


            {/* =================================================
                QUANTITY + ADD TO CART
            ================================================= */}

            <div className="flex flex-col sm:flex-row gap-3 mt-7">

              {/* Quantity */}

              <div className="flex items-center justify-between border border-[#17241C]/15 bg-[#FFFDF7] h-12 sm:w-36">

                <button
                  onClick={decreaseQuantity}
                  className="w-11 h-full flex items-center justify-center text-[#17241C] hover:bg-[#17241C]/5 transition-colors"
                >
                  <Minus size={16} />
                </button>

                <span className="text-sm font-medium text-[#17241C]">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="w-11 h-full flex items-center justify-center text-[#17241C] hover:bg-[#17241C]/5 transition-colors"
                >
                  <Plus size={16} />
                </button>

              </div>


              {/* Add Cart */}

              <button
                type="button"
                className="flex-1 h-12 bg-[#17241C] hover:bg-[#C7A15C] hover:text-[#17241C] text-[#F5F1E6] flex items-center justify-center gap-2 font-semibold text-sm transition-colors"
              >

                <ShoppingCart size={18} />

                Add to cart

              </button>

            </div>


            {/* Buy Now */}

            <button
              type="button"
              className="w-full h-12 mt-3 border border-[#17241C] text-[#17241C] hover:bg-[#17241C] hover:text-[#F5F1E6] flex items-center justify-center gap-2 font-semibold text-sm transition-colors"
            >
              Buy now
              <ArrowRight size={17} />
            </button>


            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">

              {/* Delivery */}

              <div className="border border-[#17241C]/10 bg-[#FFFDF7] p-4">

                <Truck
                  size={19}
                  className="text-[#C7A15C] mb-3"
                />

                <p className="text-xs font-semibold text-[#17241C]">
                  Fast delivery
                </p>

                <p className="text-[11px] text-[#8A8776] mt-1">
                  Reliable shipping
                </p>

              </div>


              {/* Secure */}

              <div className="border border-[#17241C]/10 bg-[#FFFDF7] p-4">

                <ShieldCheck
                  size={19}
                  className="text-[#C7A15C] mb-3"
                />

                <p className="text-xs font-semibold text-[#17241C]">
                  Secure purchase
                </p>

                <p className="text-[11px] text-[#8A8776] mt-1">
                  Safe checkout
                </p>

              </div>


              {/* Package */}

              <div className="border border-[#17241C]/10 bg-[#FFFDF7] p-4">

                <Package
                  size={19}
                  className="text-[#C7A15C] mb-3"
                />

                <p className="text-xs font-semibold text-[#17241C]">
                  Quality product
                </p>

                <p className="text-[11px] text-[#8A8776] mt-1">
                  Carefully selected
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT INFORMATION
      ===================================================== */}

      <section className="border-t border-[#17241C]/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            {/* Description */}

            <div>

              <p className="text-[#C7A15C] text-xs font-semibold uppercase tracking-wider">
                Product details
              </p>

              <h2
                style={{ fontFamily: DISPLAY_FONT }}
                className="text-2xl sm:text-3xl font-medium text-[#17241C] mt-2"
              >
                About this product
              </h2>

              <p className="text-[#5B5A4E] text-sm sm:text-base leading-7 mt-4">
                {product.description}
              </p>

            </div>


            {/* Specifications */}

            <div>

              <p className="text-[#C7A15C] text-xs font-semibold uppercase tracking-wider">
                Information
              </p>

              <h2
                style={{ fontFamily: DISPLAY_FONT }}
                className="text-2xl sm:text-3xl font-medium text-[#17241C] mt-2"
              >
                Specifications
              </h2>

              <div className="mt-5 border-t border-[#17241C]/10">

                <div className="flex justify-between gap-4 py-3 border-b border-[#17241C]/10">

                  <span className="text-sm text-[#8A8776]">
                    Category
                  </span>

                  <span className="text-sm text-[#17241C] font-medium capitalize text-right">
                    {product.category}
                  </span>

                </div>

                <div className="flex justify-between gap-4 py-3 border-b border-[#17241C]/10">

                  <span className="text-sm text-[#8A8776]">
                    Brand
                  </span>

                  <span className="text-sm text-[#17241C] font-medium text-right">
                    {product.brand || "Shopify"}
                  </span>

                </div>

                <div className="flex justify-between gap-4 py-3 border-b border-[#17241C]/10">

                  <span className="text-sm text-[#8A8776]">
                    Stock
                  </span>

                  <span className="text-sm text-[#17241C] font-medium text-right">
                    {product.stock} units
                  </span>

                </div>

                <div className="flex justify-between gap-4 py-3 border-b border-[#17241C]/10">

                  <span className="text-sm text-[#8A8776]">
                    Rating
                  </span>

                  <span className="text-sm text-[#17241C] font-medium text-right">
                    {product.rating} / 5
                  </span>

                </div>

                <div className="flex justify-between gap-4 py-3 border-b border-[#17241C]/10">

                  <span className="text-sm text-[#8A8776]">
                    SKU
                  </span>

                  <span className="text-sm text-[#17241C] font-medium text-right">
                    {product.sku || `PRD-${product.id}`}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">

        <div className="bg-[#17241C] px-6 sm:px-10 md:px-14 py-10 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>

            <p className="text-[#C7A15C] text-xs sm:text-sm font-medium">
              SHOP THE COLLECTION
            </p>

            <h2
              style={{ fontFamily: DISPLAY_FONT }}
              className="text-2xl sm:text-3xl md:text-4xl text-[#F5F1E6] font-medium mt-2"
            >
              Looking for something else?
            </h2>

            <p className="text-[#C9C6B8] text-sm mt-2">
              Explore more products from our collection.
            </p>

          </div>

          <Link
            to="/product"
            className="shrink-0 inline-flex items-center gap-2 bg-[#C7A15C] hover:bg-[#D8B471] text-[#17241C] font-semibold px-6 py-3.5 text-sm transition-colors"
          >
            View products
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default ProductsDetail;