import React, { useState } from 'react';
import { FaHandPointer } from 'react-icons/fa'; // Import the hand icon from react-icons/fa

const Projects = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative flex items-end p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-[1500ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:items-center"
          style={{ height: '350px' }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-700 group-hover:opacity-90"></div>

          {/* Centered Hand Icon (Initially visible, fades on hover/touch) */}
          <div
            className="absolute inset-0 flex justify-center items-center text-white text-4xl opacity-100 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-700"
          >
            <FaHandPointer /> {/* React Icon */}
          </div>

          {/* Content */}
          <div
            className={`relative z-10 flex flex-col items-center text-center ${
              hoveredIndex === index ? 'animate-slideUp' : 'animate-slideDown'
            }`}
          >
            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-white italic text-sm mb-4">{project.copy}</p>
            <button className="py-2 px-4 bg-white text-black font-semibold text-xs uppercase rounded hover:bg-gray-300">
              {project.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
