// src/sections/AboutSection.js
import React from 'react';

const AboutSection = ({ showHome }) => {
  return (
    <div
      className={`about-section min-h-screen w-full flex items-center justify-center bg-gray-400 dark:bg-gray-600 absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${!showHome ? 'top-0' : 'top-full'}`}
    >
      <h1 className="text-3xl text-white">About Me Information</h1>
    </div>
  );
};

export default AboutSection;
