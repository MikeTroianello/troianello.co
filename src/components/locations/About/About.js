import React from "react";
// import jsLogo from '../images/pics/icons/javascript.png';
import jsLogo from "../../images/pics/icons/javascript.webp";
import reactLogo from "../../images/pics/icons/react.webp";
import nodeLogo from "../../images/pics/icons/node.webp";
import mongoLogo from "../../images/pics/icons/mongoDB2.webp";
import expressLogo from "../../images/pics/icons/express2.webp";
import jqueryLogo from "../../images/pics/icons/jquery.webp";
import cssLogo from "../../images/pics/icons/css3.webp";
import sassLogo from "../../images/pics/icons/sass.webp";
import reduxLogo from "../../images/pics/icons/redux.webp";
import firebaseLogo from "../../images/pics/icons/firebase.webp";

import azureCosmosLogo from "../../images/pics/icons/Azure-Cosmos-Logo.png";
import azureLogo from "../../images/pics/icons/Microsoft_Azure.png";
import swaggerLogo from "../../images/pics/icons/swagger-logo.png";
import reduxSagaLogo from "../../images/pics/icons/Redux-Saga-Logo,webp.png";

import "./About.css";
import "./AboutMobile.css";

export default function About(props) {
  return (
    <div className="about" id={props.bg}>
      <h1>About Me</h1>
      <div className="row">
        <div className="col-sm-6 about-side-one">
          <h1 className="about-my-life">My Professional Life</h1>
          <p>
            I am primarily a React and React Native developer. My goal is to
            make this technology as widely available and understandable as
            possible. I have 2 years experience of teaching aspiring developers,
            and have personally mentored Junior developers in my professional
            life.
          </p>
          <p>My web development skills include:</p>
          {/* ADD:  
          Azure
          Cosmos 
          Redux Saga 
          Swagger */}
          <div id="table-div">
            <div className="about-skills-table">
              <div className="about-skills-individual">
                <img
                  src={jsLogo}
                  height="42"
                  width="42"
                  alt="js-logo"
                  className="javascript-icon"
                />
                <span className="about-skills-name">JavaScript</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={reactLogo}
                  height="42"
                  width="42"
                  alt="react-logo"
                  className="icons react"
                />
                <span className="about-skills-name">React.js</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={reduxLogo}
                  height="42"
                  width="42"
                  alt="redux-logo"
                  className="icons"
                />
                <span className="about-skills-name">Redux</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={nodeLogo}
                  height="42"
                  width="42"
                  alt="node-logo"
                  className="icons"
                />
                <span className="about-skills-name">Node.js</span>
              </div>
              <div className="about-skills-individual mongo-text">
                <img
                  src={mongoLogo}
                  height="42"
                  width="42"
                  alt="mongo-logo"
                  className="icons mongo"
                />
                <span className="about-skills-name">MongoDB</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={expressLogo}
                  height="42"
                  width="42"
                  alt="express-logo"
                  className="icons"
                />
                <span className="about-skills-name">Express</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={jqueryLogo}
                  height="42"
                  width="42"
                  alt="jquery-logo"
                  className="icons"
                />
                <span className="about-skills-name">jQuery</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={firebaseLogo}
                  height="42"
                  width="42"
                  alt="firebase-logo"
                  className="icons"
                />
                <span className="about-skills-name">Firebase</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={cssLogo}
                  height="42"
                  width="42"
                  alt="css-logo"
                  className="icons"
                />
                <span className="about-skills-name">CSS3</span>
              </div>
              <div className="about-skills-individual">
                <img
                  src={sassLogo}
                  height="42"
                  width="42"
                  alt="sass-logo"
                  className="icons"
                />
                <span className="about-skills-name">Sass</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 about-side-2">
          <h1 className="about-my-life">My Personal Life</h1>
          <p>
            I've played piano and percussion for over 20 years. I have performed
            with the Band Kansas, and I recorded an album of my own songs. Aside
            from music, my hobbies include exercising, cooking, video games, and
            gardening.
          </p>
          <iframe
            title="Larger-Pieces-of-the-Smaller-Picture"
            className="about-soundcloud-embed"
            width="66%"
            height="300"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1092855955&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </div>
    </div>
  );
}
