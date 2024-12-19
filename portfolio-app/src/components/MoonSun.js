// src/components/MoonSun.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const MoonSun = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:animate-pulse"
    >
      {darkMode ? (
        <FaSun className="h-6 w-6 text-yellow-400" />
      ) : (
        <FaMoon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};

export default MoonSun;
