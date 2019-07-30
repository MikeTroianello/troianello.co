import React from 'react';
import './projectCard.css';

export default function ProjectCard(props) {
  return (
      <div className={props.category}>
          <h1>
            <a href={props.url} target='_blank' rel='noopener noreferrer'>
              {props.title}
             <img src={props.image} alt={props.title}/>
            </a>
          </h1>
      </div>
  );
}
