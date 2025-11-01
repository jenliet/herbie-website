import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.png"; // ✅ ensure this path is correct

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ Handle smooth height animation on open/close
  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (dropdown) {
      if (isOpen) {
        const scrollHeight = dropdown.scrollHeight;
        dropdown.style.height = `${scrollHeight}px`;
        dropdown.style.opacity = "1";
      } else {
        dropdown.style.height = "0px";
        dropdown.style.opacity = "0";
      }
    }
  }, [isOpen]);

  return (
    <nav className="w-full bg-white border-b border-brandGreen/50 px-6 md:px-12 lg:px-20 py-1 font-inter sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ✅ Left - Logo + Hamburger */}
        <div className="flex items-center gap-3">
          {/* Hamburger only on mobile */}
          <button
            className="md:hidden text-brandGreen"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Logo + text */}
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

        {/* ✅ Center - Nav links (desktop only) */}
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
              to="/our-why"
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
              to="/our-team"
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

        {/* ✅ Right - CTA (desktop only) */}
<a
  href="https://apps.apple.com/us/app/herbie-streaks/id6747325837"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block px-6 py-2 rounded-full border border-brandGreen text-brandGreen hover:bg-brandGreen hover:text-white transition font-medium"
>
  Download Now
</a>
</div>

      {/* ✅ Mobile dropdown (smooth + scrollable) */}
      <div
        ref={dropdownRef}
        className="md:hidden bg-white border-t border-brandGreen/20 overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: "0px",
          opacity: 0,
        }}
      >
        <div className="flex flex-col gap-4 py-4 px-6 text-brandGreen font-medium text-base overflow-y-auto max-h-[60vh]">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-brandDark transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/our-why"
            onClick={() => setIsOpen(false)}
            className="hover:text-brandDark transition"
          >
            Our Why
          </NavLink>
          <NavLink
            to="/our-team"
            onClick={() => setIsOpen(false)}
            className="hover:text-brandDark transition"
          >
            Our Team
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-brandDark transition"
          >
            Contact Us
          </NavLink>
<a
  href="https://apps.apple.com/us/app/herbie-streaks/id6747325837"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block px-6 py-2 rounded-full border border-brandGreen text-brandGreen hover:bg-brandGreen hover:text-white transition font-medium"
>
  Download Now
</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;


