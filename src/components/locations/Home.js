import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='home-bg'>
        <div className='home-top'>
          <h1>HELLO</h1>
        </div>
        <div className='home-about'>
          <h1>ABOUT ME</h1>
          <div className='link'>
            <Link to='/about'>Learn More</Link>
          </div>
        </div>
        <div className='home-projects'>
          <h1>MY PROJECTS</h1>
          <div className='link'>
            <Link to='/projects'>See All</Link>
          </div>
        </div>
        <div className='home-contact'>
          <h1>CONTACT INFO</h1>
          <div className='link'>
            <Link to='/contact'>Info</Link>
          </div>
        </div>
      </div>
    );
  }
}
