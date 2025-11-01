import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/ourteam/HeroSection";
import TeamProfiles from "../components/ourteam/TeamProfiles";
import ClosingSection from "../components/common/ClosingStatement";
import Footer from "../components/common/Footer";

const OurTeam: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeamProfiles />
      <ClosingSection />
      <Footer />
    </>
  );
};

export default OurTeam;

