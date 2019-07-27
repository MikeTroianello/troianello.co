import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='links'>
          <span className='logo'>
            <Link to='/'>Mt</Link>
          </span>
          <div className='individual-link'>
            <Link to='/colors'>Color Scheme</Link>
          </div>
          <div className='individual-link'>
            <Link to='/'>Home</Link>
          </div>
          <div className='individual-link'>
            <Link to='/projects'>Projects</Link>
          </div>
          <div className='individual-link'>
            <Link to='/about'>About</Link>
          </div>
          <div className='individual-link test'>
            <Link to='/contact'>Contact Me</Link>
          </div>
        </div>
      </div>
    );
  }
}
