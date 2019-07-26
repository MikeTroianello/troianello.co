import React from 'react';
import './projectCard.css';

export default function ProjectCard(props) {
  console.log('+_+_+_+_+_+_+_', props);
  return (
    <div>
      <div className='project-card'>
        <h1>
          <a href={props.url} target='_blank' rel='noopener noreferrer'>
            {props.title}
          </a>
        </h1>
      </div>
    </div>
  );
}
