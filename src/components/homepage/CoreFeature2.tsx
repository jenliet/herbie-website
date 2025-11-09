import React from "react";
import analyticsImage from "../../assets/images/analytics-placeholder.png";
import Reveal from "../common/Reveal"; // ✅ import your animation wrapper

const UsageAnalytics: React.FC = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-24">

        {/* ✅ IMAGE FIRST on mobile, SECOND on desktop */}
        <Reveal delay="0ms">
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={analyticsImage}
              alt="Usage Analytics Preview"
              className="w-[280px] md:w-[400px] lg:w-[600px] rounded-[50px] shadow-lg object-cover"
            />
          </div>
        </Reveal>

        {/* ✅ TEXT SECOND on mobile, FIRST on desktop */}
        <Reveal delay="150ms">
          <div className="order-2 md:order-1 flex flex-col space-y-6 md:space-y-8 text-brandDark">
            {/* Small tag */}
            <span className="bg-brandBlue text-white text-sm font-medium rounded-xl px-4 py-2 w-fit shadow-sm">
              Core Features
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-inter font-normal leading-tight">
              Usage Analytics With Insights: See Your Habits{" "}
              <span className="text-brandBlue font-bold">Clearly.</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl font-poppins text-brandDark/70 max-w-md">
              Track your usage and let Herbie craft app limits that actually work.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default UsageAnalytics;

