import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#F7F4EA] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

          {/* Left Content */}
          <div>

            <span className="text-[#C7A15C] text-xs uppercase tracking-[0.2em] font-semibold">
              Send A Message
            </span>

            <h2 className="mt-4 text-[#17241C] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              We're here to
              <span className="block text-[#C7A15C]">
                help you.
              </span>
            </h2>

            <p className="mt-6 text-[#6F6C60] text-sm sm:text-base leading-7 max-w-md">
              Whether you have a question about a product, your order, or
              anything else, our team is ready to help.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div>
                <label className="block text-[#17241C] text-sm font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent border border-[#D1CCBB] px-4 py-3.5 text-sm text-[#17241C] placeholder:text-[#999688] outline-none focus:border-[#C7A15C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#17241C] text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent border border-[#D1CCBB] px-4 py-3.5 text-sm text-[#17241C] placeholder:text-[#999688] outline-none focus:border-[#C7A15C] transition-colors"
                />
              </div>

            </div>

            {/* Subject */}
            <div>
              <label className="block text-[#17241C] text-sm font-medium mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What can we help you with?"
                required
                className="w-full bg-transparent border border-[#D1CCBB] px-4 py-3.5 text-sm text-[#17241C] placeholder:text-[#999688] outline-none focus:border-[#C7A15C] transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#17241C] text-sm font-medium mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
                className="w-full bg-transparent border border-[#D1CCBB] px-4 py-3.5 text-sm text-[#17241C] placeholder:text-[#999688] outline-none focus:border-[#C7A15C] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#17241C] text-[#F5F1E6] px-6 py-3.5 flex items-center justify-center gap-3 text-sm font-semibold hover:bg-[#C7A15C] hover:text-[#17241C] transition-colors duration-300"
            >
              Send Message

              <Send size={17} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;