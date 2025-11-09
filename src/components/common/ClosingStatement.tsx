import React from "react";

interface ClosingStatementProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  buttonText?: string;
}

const ClosingStatement: React.FC<ClosingStatementProps> = ({
  title = "Meet",
  highlight = "Herbie",
  subtitle = "Take back your focus.",
  buttonText = "Download Our Beta",
}) => {
  return (
    <section className="bg-white text-center py-24 px-6 md:px-12 lg:px-24">
      {/* ✅ tagline */}
      <p className="inline-block bg-[#DADADA] text-black text-base md:text-lg font-inter px-4 py-3 rounded-3xl mb-10">
        Smarter habits, less doomscrolling
      </p>

      {/* ✅ main heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-normal mb-6 leading-tight">
        {title}{" "}
        <span className="text-brandBlue font-normal">{highlight}</span> — Your
        Digital Companion Bestie.
      </h2>

      {/* ✅ subheading */}
      <p className="text-lg md:text-xl font-poppins text-black/60 mb-2">
        {subtitle}
      </p>

      {/* ✅ supporting paragraph */}
      <p className="text-sm md:text-base font-poppins text-black/80 max-w-2xl mx-auto mb-10">
        Analyse your phone usage, set flexible app limits, and get helpful recommendations. 
        <br />
        Download now!
      </p>

      {/* ✅ CTA button → opens App Store link */}
      <a
        href="https://apps.apple.com/us/app/herbie-streaks/id6747325837"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brandGreen text-white font-inter text-base md:text-lg font-medium px-8 py-3 rounded-2xl hover:bg-[#2E6150] transition"
      >
        {buttonText}
      </a>
    </section>
  );
};

export default ClosingStatement;

