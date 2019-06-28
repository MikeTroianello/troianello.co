import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='links'>
          <span className='logo'>Mt</span>
          <div className='individual-link'>
            <Link to='/'>HOME</Link>
          </div>
          <div className='individual-link'>
            <Link to='/about'>ABOUT</Link>
          </div>
          <div className='individual-link'>
            <Link to='/projects'>PROJECTS</Link>
          </div>
          <div className='individual-link'>
            <Link to='/colors'>COLOR SCHEME</Link>
          </div>
          <div className='individual-link'>
            <Link to='/contact'>CONTACT ME</Link>
          </div>
        </div>
      </div>
    );
  }
}
