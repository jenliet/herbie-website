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

  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Herbie",
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    description:
      "Herbie helps students reduce doomscrolling and build healthier screen-time habits through mindful app blocking, streaks, and usage analytics.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SGD",
    },
    url: "https://www.herbiestreaks.xyz/",
    image: "https://www.herbiestreaks.xyz/og-image.png",
    creator: {
      "@type": "Organization",
      name: "Herbie",
      url: "https://www.herbiestreaks.xyz/",
      description:
        "Herbie is a student-led startup focused on improving digital wellbeing.",
    },
  })}
</script>

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Herbie",
    url: "https://www.herbiestreaks.xyz/",
    logo: "https://www.herbiestreaks.xyz/og-image.png",
    description:
      "Herbie is a student-led startup improving digital wellbeing through mindful screen-time habits.",
    sameAs: [
      "https://www.instagram.com/herbieapp", // optional, can remove or update
    ],
  })}
</script>

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Herbie",
    url: "https://www.herbiestreaks.xyz/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.herbiestreaks.xyz/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  })}
</script>

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
