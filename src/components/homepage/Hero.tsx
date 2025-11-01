import React from "react";
import heroPhone from "../../assets/images/hero-phone.png";
import heroCardTop from "../../assets/images/hero-card-top.png";
import heroCardBottom from "../../assets/images/hero-card-bottom.png";

const Hero: React.FC = () => {
  return (
    <section className="relative py-20">
      {/* ✅ Constrain width just like GreenBanner */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-24">
        
        {/* ✅ Left side text */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-inter leading-tight">
            Tired of{" "}
            <span className="text-brandGreen font-bold">doomscrolling</span>{" "}
            every night?
          </h1>

          <p className="text-lg md:text-xl text-gray-700 opacity-80 max-w-md mx-auto lg:mx-0">
            We help you break the cycle.{" "}
            <span className="text-[#658779]">For good.</span>
          </p>

          {/* ✅ Fixed-width button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://apps.apple.com/us/app/herbie-streaks/id6747325837"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brandGreen text-white w-[220px] py-4 rounded-full font-medium text-center hover:bg-[#7bb49b] transition shadow-md"
            >
              Download For Free
            </a>
          </div>
        </div>

        {/* ✅ Right side — phone + stacked cards */}
        <div className="flex justify-center lg:justify-end relative overflow-hidden mt-12 lg:mt-0">
          <div className="relative flex items-center justify-center">
            {/* Phone mockup */}
            <img
              src={heroPhone}
              alt="Herbie app preview"
              className="relative z-10 w-[240px] md:w-[300px] lg:w-[340px] drop-shadow-xl mx-auto"
            />

            {/* Stacked cards (only visible on large screens) */}
            <div className="hidden xl:flex flex-col gap-6 absolute top-8 left-[110%]">
              <div className="relative bg-[#658779] rounded-[50px] shadow-lg w-[240px] h-[270px] overflow-hidden">
                <img
                  src={heroCardTop}
                  alt="App preview card 1"
                  className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
                />
              </div>
              <div className="relative bg-[#9EC5FA] rounded-[50px] shadow-lg w-[240px] h-[240px] overflow-hidden">
                <img
                  src={heroCardBottom}
                  alt="App preview card 2"
                  className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



