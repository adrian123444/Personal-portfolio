// src/sections/ProjectsSection.js
import React, { forwardRef } from 'react';

const ProjectsSection = ({ isActive }, ref) => {
  return (
    <div
      ref={ref}
      className={`projects-section min-h-screen w-full flex items-center justify-center bg-gray-500 dark:bg-gray-600 absolute transition-all duration-[500ms] ease-[cubic-bezier(0.42, 0, 0.58, 1)] ${isActive ? 'left-0' : 'left-[120%]'}`}
    >
      <h1 className="text-3xl text-white">Projects Information</h1>
    </div>
  );
};

export default forwardRef(ProjectsSection);
