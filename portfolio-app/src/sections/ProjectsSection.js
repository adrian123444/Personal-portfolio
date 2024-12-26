// src/sections/ProjectsSection.js
import React, { forwardRef } from 'react';
import Projects from '../components/projects';

const ProjectsSection = ({ isActive }, ref) => {
  const projects = [
    {
      title: 'Mountain View',
      copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains.',
      button: 'View Trips',
      image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'To The Beach',
      copy: 'Plan your next beach trip with these fabulous destinations.',
      button: 'View Trips',
      image: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Desert Destinations',
      copy: 'It\'s the desert you\'ve always dreamed of.',
      button: 'Book Now',
      image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Explore The Galaxy',
      copy: 'Seriously, straight up, just blast off into outer space today.',
      button: 'Book Now',
      image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Mountain View',
      copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains.',
      button: 'View Trips',
      image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Desert Destinations',
      copy: 'It\'s the desert you\'ve always dreamed of.',
      button: 'Book Now',
      image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
  ];

  return (
    <div
      ref={ref}
      className={`p-10 projects-section min-h-screen w-full flex flex-col items-center justify-center bg-gray-500 dark:bg-gray-600 absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.42, 0, 0.58, 1)] ${isActive ? 'left-0' : '-left-[120%]'}`}
    >
      <h1 className="text-3xl text-white mt-16 mb-10">Projects</h1>
      <Projects projects={projects} />
    </div>
  );
};

export default forwardRef(ProjectsSection);
