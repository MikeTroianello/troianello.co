import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../projects.json';

export default function Projects() {
  // var mouse = {
  //   x: undefined,
  //   y: undefined
  // };

  // window.addEventListener('mousemove', function(event) {
  //   mouse.x = event.x;
  //   mouse.y = event.y;
  //   console.log(mouse.x, mouse.y);
  // });

  return (
    <div className='row'>
      {/* <div className="col-2 projects-technologies">
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
    </div> */}
      <div className='projects'>
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
