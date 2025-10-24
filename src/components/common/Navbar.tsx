import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"; // ✅ your PNG logo

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-brandGreen/50 px-6 md:px-12 lg:px-20 py-1 font-inter sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ✅ Left - Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Herbie logo"
              className="w-10 md:w-12 lg:w-14 object-contain"
            />
            <span className="text-lg md:text-xl font-medium text-brandDark">
              Herbie
            </span>
          </Link>
        </div>

        {/* ✅ Center - Navigation Links */}
        <ul className="hidden md:flex gap-10 text-brandGreen font-medium text-base md:text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-brandDark transition ${
                  isActive ? "text-brandDark font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/why"
              className={({ isActive }) =>
                `hover:text-brandDark transition ${
                  isActive ? "text-brandDark font-semibold" : ""
                }`
              }
            >
              Our Why
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `hover:text-brandDark transition ${
                  isActive ? "text-brandDark font-semibold" : ""
                }`
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-brandDark transition ${
                  isActive ? "text-brandDark font-semibold" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* ✅ Right - CTA button */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2 rounded-full border border-brandGreen text-brandGreen hover:bg-brandGreen hover:text-white transition font-medium"
        >
          Download Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
