/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Menu from './components/menu';
import MoonSun from './components/MoonSun';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import './App.css';
import { FaEnvelopeOpen, FaInfoCircle, FaMailchimp, FaPhone, FaPhoneAlt, FaVoicemail } from 'react-icons/fa'; // Import the info icon

// Import the scroll logic from scrolling.js
import { useScrollEffect } from './components/scrolling';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentSection, setCurrentSection] = useState(0); // State for current section
  const [infoVisible, setInfoVisible] = useState(false); // State for info box visibility

  const sections = ['home', 'about', 'projects']; // List of sections

  // Use scroll effect from scrolling.js
  const { handleScroll, handleWheel, handleTouchStart, handleTouchMove } = useScrollEffect(
    currentSection,
    setCurrentSection,
    sections
  );

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Add event listener for wheel
  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]); // Add handleWheel to the dependency array

  // Close the info box when clicking outside
  const handleClickOutside = (e) => {
    if (infoVisible && !e.target.closest('.info-box') && !e.target.closest('.info-icon')) {
      setInfoVisible(false);
    }
  };

  useEffect(() => {
    if (infoVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [infoVisible]);

  return (
    <div className="App min-h-screen bg-lightBg dark:bg-gray-700 text-gray-800 dark:text-white relative overflow-hidden">
      {/* Use Menu component */}
      <Menu handleScroll={handleScroll} />

      {/* Sections */}
      <HomeSection isActive={currentSection === 0} />
      <AboutSection isActive={currentSection === 1} />
      <ProjectsSection isActive={currentSection === 2} />

      {/* Info Icon and Sliding Info Box */}
      <div className="fixed bottom-20 right-5 flex items-center">
        {/* Info Icon */}
        <div
          className="info-icon w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center cursor-pointer shadow-lg hover:animate-pulse transition-all"
          onClick={() => setInfoVisible(!infoVisible)}
        >
          <FaInfoCircle size={20} />
        </div>
        {/* Sliding Info Box */}
        <div
          className={`info-box fixed bottom-36 right-0 bg-gray-800 text-white p-2  shadow-lg w-64 transition-transform duration-500 ${
            infoVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-left">
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            {/* Close Button */}
            <button
              className="text-white text-lg font-bold cursor-pointer"
              onClick={() => setInfoVisible(false)}
            >
              ×
            </button>
          </div>
          <p className="text-sm text-left flex items-center">
            <FaPhoneAlt className="mr-2" />
            <a href="tel:+44 0744 820 7501">+44 0744 820 7501</a>
          </p>
          <p className="mt-2 text-sm text-left flex items-center">
            <FaEnvelopeOpen className="mr-2" />
            <a href="mailto:iamandiadrian7@gmail.com">iamandiadrian7@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Use MoonSun component */}
      <MoonSun darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
