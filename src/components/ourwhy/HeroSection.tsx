import React from "react";

const OurWhyHero: React.FC = () => {
  return (
    <section className="text-center py-28 px-6 md:px-20">
      {/* heading */}
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-20">
        We’re living on <span className="text-brandBlue">our screens.</span>
      </h1>

      {/* intro line */}
      <p className="text-lg md:text-xl text-gray-600 mb-24">If you...</p>

      {/* first statement */}
      <p className="inline-block bg-gray-100 rounded-full px-6 py-3 text-xl md:text-2xl mb-20">
        spend <span className="text-brandGreen font-semibold">5+ hours a day</span> on your phone,
      </p>

      {/* second statement */}
      <p className="block bg-gray-100 rounded-full px-6 py-3 text-xl md:text-2xl mb-28 mx-auto w-fit">
        and check it{" "}
        <span className="text-brandGreen font-semibold">100 times daily,</span>
      </p>

      {/* punchline */}
      <p className="text-2xl md:text-3xl font-semibold mb-16">
        that’s <span className="text-brandGreen">1/3 of your life gone.</span>
      </p>

      {/* subtext */}
      <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        We scroll while eating, walking, even talking to friends. It’s not that we want to waste time — it just happens.
      </p>
    </section>
  );
};

export default OurWhyHero;


