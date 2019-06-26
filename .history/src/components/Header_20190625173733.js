import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h3 className='logo'>Mt</h3>
        {/* <Router> */}
        <div>
          <Link to='/'>HOME</Link>
        </div>
        <div>
          <Link to='/colors'>COLOR SCHEME</Link>
        </div>
        <div>
          <Link to='/about'>ABOUT</Link>
        </div>
        <div>
          <Link to='/projects'>PROJECTS</Link>
        </div>
        {/* </Router> */}
      </div>
    );
  }
}
