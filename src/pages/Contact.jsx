import React from "react";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactCTA from "../components/contact/ContactCTA";

const Contact = () => {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactCTA />
    </main>
  );
};

export default Contact;