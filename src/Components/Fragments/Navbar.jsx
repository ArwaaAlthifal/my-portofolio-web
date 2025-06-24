import React, { useState, useEffect } from "react";
import Button from "../Elements/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full px-4 md:px-8 py-3 flex items-center justify-between fixed top-0 z-50 text-white transition duration-300 ${
        isScrolled ? "bg-[#131313]/90 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-10 object-contain" src="/images/logo.png" alt="Logo" />
        <div className="flex flex-col leading-none font-bold text-lg">
          <span>frontend</span>
          <span>developer</span>
        </div>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Nav Items */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto flex-col md:flex-row items-start md:items-center gap-4 md:gap-4 
        bg-[#131313] md:bg-transparent px-6 py-4 md:p-0 md:flex rounded-b-lg`}
      >
        <li className="hover:text-amber-400 cursor-pointer">Home</li>
        <li className="hover:text-amber-400 cursor-pointer">About</li>
        <li className="hover:text-amber-400 cursor-pointer">Experiences</li>
        <li className="hover:text-amber-400 cursor-pointer">Study</li>
        <li>
          <Button classname="bg-[#8291ff36] hover:bg-[#272727]">
            <a href="/login" target="blank">Sign Up</a>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
