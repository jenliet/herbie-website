import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/ourteam/HeroSection";
import TeamProfiles from "../components/ourteam/TeamProfiles";
import ClosingSection from "../components/common/ClosingStatement";
import Footer from "../components/common/Footer";

const OurTeam: React.FC = () => {
  return (
    <>
      {/* React 19 will hoist these into <head> */}
      <title>Herbie – Mindful Screen Time for Students</title>
      <meta
        name="description"
        content="Herbie helps students reduce doomscrolling with flexible app blocking, streaks, and mindful screen-time insights."
      />
      <meta
        name="keywords"
        content="digital wellbeing, screen time, app blocker, students, Herbie"
      />

      {/* You can even add OG/Twitter tags here */}
      <meta property="og:title" content="Herbie – Mindful Screen Time" />
      <meta
        property="og:description"
        content="Cut down doomscrolling and reclaim your time with Herbie."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.herbiestreaks.xyz/" />
      <meta
        property="og:image"
        content="https://www.herbiestreaks.xyz/og-image.png"
      />
      <Navbar />
      <HeroSection />
      <TeamProfiles />
      <ClosingSection />
      <Footer />
    </>
  );
};

export default OurTeam;

