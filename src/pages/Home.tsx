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
  <title>Herbie – Mindful Screen Time for Students</title>
  <meta
    name="description"
    content="Herbie helps students reduce doomscrolling through flexible app blocking, streak streaks, usage analytics, and mindful digital habits."
  />

  <meta property="og:title" content="Herbie – Mindful Screen Time" />
  <meta
    property="og:description"
    content="Cut down doomscrolling and build healthy phone habits with Herbie."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.herbiestreaks.xyz/" />
  <meta property="og:image" content="/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Herbie – Mindful Screen Time" />
  <meta
    name="twitter:description"
    content="A digital wellbeing app that helps students reclaim their time."
  />
  <meta name="twitter:image" content="/og-image.png" />

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
