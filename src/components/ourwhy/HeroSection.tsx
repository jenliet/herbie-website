import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center px-6 md:px-20 mt-20">
      <h1 className="text-4xl md:text-6xl font-semibold">
        We’re living on <span className="text-blue-500 font-bold">our screens.</span>
      </h1>

      <p className="mt-12 text-2xl md:text-3xl">If you...</p>

      <div className="mt-10 bg-gray-50 rounded-3xl py-4 px-6 inline-block">
        <span className="text-gray-800 text-2xl md:text-3xl">
          spend <span className="font-bold text-green-600">5+ hours a day</span> on your phone,
        </span>
      </div>

      <div className="mt-6 bg-gray-50 rounded-3xl py-4 px-6 inline-block">
        <span className="text-gray-800 text-2xl md:text-3xl">
          and check it <span className="font-bold text-green-600">100 times daily,</span>
        </span>
      </div>

      <p className="mt-10 text-2xl md:text-3xl">
        that’s <span className="text-green-600 font-semibold">1/3 of your life gone.</span>
      </p>

      <p className="mt-8 text-gray-500 text-lg max-w-2xl mx-auto">
        We scroll while eating, walking, even talking to friends. It’s not that we want to waste time —
        it just happens.
      </p>
    </section>
  );
};

export default HeroSection;
