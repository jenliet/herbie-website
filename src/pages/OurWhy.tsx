// src/pages/OurWhy.tsx
import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/ourwhy/HeroSection";
import HealthIssues from "../components/ourwhy/HealthIssues";
import CTASection from "../components/ourwhy/CTASection";
import ClosingSection from "../components/ourwhy/ClosingSection";
import Footer from "../components/common/Footer";

const OurWhy: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HealthIssues />
      <CTASection />
      <ClosingSection />
      <Footer />
    </>
  );
};

export default OurWhy;

