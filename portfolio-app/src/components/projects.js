import React, { useState, useEffect } from 'react';
import { FaHandPointer } from 'react-icons/fa';

const Projects = ({ projects, navigateToSlide }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardHeight, setCardHeight] = useState('300px');

  useEffect(() => {
    const updateCardHeight = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardHeight('90px'); // Mobile
      } else if (width < 1024) {
        setCardHeight('200px'); // Tablet
      } else {
        setCardHeight('300px'); // Desktop
      }
    };

    updateCardHeight();
    window.addEventListener('resize', updateCardHeight);
      return () => window.removeEventListener('resize', updateCardHeight);
    }, []);

  return (
    <div className="p-4 md:p-6 lg:py-6 lg:px-5 w-full max-w-7xl">

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex items-end p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-[1500ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:items-center"
            style={{ height: cardHeight }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-700 group-hover:opacity-90"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white text-4xl opacity-1 group-hover:opacity-0 transition-opacity duration-700">
              <FaHandPointer />
            </div>
            <div
              className={`relative z-10 flex flex-col items-center text-center ${
                hoveredIndex === index ? 'animate-slideUp' : 'animate-slideDown'
              }`}
            >
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white italic text-sm mb-4">{project.copy}</p>
              <button className="py-2 px-4 bg-white text-white font-semibold text-xs uppercase rounded bg-gray-700 hover:bg-gray-600 hover:animate-pulse">
                {project.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
