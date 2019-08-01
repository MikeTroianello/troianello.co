import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greet from '../context-sensitive/Greet';

export default class Home extends Component {
  render() {
    // let date = new Date();
    // let hours = date.getHours();
    return (
      <div className='home-bg'>
        <div className='home-top'>
          <Greet hours={this.props.hours} />
          <h2 className='home-typewriter-setup home-typewriter-animation'>
            My name is Mike Troianello, and I am a Full Stack Web Developer.
          </h2>
        </div>
        <div className='home-fade1' />
        <div className='home-projects'>
          <h1>MY PROJECTS</h1>
          <div className='link'>
            <Link to='/projects'>All My Projects</Link>
          </div>
        </div>
        <div className='home-fade2' />
        <div className='home-about'>
          <h1 className='home-album-text'>ABOUT ME</h1>
          <p>
            I have been a <strong>Teacher</strong>, a <strong>Musician</strong>,
            and now a <strong>Web Developer</strong>
          </p>
          <div className='link'>
            <Link to='/about'>Learn More</Link>
          </div>
          <h1 className='home-album-text'>CONTACT INFO</h1>
          <div className='link'>
            <Link to='/contact'>My Contact Info</Link>
          </div>
        </div>
      </div>
    );
  }
}
