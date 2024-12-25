// src/sections/HomeSection.js
import React, { forwardRef } from 'react';

const HomeSection = ({ isActive }, ref) => {
  return (
    <div
      ref={ref}
      className={`home-section min-h-screen w-full flex items-center justify-center bg-gray-600 dark:bg-gray-500 absolute transition-all duration-[900ms] ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${isActive ? 'top-0' : '-top-120%'}`}
    >
      <h1 className="text-3xl text-white">Hello Home</h1>
    </div>
  );
};

export default forwardRef(HomeSection);
