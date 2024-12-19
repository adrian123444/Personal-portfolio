import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaHome, FaUser } from 'react-icons/fa'; // Import sun, moon, home and user icons
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const homeRef = React.createRef();
  const aboutRef = React.createRef();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to the specified section
  const handleScroll = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App min-h-screen bg-lightBg dark:bg-gray-300 text-gray-800 dark:text-white">
      {/* Fixed Menu */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center space-x-5 bg-lightBgBrighter dark:bg-gray-800 p-3">
        <button onClick={() => handleScroll(homeRef)} className="p-3 rounded-full">
          <FaHome className="h-6 w-6" />
        </button>
        <button onClick={() => handleScroll(aboutRef)} className="p-3 rounded-full">
          <FaUser className="h-6 w-6" />
        </button>
      </div>

      {/* Home Section */}
      <div
        ref={homeRef}
        className="home-section min-h-screen w-full flex items-center justify-center bg-gray-400 dark:bg-gray-700"
      >
        <h1 className={`text-3xl ${darkMode ? 'text-white' : 'text-black'}`}>Hello Home</h1>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        className="about-section min-h-screen w-full flex items-center justify-center  bg-gray-400 dark:bg-gray-700"
      >
        <h1 className={`text-3xl ${darkMode ? 'text-white' : 'text-black'}`}>About Me Information</h1>
      </div>

      {/* Dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {darkMode ? (
          <FaSun className="h-6 w-6 text-yellow-400" />
        ) : (
          <FaMoon className="h-6 w-6 text-gray-800" />
        )}
      </button>
    </div>
  );
}

export default App;
