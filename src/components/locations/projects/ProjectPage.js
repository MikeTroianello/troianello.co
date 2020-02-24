import React, { Component } from 'react';
import Projects from './Projects';
import ProjectInfo from './ProjectInfo';

import './projectPage.css';

export default class ProjectPage extends Component {
  state = {
    technologies: []
  };

  updateTech = technologies => {
    this.setState({
      technologies
    });
  };

  render() {
    return (
      <div className='pp-project-page'>
        <div className='pp-project-info'>
          <div className='pp-project-info-sub'>
            <ProjectInfo technologies={this.state.technologies} />
          </div>
        </div>
        <div className='pp-project-cards'>
          <Projects passUpTechnologies={this.updateTech} />
        </div>
      </div>
    );
  }
}
