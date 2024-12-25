// src/sections/AboutSection.js
import React, { forwardRef } from 'react';

const AboutSection = ({ isActive }, ref) => {
  return (
    <div
      ref={ref}
      className={`about-section min-h-screen w-full flex items-center justify-center bg-gray-500 dark:bg-gray-600 absolute transition-all duration-[900ms] ease-[cubic-bezier(0.42, 0, 0.58, 1)] ${isActive ? 'right-0' : 'right-[120%]'}`}
    >
      <h1 className="text-3xl text-white">About Me Information</h1>
    </div>
  );
};

export default forwardRef(AboutSection);
