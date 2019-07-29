import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../projects.json';

export default function Projects() {
  return (
    <div className="row">
    <div className="col-2 projects-technologies">
      <h2>Technologies Used:</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>jQuery</li>
        <li>CSS</li>
      </ul>
    </div>
    <div className=' col-10 projects'>
      <h1 className='projects-title'>My Project Portfolio</h1>
      <div className='project-box'>
        {projects.map((eachProject, i) => {
          return <ProjectCard key={i} {...eachProject} />;
        })}
      </div>
    </div>
  </div>
  );
}
