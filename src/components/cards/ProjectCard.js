import React, { Component } from 'react';
import RainbowDay from './RainbowDay';
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

  // componentDidMount() {
  //   let rect = document.getElementById('canvas');
  //   let r = rect.getBoundingClientRect();
  //   // console.log(r);
  //   // console.log(r.x, r.y);
  //   this.setState({ x: r.x, y: r.y });
  // }

  render() {
    return (
      <div>
        <a
          className='project-card-link'
          href={this.props.url}
          target='_blank'
          rel='noopener noreferrer'
        >
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
              <h4 className='project-card-list'>
                Technologies Used: <br />
                <p className='project-cart-technologies'>
                  {this.props.technologyString}
                </p>
              </h4>
            </h1>
          </div>
        </a>
        {console.log(this.state)}
      </div>
    );
  }
}
