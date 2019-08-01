import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greet from '../components/context-sensitive/Greet.js';

export default class Header extends Component {
  render() {
    // let headerClass = this.props.showHeader ? 'header' : 'header transition';
    // if(this.props.showHeader == "time"){
    //   this.props.showHeader = <Greet/>
    // }
    /* <div className={headerClass}> */
    return (
      <div className='header'>
        <div className='links'>
          <div className='logo'>
            <Link to='/'>Mt</Link>
          </div>
          <Link to='/' className='logo-2'>
            <h1 className='mt-logo'>Mt</h1>
          </Link>
          <div>{this.props.showHeader}</div>

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
