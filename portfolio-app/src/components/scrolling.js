import { useState } from 'react';

export const useScrollEffect = (currentSection, setCurrentSection, sections) => {
  const [touchStart, setTouchStart] = useState(0); // State to store the starting touch point

  // Handle the scrolling effect with button click
  const handleScroll = (section) => {
    const sectionIndex = sections.indexOf(section);
    if (sectionIndex !== -1) {
      setCurrentSection(sectionIndex); // Move to the selected section
    }
  };

  // Handle wheel scroll (for mouse scroll)
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1); // Scroll down to the next section
      }
    } else {
      if (currentSection > 0) {
        setCurrentSection(currentSection - 1); // Scroll up to the previous section
      }
    }
  };

  // Handle touch scroll (for mobile swipe gestures)
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY); // Store the initial touch position
  };

  const handleTouchMove = (e) => {
    const touchEnd = e.touches[0].clientY;
    if (touchStart - touchEnd > 50 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1); // Scroll down to the next section
    } else if (touchEnd - touchStart > 50 && currentSection > 0) {
      setCurrentSection(currentSection - 1); // Scroll up to the previous section
    }
  };

  return {
    handleScroll,
    handleWheel,
    handleTouchStart,
    handleTouchMove,
  };
};
