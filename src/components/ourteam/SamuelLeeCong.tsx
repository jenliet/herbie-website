import React from "react";
import ProfileCard from "./ProfileCard";
import samuelPhoto from "../../assets/images/samuel.png";

const SamuelLeeCong: React.FC = () => {
  return (
    <ProfileCard
      name="Samuel Lee Cong"
      role="Co-Founder & CTO"
      image={samuelPhoto}
      description={[
        "Prev co-founder at Comet Speech",
        "4+ years of SWE and ML experience",
        "SWE intern at Endeavor AI",
        "Data science intern at Cuberg",
        "Biomedical Engineering and Computer Science @NUS",
      ]}
    />
  );
};

export default SamuelLeeCong;
