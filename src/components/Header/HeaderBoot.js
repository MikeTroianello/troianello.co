import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greet from '../components/Greet/Greet.js';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
    <div className="ZZZ">
    <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="navbar-nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/about'>About</Link>></li>
            <li><Link to='/contact'>Contact Me</Link></li>
          </ul>
      </div>
  </div>
		</nav>
  </div>
    );
  }
}
