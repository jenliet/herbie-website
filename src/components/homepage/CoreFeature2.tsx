import React from "react";
import analyticsImage from "../../assets/images/analytics-placeholder.png"; // replace with your real image

const UsageAnalytics: React.FC = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-24">
        
        {/* ✅ LEFT: image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={analyticsImage}
            alt="App usage analytics dashboard"
            className="w-[320px] md:w-[500px] lg:w-[650px] rounded-3xl shadow-lg object-contain"
          />
        </div>

        {/* ✅ RIGHT: text */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          {/* Small tag */}
          <span className="bg-brandBlue text-black text-sm font-medium rounded-xl px-4 py-2 w-fit shadow-sm">
            Core Features
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-normal leading-tight text-brandDark">
            Usage Analytics With Insights – See Your Habits{" "}
            <span className="text-brandBlue font-bold">Clearly.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl font-poppins text-brandDark/70 max-w-md">
            Track your usage and let Herbie craft app limits that actually work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UsageAnalytics;
