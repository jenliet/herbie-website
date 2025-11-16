import React from "react";
import Reveal from "../common/Reveal";

const HeroContact: React.FC = () => {
  return (
    <section className="bg-white text-center px-6 md:px-12 lg:px-24 py-20">
    <Reveal delay="20ms">
      <h1 className="text-4xl md:text-6xl font-poppins leading-snug text-black">
        Let’s Connect and{" "}
        <span className="text-[#2E6150] font-semibold">
          Stop Doomscrolling Together.
        </span>
      </h1>
      <p className="text-gray-700 font-inter mt-4 text-lg opacity-70">
        Have questions, feedback, or queries? We’d love to hear from you.
      </p>
    </Reveal>
    </section>
  );
};

export default HeroContact;
