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
