import React from "react";
import ContactInfo from "./ContactInfo";
import FeedbackForm from "./FeedbackForm";
import Reveal from "../common/Reveal";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white w-full px-6 md:px-12 lg:px-24 pb-20">
    <Reveal delay="70ms">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-15 max-w-7xl mx-auto items-stretch">
        <ContactInfo />
        <FeedbackForm />
      </div>
    </Reveal>
    </section>
  );
};

export default ContactSection;

