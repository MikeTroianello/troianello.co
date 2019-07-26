import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../projects.json';

export default function Projects() {
  return (
    <div className='projects'>
      <h1>My Previous Projects</h1>
      {projects.map((eachProject, i) => {
        return <ProjectCard key={i} {...eachProject} />;
      })}
    </div>
  );
}
