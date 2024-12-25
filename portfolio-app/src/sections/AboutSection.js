// src/sections/AboutSection.js
import React, { forwardRef } from 'react';

const AboutSection = ({ isActive }, ref) => {
  return (
    <div
      ref={ref}
      className={`about-section min-h-screen w-full flex items-center justify-center bg-gray-500 dark:bg-gray-600 absolute transition-all duration-[900ms] ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${isActive ? 'top-0' : 'top-full'}`}
    >
      <h1 className="text-3xl text-white">About Me Information</h1>
    </div>
  );
};

export default forwardRef(AboutSection);
