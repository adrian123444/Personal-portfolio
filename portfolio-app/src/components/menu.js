/* eslint-disable no-unused-vars */
// src/components/menu.js
import React, { useState } from 'react';
import { FaHome, FaUser, FaBars, FaTimes, FaRProject, FaProjectDiagram, FaUserAlt, FaUserAstronaut } from 'react-icons/fa'; // Import necessary icons

const Menu = ({ handleScroll }) => {
  const [mobileMenu, setMobileMenu] = useState(false); // State for mobile menu

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="relative z-10">
      {/* Hamburger Icon (Visible on small screens) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden block absolute right-10 top-10 z-50 p-3 rounded-full bg-lightBgBrighter dark:bg-gray-800 hover:animate-pulse"
      >
        {mobileMenu ? (
          <FaTimes className="h-6 w-6 text-white" />
        ) : (
          <FaBars className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Menu (Visible on large screens or when mobile menu is open) */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 justify-center space-x-5 bg-lightBgBrighter dark:bg-gray-800 p-3 lg:flex hidden`}
      >
        <button
          onClick={handleScroll}
          className="flex items-center p-3 rounded-full hover:animate-pulse"
        >
          <FaHome className="h-6 w-6 mr-2" />
          Home
        </button>
        <button
          onClick={handleScroll}
          className="flex items-center p-3 rounded-full hover:animate-pulse"
        >
          <FaUserAstronaut className="h-6 w-6 mr-2" />
          About
        </button>
        <button
          onClick={handleScroll}
          className="flex items-center p-3 rounded-full hover:animate-pulse"
        >
          <FaProjectDiagram className="h-6 w-6 mr-2" />
          Projects
        </button>
      </div>

      {/* Mobile Menu (Visible on small screens when `mobileMenu` is true) */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 z-40 flex flex-col items-center justify-center bg-lightBgBrighter dark:bg-gray-800 p-3 transition-all duration-[1200ms] ease-in-out ${
          mobileMenu ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
        }`}
      >
        <button
          onClick={handleScroll}
          className="flex items-center p-3 rounded-full hover:animate-pulse"
        >
          <FaHome className="h-6 w-6 mr-2" />
          Home
        </button>
        <button
          onClick={handleScroll}
          className="flex items-center p-3 rounded-full hover:animate-pulse"
        >
          <FaUserAstronaut className="h-6 w-6 mr-2" />
          About
        </button>
        <button
          onClick={handleScroll}
          className="flex items-center p-3 rounded-full hover:animate-pulse"
        >
          <FaProjectDiagram className="h-6 w-6 mr-2" />
          Projects
        </button>
      </div>
    </div>
  );
};

export default Menu;
