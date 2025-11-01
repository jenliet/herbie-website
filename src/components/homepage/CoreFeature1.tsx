import React from "react";
import appBlocker from "../../assets/images/app-blocker-1.png";

const GreenBanner: React.FC = () => {
  return (
    <section className="relative bg-brandGreen/50 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-24">
        
        {/* ✅ LEFT SIDE — text content */}
        <div className="flex flex-col space-y-6 md:space-y-8 text-brandDark">
          {/* Small tag */}
          <span className="bg-brandBlue text-white text-sm font-medium rounded-xl px-4 py-2 w-fit shadow-sm">
            Core Features
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-inter font-normal leading-tight">
            Flexible App Blocking - Set Smarter Limits{" "}
            <span className="text-brandBlue font-semibold">Your Way.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl font-poppins text-brandDark/70 max-w-md">
            Herbie learns your habits and goals to guide you with suggestions
            that actually work for you.
          </p>
        </div>

        {/* ✅ RIGHT SIDE — image (no double shadow) */}
        <div className="flex justify-center md:justify-end">
          <img
            src={appBlocker}
            alt="Smart Recommendations Preview"
            className="w-[280px] md:w-[400px] lg:w-[600px] rounded-[50px] shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GreenBanner;

