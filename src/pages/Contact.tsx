import React from "react";
import Navbar from "../components/common/Navbar";
import HeroContact from "../components/contact/HeroContact";
import ContactSection from "../components/contact/ContactSection";
import ClosingStatement from "../components/common/ClosingStatement";
import Footer from "../components/common/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroContact />
      <ContactSection />
      <ClosingStatement />
      <Footer />
    </>
  );
};

export default Contact;
