import React from 'react';
import RainbowDay from './RainbowDay';
import CanvasBubbles from './CanvasBubbles';
import './projectCard.css';

export default function ProjectCard(props) {
  return (
    <div>
      <a
        className='project-card-link'
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={props.category}>
          <h3 className='project-card-category'>{props.category}</h3>
          <h1 className='project-card-h1'>
            {props.title}
            {props.title === 'Rainbow Day' ? (
              <div className='project-card-image-rainbow'>
                <RainbowDay />
              </div>
            ) : props.title === 'Canvas Bubbles' ? (
              <div className='project-card-image-bubbles'>
                <CanvasBubbles />
              </div>
            ) : (
              <img
                className='project-card-image'
                src={props.image}
                alt={props.alt}
              />
            )}
            <p className='project-card-description'>{props.description}</p>
            <h4 className='project-card-list'>
              Technologies Used: <br />
              <p className='project-cart-technologies'>
                {props.technologyString}
              </p>
            </h4>
          </h1>
        </div>
      </a>
    </div>
  );
}
