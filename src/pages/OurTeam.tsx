import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/ourteam/HeroSection";
import TeamProfiles from "../components/ourteam/TeamProfiles";
import ClosingSection from "../components/common/ClosingStatement";
import Footer from "../components/common/Footer";

const OurTeam: React.FC = () => {
  return (
 <>
  <title>Meet the Herbie Team – Students Building Better Screen-Time Habits</title>
  <meta
    name="description"
    content="Herbie is built by a student-led team passionate about digital wellbeing. Meet the people behind the app."
  />

  <meta property="og:title" content="The Herbie Team" />
  <meta
    property="og:description"
    content="Meet the student founders behind Herbie, the digital wellbeing app."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.herbiestreaks.xyz/our-team" />
  <meta property="og:image" content="/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Meet the Herbie Team" />
  <meta
    name="twitter:description"
    content="The student team behind Herbie and its mission for digital wellbeing."
  />
  <meta name="twitter:image" content="/og-image.png" />

      <Navbar />
      <HeroSection />
      <TeamProfiles />
      <ClosingSection />
      <Footer />
    </>
  );
};

export default OurTeam;

