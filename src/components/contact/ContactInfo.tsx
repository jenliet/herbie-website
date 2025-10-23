import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-brandBlue/50 rounded-[50px] shadow-lg p-10 flex flex-col gap-6">
      <h2 className="text-3xl font-inter font-medium mb-6">
        Contact Information
      </h2>

      <div>
        <p className="font-inter text-lg font-medium mb-2">Email</p>
        <p className="font-inter text-base text-gray-800 opacity-80">
          elise.neo@herbiestreaks.xyz
        </p>
      </div>

      <div>
        <p className="font-inter text-lg font-medium mt-6 mb-3">Follow Us</p>
        <div className="flex gap-4">
          <img
            src="https://placehold.co/50x50"
            alt="Instagram"
            className="w-10 h-10"
          />
          <img
            src="https://placehold.co/50x50"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

