/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Menu from './components/menu';
import MoonSun from './components/MoonSun';

// eslint-disable-next-line no-unused-vars
import HomeSection from './sections/HomeSection';
// eslint-disable-next-line no-unused-vars
import AboutSection from './sections/AboutSection';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showHome, setShowHome] = useState(true);

  const [touchStart, setTouchStart] = useState(0); // State to store the starting touch point

  const homeRef = React.createRef();
  const aboutRef = React.createRef();

  // Set dark mode by default on component mount
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

  // Handle the scrolling effect with button click and mouse scroll
  const handleScroll = () => {
    setShowHome(!showHome);
  };

  // Handle wheel scroll (for mouse scroll)
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setShowHome(false); // Scroll down
    } else {
      setShowHome(true); // Scroll up
    }
  };

  // Handle touch scroll (for mobile swipe gestures)
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY); // Store the initial touch position
  };

  const handleTouchMove = (e) => {
    const touchEnd = e.touches[0].clientY;
    if (touchStart - touchEnd > 50) {
      setShowHome(false); // Scroll down
    } else if (touchEnd - touchStart > 50) {
      setShowHome(true); // Scroll up
    }
  };

  useEffect(() => {
    // Add event listeners for wheel and touch scroll
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    // Clean up the event listeners
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleTouchMove, touchStart]); // Add touchStart as dependency

  return (
    <div className="App min-h-screen bg-lightBg dark:bg-gray-300 text-gray-800 dark:text-white relative overflow-hidden">
      {/* Use Menu component */}
      <Menu handleScroll={handleScroll} />

      {/* Home Section */}
      <div
        ref={homeRef}
        className={`home-section min-h-screen w-full flex items-center justify-center bg-gray-400 dark:bg-gray-500 absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${showHome ? 'top-0' : '-top-full'}`}
      >
        <h1 className="text-3xl text-white">Hello Home</h1>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        className={`about-section min-h-screen w-full flex items-center justify-center bg-gray-400 dark:bg-gray-600 absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${!showHome ? 'top-0' : 'top-full'}`}
      >
        <h1 className="text-3xl text-white">About Me Information</h1>
      </div>

      {/* Use MoonSun component */}
      <MoonSun darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
