import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/homepage/Hero";
import Features from "../components/homepage/Intro";
import GreenBanner from "../components/homepage/CoreFeature1";
import UsageAnalytics from "../components/homepage/CoreFeature2";
import CoreFeature3 from "../components/homepage/CoreFeature3";
import ClosingStatement from "../components/common/ClosingStatement";
import Footer from "../components/common/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <GreenBanner />
      <UsageAnalytics />
      <CoreFeature3 />
      <ClosingStatement />
      <Footer />
    </>
  );
};

export default Home;
