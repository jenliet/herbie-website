import React from "react";
import ProfileCard from "./ProfileCard";
import yixinPhoto from "../../assets/images/yixin.png";

const NeoYiXin: React.FC = () => {
  return (
    <ProfileCard
      name="Neo Yi Xin"
      role="Co-Founder & CEO"
      image={yixinPhoto}
      description={[
        "Prev co-founder at Comet Speech",
        "Investment intern at VC firms in Silicon Valley and Thailand",
        "Intern at Deskimo (YC S21)",
        "Business Administration and Computer Science @NUS",
      ]}
    />
  );
};

export default NeoYiXin;
