import React from "react";
import NeoYiXin from "./NeoYiXin";
import SamuelLeeCong from "./SamuelLeeCong";
import Reveal from "../common/Reveal";

const TeamProfiles: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-20 px-6 md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
      <Reveal delay="5ms">
        <NeoYiXin />
      </Reveal>
      <Reveal delay="5ms">
        <SamuelLeeCong />
      </Reveal>
      </div>
    </section>
  );
};

export default TeamProfiles;
