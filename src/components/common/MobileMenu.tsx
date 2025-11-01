import React from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start gap-6 p-8 text-lg text-brandGreen font-medium">
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/our-why" onClick={() => setIsOpen(false)}>Our Why</Link>
        <Link to="/our-team" onClick={() => setIsOpen(false)}>Our Team</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <a href="#download" className="mt-4 bg-brandGreen text-white px-6 py-2 rounded-full">
          Download Now
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
