import React from 'react';

class ProjectInfo extends React.Component {
  state = {
    tech: []
  };

  doThing = (tech, i) => {
    let newTech = this.state.tech;
    newTech.push(tech);
    this.setState({ tech: newTech });
  };

  clearIt = () => {
    this.setState({
      tech: []
    });
  };

  // componentDidMount() {
  //   this.props.technologies.map((tech, i) => {
  //     return setTimeout(() => this.doThing(tech), 400);
  //   });
  //   console.log(this.state);
  // }

  componentDidUpdate(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        tech: []
      });
      console.log('SOMETHING', this.props.technologies);
      this.props.technologies.map((tech, i) => {
        return setTimeout(() => this.doThing(tech), 400);
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>ALL TECHNOLOGIES:</h3>
        {this.state.tech.map((tech, i) => {
          return <li key={i}>{tech}</li>;
        })}
      </div>
    );
  }
}

export default ProjectInfo;
