import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greet from '../../Greet/Greet';
import projects from '../../../projects.json';
import ProjectCard from '../../cards/ProjectCard';
import About from '../About/About';
import Contact from '../Contact/Contact';
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
          <h2>
            My name is Mike Troianello, and I am a Full Stack Web Developer.
          </h2>
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
        <About bg={'about-on-homepage'} />
        <div className='home-fade3' />
        <Contact bg={'contact-on-homepage'} />
      </div>
    );
  }
}
