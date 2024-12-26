// src/sections/ProjectsSection.js
import React, { forwardRef } from 'react';
import Projects from '../components/projects';

const ProjectsSection = ({ isActive }, ref) => {
  const projects = [
    {
      title: 'Project Title',
      copy: 'Some short description of the project for our viewers',
      button: 'To the Project',
      image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Project Title',
      copy: 'Some short description of the project for our viewers',
      button: 'To the Project',
      image: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Project Title',
      copy: 'Some short description of the project for our viewers',
      button: 'To the Project',
      image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Project Title',
      copy: 'Some short description of the project for our viewers',
      button: 'To the Project',
      image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Project Title',
      copy: 'Some short description of the project for our viewers',
      button: 'To the Project',
      image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      title: 'Project Title',
      copy: 'Some short description of the project for our viewers',
      button: 'To the Project',
      image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    }
  ];

  return (
    <div
      ref={ref}
      className={`projects-section min-h-screen w-full flex flex-col items-center justify-center bg-gray-500 dark:bg-gray-600 absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.42, 0, 0.58, 1)] ${isActive ? 'left-0' : '-left-[120%]'}`}
    >
      <h1 className="text-3xl text-white mt-16 mb-10">Projects</h1>
      <Projects projects={projects} />
    </div>
  );
};

export default forwardRef(ProjectsSection);
