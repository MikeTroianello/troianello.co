import React from 'react';
import './projectCard.css';

export default function ProjectCard(props) {
  let tech = props.technologies;
  console.log(tech);
  return (
    <div className={props.category}>
      <h3>{props.category}</h3>
      <h1>
        <a href={props.url} target='_blank' rel='noopener noreferrer'>
          {props.title}
          <img
            className='project-card-image'
            src={props.image}
            alt={props.alt}
          />
        </a>
        <p className='project-card-description'>{props.description}</p>
        <ul className='project-card-list'>
          Technologies Used: {tech.forEach(technology => {})}
        </ul>
      </h1>
    </div>
  );
}
