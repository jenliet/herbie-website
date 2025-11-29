import React from "react";
import Navbar from "../components/common/Navbar";
import HeroContact from "../components/contact/HeroContact";
import ContactSection from "../components/contact/ContactSection";
import ClosingStatement from "../components/common/ClosingStatement";
import Footer from "../components/common/Footer";

const Contact: React.FC = () => {
  return (
<>
  <title>Contact Herbie – Get in Touch With Our Team</title>
  <meta
    name="description"
    content="Have questions, feedback, or partnership opportunities? Contact the Herbie team and we’ll get back to you shortly."
  />

  <meta property="og:title" content="Contact Herbie" />
  <meta
    property="og:description"
    content="Reach out to the Herbie team for support, collaborations, or media inquiries."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.herbiestreaks.xyz/contact" />
  <meta property="og:image" content="/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Herbie" />
  <meta
    name="twitter:description"
    content="Get in touch with the Herbie team for support or collaborations."
  />
  <meta name="twitter:image" content="/og-image.png" />

      <Navbar />
      <HeroContact />
      <ContactSection />
      <ClosingStatement />
      <Footer />
    </>
  );
};

export default Contact;
