/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Menu from './components/menu';
import MoonSun from './components/MoonSun';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [touchStart, setTouchStart] = useState(0); // Define touchStart state

  const homeRef = React.createRef();
  const aboutRef = React.createRef();
  const projectsRef = React.createRef();

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

  const handleScroll = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    // Handle wheel scroll (for mouse scroll)
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        if (activeSection === 'home') setActiveSection('about');
        if (activeSection === 'about') setActiveSection('projects');
      } else {
        if (activeSection === 'projects') setActiveSection('about');
        if (activeSection === 'about') setActiveSection('home');
      }
    };

    // Handle touch scroll (for mobile swipe gestures)
    const handleTouchStart = (e) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      const touchEnd = e.touches[0].clientY;
      if (touchStart - touchEnd > 50) {
        if (activeSection === 'home') setActiveSection('about');
        if (activeSection === 'about') setActiveSection('projects');
      } else if (touchEnd - touchStart > 50) {
        if (activeSection === 'projects') setActiveSection('about');
        if (activeSection === 'about') setActiveSection('home');
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeSection, touchStart]);

  return (
    <div className="App min-h-screen bg-lightBg dark:bg-gray-300 text-gray-800 dark:text-white relative overflow-hidden">
      <Menu handleScroll={handleScroll} />

      <HomeSection ref={homeRef} isActive={activeSection === 'home'} />
      <AboutSection ref={aboutRef} isActive={activeSection === 'about'} />
      <ProjectsSection ref={projectsRef} isActive={activeSection === 'projects'} />

      <MoonSun darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
