/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Menu from './components/menu';
import MoonSun from './components/MoonSun';
import HomeSection from './sections/HomeSection'; // Correct import
import AboutSection from './sections/AboutSection'; // Correct import
import ProjectsSection from './sections/ProjectsSection'; // Correct import
import './App.css';

// Import the scroll logic from scrolling.js
import { useScrollEffect } from './components/scrolling';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentSection, setCurrentSection] = useState(0); // State for current section

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

  return (
    <div className="App min-h-screen bg-lightBg dark:bg-gray-700 text-gray-800 dark:text-white relative overflow-hidden">
      {/* Use Menu component */}
      <Menu handleScroll={handleScroll} />

      {/* Sections */}
      <HomeSection isActive={currentSection === 0} />
      <AboutSection isActive={currentSection === 1} />
      <ProjectsSection isActive={currentSection === 2} />

      {/* Use MoonSun component */}
      <MoonSun darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
