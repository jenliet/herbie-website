import React from "react";

const ClosingSection: React.FC = () => {
  return (
    <section className="text-center py-16 px-6 md:px-20">
      {/* ✅ tagline */}
      <button className="bg-gray-200 text-black rounded-3xl px-4 py-3 mb-8">
        Smarter habits, less doomscrolling
      </button>

      {/* ✅ main heading */}
      <h2 className="text-4xl md:text-5xl mb-4">
        Meet <span className="text-blue-500">Herbie</span> — Your Digital Companion Bestie.
      </h2>

      {/* ✅ subheading */}
      <p className="text-lg md:text-xl font-poppins text-black/60 mb-2">Take back your focus.</p>

      {/* ✅ supporting text */}
      <p className="text-sm md:text-base font-poppins text-black/80 max-w-2xl mx-auto mb-10">
        Analyse your phone usage, set flexible app limits, and get helpful recommendations.
        <br />
        Download Now!
      </p>

      {/* ✅ CTA button → opens App Store link */}
      <a
        href="https://apps.apple.com/us/app/herbie-streaks/id6747325837"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brandGreen text-white px-8 py-3 rounded-xl hover:bg-[#2E6150] transition"
      >
        Start Your Journey Now
      </a>

      {/* ✅ footer note */}
      <p className="text-gray-400 mt-6 text-sm">
        Free To Download | No Credit Card Required
      </p>
    </section>
  );
};

export default ClosingSection;

