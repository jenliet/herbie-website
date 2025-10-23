import React from "react";

interface ClosingStatementProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ClosingStatement: React.FC<ClosingStatementProps> = ({
  title = "Meet",
  highlight = "Herbie",
  subtitle = "Take back your focus.",
  description = "Analyse your phone usage, set flexible app limits, and get helpful recommendations from Herbie to understand your digital habits. Download now!",
  buttonText = "Download Our Beta",
  onButtonClick,
}) => {
  return (
    <section className="bg-white text-center py-24 px-6 md:px-12 lg:px-24">
      {/* ✅ tagline */}
      <p className="inline-block bg-[#DADADA] text-black text-base md:text-lg font-inter px-6 py-3 rounded-2xl mb-10 shadow-sm">
        Smarter habits, less doomscrolling
      </p>

      {/* ✅ main heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-normal mb-6 leading-tight">
        {title}{" "}
        <span className="text-brandBlue font-normal">{highlight}</span> — your
        digital companion bestie.
      </h2>

      {/* ✅ subheading */}
      <p className="text-lg md:text-xl font-poppins text-black/60 mb-2">
        {subtitle}
      </p>

      {/* ✅ supporting paragraph */}
      <p className="text-sm md:text-base font-poppins text-black/80 max-w-2xl mx-auto mb-10">
        {description}
      </p>

      {/* ✅ CTA button */}
      <button
        onClick={onButtonClick}
        className="bg-brandGreen text-white font-inter text-base md:text-lg font-medium px-8 py-3 rounded-2xl hover:bg-[#7bb49b] transition"
      >
        {buttonText}
      </button>
    </section>
  );
};

export default ClosingStatement;
