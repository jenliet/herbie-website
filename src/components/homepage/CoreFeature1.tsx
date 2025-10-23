import React from "react";
import appBlocker from "../../assets/images/app-blocker-1.png";

const GreenBanner: React.FC = () => {
  return (
    <section className="bg-brandGreen/40 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <span className="text-sm bg-brandBlue/80 px-3 py-1 rounded-lg text-black font-medium">
            Core Features
          </span>
          <h2 className="text-5xl font-inter mt-6 leading-tight">
            Flexible App Blocking - Set Smarter Limits{" "}
            <span className="text-brandBlue font-semibold">Your Way.</span>
          </h2>
          <p className="text-xl font-poppins mt-4 opacity-80">
            Herbie allows you to customise when and how your apps stay off.
          </p>
        </div>
        <img
          src={appBlocker}
          alt="App Blocker Screenshot"
          className="rounded-3xl shadow-lg w-full max-w-[500px] mx-auto"
        />
      </div>
    </section>
  );
};

export default GreenBanner;
