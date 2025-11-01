import React from "react";
import { Instagram, Linkedin } from "lucide-react"; // ✅ import icons

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-brandBlue/50 rounded-[50px] shadow-lg p-10 flex flex-col gap-6">
      <h2 className="text-3xl font-inter font-medium mb-6">
        Contact Information
      </h2>

      {/* ✅ Email */}
      <div>
        <p className="font-inter text-lg font-medium mb-2">Email</p>
        <a
        href="mailto:elise.neo@herbiestreaks.xyz?subject=Hello%20Herbie%20Team"
        className="font-inter text-base text-gray-800 opacity-80 hover:text-brandDark transition underline underline-offset-2"
        >
          elise.neo@herbiestreaks.xyz
        </a>

      </div>

      {/* ✅ Social icons */}
      <div>
        <p className="font-inter text-lg font-medium mt-6 mb-3">Follow Us</p>
        <div className="flex gap-5 text-brandDark">
          <a
            href="https://instagram.com/herbiestreaks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandDark transition"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/herbiestreaks/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandDark transition"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;


