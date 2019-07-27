import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../projects.json';

export default function Projects() {
  return (
    <div className='projects'>
      <h1 className='projects-title'>My Previous Projects</h1>
      <div className='project-box'>
        {projects.map((eachProject, i) => {
          return <ProjectCard key={i} {...eachProject} />;
        })}
      </div>
    </div>
  );
}
