import React, { Component } from 'react';

import RainbowDay from './RainbowDay';
import ProjectInfo from '../locations/projects/ProjectInfo';
import CanvasBubbles from './CanvasBubbles';

import './projectCard.css';
import './projectCardMobile.css';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null
    };
  }

  link = e => {
    e.preventDefault();
    if (window.orientation !== undefined) {
      alert(
        'You appear to be opening this on a mobile phone, this application can only be viewed on a computer'
      );
    } else {
      // window.location.href = this.props.url;
      window.open(this.props.url, '_blank');
    }
  };

  showInfo = () => {
    this.props.passTechnologies(this.props.technologies);
  };
  // {/* onMouseEnter={() => this.showInfo(this.props)} */}

  render() {
    return (
      <div
        className='project-card-link'
        onClick={
          this.props.mobileFriendly
            ? () => window.open(this.props.url, '_blank')
            : e => this.link(e)
        }
      >
        {/* <a
          className='project-card-link'
          href={this.props.url}
          target='_blank'
          rel='noopener noreferrer'
        > */}
        <div>
          <div className={this.props.category}>
            <h3 className='project-card-category'>{this.props.category}</h3>
            <h1 className='project-card-h1'>
              {this.props.title}
              {this.props.title === 'Rainbow Day' ? (
                <div className='project-card-image-rainbow'>
                  <RainbowDay />
                </div>
              ) : this.props.title === 'Canvas Bubbles' ? (
                <div id='canvas' className='project-card-image-bubbles'>
                  <CanvasBubbles width={window.innerWidth} />
                </div>
              ) : (
                <img
                  className='project-card-image'
                  src={this.props.image}
                  alt={this.props.alt}
                />
              )}
              <p className='project-card-description'>
                {this.props.description}
              </p>
              <div className='project-card-list'>
                Technologies Used: <br />
                <p className='project-cart-technologies'>
                  {this.props.technologyString}
                </p>
              </div>
            </h1>
          </div>
          {/* </a> */}
        </div>
      </div>
    );
  }
}
