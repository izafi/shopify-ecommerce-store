import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail size={21} />,
      title: "Email",
      value: "hello@yourstore.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone size={21} />,
      title: "Phone",
      value: "+92 300 1234567",
      description: "Mon - Sat, 9am - 6pm",
    },
    {
      icon: <MapPin size={21} />,
      title: "Location",
      value: "Lahore, Pakistan",
      description: "Our main office",
    },
    {
      icon: <Clock size={21} />,
      title: "Working Hours",
      value: "09:00 AM - 06:00 PM",
      description: "Monday to Saturday",
    },
  ];

  return (
    <section className="bg-[#17241C] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#39443C]">

          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-[#17241C] p-7 sm:p-8 hover:bg-[#202F25] transition-colors duration-300"
            >

              <div className="w-11 h-11 rounded-full bg-[#C7A15C] text-[#17241C] flex items-center justify-center">
                {item.icon}
              </div>

              <p className="mt-6 text-[#C7A15C] text-xs uppercase tracking-[0.15em] font-semibold">
                {item.title}
              </p>

              <h3 className="mt-2 text-[#F5F1E6] text-base sm:text-lg font-semibold break-words">
                {item.value}
              </h3>

              <p className="mt-2 text-[#A9A79A] text-sm">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;