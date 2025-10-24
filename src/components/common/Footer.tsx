import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-brandGreen font-inter px-6 md:px-12 lg:px-20 py-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-brandGreen/50">
    {/* ✅ Left side - Logo + Nav */}
    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 w-full md:w-auto">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Herbie logo"
          className="w-12 md:w-14 lg:w-16 object-contain"
        />
        <span className="text-lg font-medium text-brandDark hidden md:inline-block">
          Herbie
        </span>
      </div>

      <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-brandGreen font-medium text-base md:text-lg">
        <li><Link to="/" className="hover:text-brandDark transition">Home</Link></li>
        <li><Link to="/why" className="hover:text-brandDark transition">Our Why</Link></li>
        <li><Link to="/team" className="hover:text-brandDark transition">Our Team</Link></li>
        <li><Link to="/contact" className="hover:text-brandDark transition">Contact Us</Link></li>
      </ul>
    </div>

    {/* ✅ Right side - Social icons */}
    <div className="flex items-center gap-5">
      <a href="https://instagram.com/herbiestreaks" target="_blank" rel="noopener noreferrer" className="hover:text-brandDark transition">
        <Instagram className="w-6 h-6 md:w-8 md:h-8" />
      </a>
      <a href="https://www.linkedin.com/company/herbiestreaks/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-brandDark transition">
        <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
      </a>
    </div>
  </div>

  {/* ✅ Bottom section */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm md:text-base font-medium text-brandGreen gap-3 text-center pt-6">
    <p>© 2025 Herbie. All rights reserved.</p>
    <p className="cursor-pointer hover:text-brandDark transition">Privacy Policy</p>
  </div>
</footer>

  );
};

export default Footer;

