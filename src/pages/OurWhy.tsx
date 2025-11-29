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
  <title>Why We Built Herbie – Helping Students Break Doomscrolling Habits</title>
  <meta
    name="description"
    content="Herbie was created to tackle poor sleep, anxiety, and digital fatigue caused by unhealthy screen-time habits. Learn the mission behind the movement."
  />

  <meta property="og:title" content="Why We Built Herbie" />
  <meta
    property="og:description"
    content="The story behind Herbie — improving digital wellbeing for students through mindful screen-time habits."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.herbiestreaks.xyz/our-why" />
  <meta property="og:image" content="/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Why We Built Herbie" />
  <meta
    name="twitter:description"
    content="The mission behind Herbie — helping students create healthier digital habits."
  />
  <meta name="twitter:image" content="/og-image.png" />

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

