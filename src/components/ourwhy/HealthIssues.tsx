import React from "react";
import Reveal from "../common/Reveal"; // ✅ your animation wrapper
import sleepIcon from "../../assets/icons/sleep.svg";
import anxietyIcon from "../../assets/icons/anxiety.svg";
import isolationIcon from "../../assets/icons/isolation.svg";

const HealthIssues: React.FC = () => {
  const issues = [
    {
      icon: sleepIcon,
      title: "Poor Sleep Health",
      desc: "Blue light and mental stimulation before bed disrupt your natural sleep cycle, leading to chronic fatigue.",
      delay: "0ms",
    },
    {
      icon: anxietyIcon,
      title: "Anxiety & Depression",
      desc: "Constant comparison and FOMO from social media significantly increase anxiety and depression rates.",
      delay: "150ms",
    },
    {
      icon: isolationIcon,
      title: "Social Isolation",
      desc: 'Paradoxically, heavy phone users feel more isolated despite being "connected" online 24/7.',
      delay: "300ms",
    },
  ];

  return (
    <section className="mt-24 pb-16 text-center px-6 md:px-20 overflow-hidden">
      {/* Heading */}
      <Reveal delay="10ms">
        <h2 className="text-4xl md:text-5xl font-medium">
          This isn’t only about time.
        </h2>
      </Reveal>

      {/* Subheading */}
      <Reveal delay="75ms">
        <p className="text-gray-500 mt-4 text-lg">
          Excessive phone usage can lead to serious health issues.
        </p>
      </Reveal>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {issues.map((item, idx) => (
          <Reveal key={item.title} delay={item.delay}>
            <div className="relative p-8 bg-white rounded-2xl shadow-md transition-shadow flex flex-col items-center text-center">
              {/* Icon */}
              <div className="bg-brandGreen rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-6">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default HealthIssues;


