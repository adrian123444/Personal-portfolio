// src/sections/HomeSection.js
import React from 'react';

const HomeSection = ({ showHome }) => {
  return (
    <div
      className={`home-section min-h-screen w-full flex items-center justify-center bg-gray-400 dark:bg-gray-500 absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${showHome ? 'top-0' : '-top-full'}`}
    >
      <h1 className="text-3xl text-white">Hello Home</h1>
    </div>
  );
};

export default HomeSection;
