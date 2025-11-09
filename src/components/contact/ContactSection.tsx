import React from "react";
import ContactInfo from "./ContactInfo";
import FeedbackForm from "./FeedbackForm";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white w-full px-6 md:px-12 lg:px-24 pb-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-15 max-w-7xl mx-auto items-stretch">
        <ContactInfo />
        <FeedbackForm />
      </div>
    </section>
  );
};

export default ContactSection;

