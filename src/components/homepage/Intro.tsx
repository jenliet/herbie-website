import React from "react";
import icon1 from "../../assets/icons/Icon1.svg";
import icon2 from "../../assets/icons/Icon2.svg";
import icon3 from "../../assets/icons/Icon3.svg";

const Features: React.FC = () => {
  return (
    <section className="text-center py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-inter mb-4">Herbie</h2>
      <p className="text-xl text-brandGray font-poppins">
        Everyone else simply patched the system. We're rebuilding it.
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {[ 
          {
            icon: icon1,
            title: "Psychology-First",
            desc: "We use proven behavioural science to rewire your digital habits at the root.",
          },
          {
            icon: icon2,
            title: "Smart Recommendations",
            desc: "We learn your habits and needs, and suggest personalised tips that truly help.",
          },
          {
            icon: icon3,
            title: "Personalised Blocking",
            desc: "We adapt and evolve with you — adjusting app limits based on your habits.",
          },
        ].map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-brandGreen p-6 rounded-2xl w-32 h-32 flex items-center justify-center">
              <img src={f.icon} alt={f.title} className="w-14 h-14" />
            </div>
            <h3 className="text-2xl mt-6 font-medium">{f.title}</h3>
            <p className="text-brandGray font-poppins mt-2 max-w-[300px]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
