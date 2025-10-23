import React from "react";
import heroPhone from "../../assets/images/hero-phone.png";
import heroCardTop from "../../assets/images/hero-card-top.png";
import heroCardBottom from "../../assets/images/hero-card-bottom.png";

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20">
      {/* ✅ Left side text */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-inter leading-tight">
          Tired of{" "}
          <span className="text-brandGreen font-bold">doomscrolling</span>{" "}
          every night?
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          We help you break the cycle.{" "}
          <span className="text-[#658779]">For good.</span>
        </p>
        <button className="bg-brandGreen text-white px-8 py-3 rounded-full hover:bg-[#7bb49b] transition">
          Download For Free
        </button>
      </div>

      {/* ✅ Right side — phone + stacked cards */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
  <div className="relative flex items-center justify-center">
    {/* Phone mockup */}
    <img
      src={heroPhone}
      alt="Herbie app preview"
      className="relative z-10 w-[270px] md:w-[330px] lg:w-[360px] drop-shadow-xl mx-auto"
    />

    {/* Stacked cards (only visible on large screens) */}
    <div className="hidden lg:flex flex-col gap-6 absolute top-8 left-[115%]">
      {/* Top card */}
      <div className="relative bg-[#658779] rounded-[50px] shadow-lg w-[260px] h-[290px] overflow-hidden">
        <img
          src={heroCardTop}
          alt="App preview card 1"
          className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
        />
      </div>

      {/* Bottom card */}
      <div className="relative bg-[#9EC5FA] rounded-[50px] shadow-lg w-[260px] h-[260px] overflow-hidden">
        <img
          src={heroCardBottom}
          alt="App preview card 2"
          className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
        />
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
