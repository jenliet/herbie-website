import React from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  description: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image, description }) => {
  return (
    <div className="flex flex-col items-center text-center rounded-3xl">
      <div className="w-full max-w-sm">
        <img
          src={image}
          alt={name}
          className="w-full rounded-[2rem] shadow-md object-cover"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-lg mb-4">{role}</p>
      </div>

      <ul className="bg-white/70 shadow-md rounded-3xl p-6 md:p-8 text-left max-w-md">
        {description.map((line, idx) => (
          <li key={idx} className="text-base md:text-lg text-gray-800 list-disc list-inside">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
