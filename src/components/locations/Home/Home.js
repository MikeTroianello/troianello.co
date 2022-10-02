import React, { Component } from "react";
import { Link } from "react-router-dom";
import Greet from "../../Greet/Greet";
import projects from "../../../projects.json";
import ProjectCard from "../../cards/ProjectCard";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Home.css";
import "./HomeMobile.css";
import axios from "axios";

// const About = React.lazy(() => import("../About/About"));
// const Contact = React.lazy(() => import("../Contact/Contact"));

export default class Home extends Component {
  componentDidMount() {
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((fact) =>
        console.log(
          "%cHello! %cdid you know: \n \n" + fact.data.text,
          "color: #1163dd; font-size: 22px; padding-bottom: 10px",
          "color: black:"
        )
      );
  }

  render() {
    return (
      <div className="home-bg">
        <div className="home-top">
          <Greet />
          {/* <h2 className="home-typewriter-setup home-typewriter-animation">
            My name is Mike Troianello
          </h2> */}
          <h2>My name is Mike Troianello</h2>
        </div>
        <div className="home-fade1" />
        <div className="home-projects">
          <h1>MY PROJECTS</h1>
          <h2>(Scroll to see more --&gt;)</h2>

          <div className="home-project-box">
            {projects.map((eachProject, i) => {
              return (
                !eachProject.backPage && (
                  <ProjectCard key={i} {...eachProject} />
                )
              );
            })}
          </div>

          <div className="link home-project-button">
            <Link to="/projects">All My Projects</Link>
          </div>
        </div>
        <div className="home-fade2" />
        <About bg={"about-on-homepage"} />
        <div className="home-fade3" />
        <Contact bg={"contact-on-homepage"} />
      </div>
    );
  }
}
