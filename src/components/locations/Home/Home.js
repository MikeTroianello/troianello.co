import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greet from '../../Greet/Greet';
import projects from '../../../projects.json';
import ProjectCard from '../../cards/ProjectCard';
import './HomeMobile.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home-bg'>
        <div className='home-top'>
          <Greet />
          {/* <h2 className='home-typewriter-setup home-typewriter-animation'>
            My name is Mike Troianello, and I am a Full Stack Web Developer.
          </h2> */}
        </div>
        <div className='home-fade1' />
        <div className='home-projects'>
          <h1>MY PROJECTS</h1>
          <h3>(Scroll to see more -->)</h3>

          <div className='home-project-box'>
            {projects.map((eachProject, i) => {
              return <ProjectCard key={i} {...eachProject} />;
            })}
          </div>

          <div className='link home-project-button'>
            <Link to='/projects'>All My Projects</Link>
          </div>
        </div>
        <div className='home-fade2' />
        <div className='home-about'>
          <h1>ABOUT ME</h1>
          <p>
            I have been a <strong>Teacher</strong>, a <strong>Musician</strong>,
            and now a <strong>Web Developer</strong>
          </p>
          <div className='link'>
            <Link to='/about'>Learn More</Link>
          </div>
          <h1>CONTACT INFO</h1>
          <div className='link'>
            <Link to='/contact'>My Contact Info</Link>
          </div>
        </div>
      </div>
    );
  }
}
