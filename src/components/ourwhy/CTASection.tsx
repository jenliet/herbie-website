import React from "react";
import RevealDown from "../common/RevealDown";

const CTASection: React.FC = () => {
  return (
    <section className="mt-24 py-30 bg-blue-100 text-center">
    <RevealDown delay="100ms">
      <h2 className="text-4xl md:text-5xl">
        Herbie turns <span className="italic text-green-700">awareness</span> into{" "}
        <span className="italic text-green-700 font-semibold">action.</span>
      </h2>
    </RevealDown>
    </section>
  );
};

export default CTASection;
