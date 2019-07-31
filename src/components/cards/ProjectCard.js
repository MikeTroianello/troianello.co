import React from 'react';
import './projectCard.css';

export default function ProjectCard(props) {
  let tech = props.technologies;
  console.log(tech);
  return (
    <div className={props.category}>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <h3>{props.category}</h3>
        <h1>
          {props.title}
          <img
            className='project-card-image'
            src={props.image}
            alt={props.alt}
          />
          <p className='project-card-description'>{props.description}</p>
          <ul className='project-card-list'>
            Technologies Used: {tech.forEach(technology => {})}
          </ul>
        </h1>
      </a>
    </div>
  );
}
