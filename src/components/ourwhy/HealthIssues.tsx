import React from "react";
import sleepIcon from "../../assets/icons/sleep.svg";
import anxietyIcon from "../../assets/icons/anxiety.svg";
import isolationIcon from "../../assets/icons/isolation.svg";

const HealthIssues: React.FC = () => {
  const issues = [
    {
      icon: sleepIcon,
      title: "Poor Sleep Health",
      desc: "Blue light and mental stimulation before bed disrupt your natural sleep cycle, leading to chronic fatigue.",
    },
    {
      icon: anxietyIcon,
      title: "Anxiety & Depression",
      desc: "Constant comparison and FOMO from social media significantly increase anxiety and depression rates.",
    },
    {
      icon: isolationIcon,
      title: "Social Isolation",
      desc: 'Paradoxically, heavy phone users feel more isolated despite being "connected" online 24/7.',
    },
  ];

  return (
    <section className="mt-24 text-center px-6 md:px-20">
      {/* ✅ Heading */}
      <h2 className="text-4xl md:text-5xl font-medium">
        This isn’t only about time.
      </h2>
      <p className="text-gray-500 mt-4 text-lg">
        Excessive phone usage can lead to serious health issues.
      </p>

      {/* ✅ Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {issues.map((item, idx) => (
          <div
            key={idx}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            {/* ✅ Icon placement */}
            <div className="bg-brandGreen rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-6">
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* ✅ Title & Description */}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthIssues;

