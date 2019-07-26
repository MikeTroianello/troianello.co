import React from 'react';
import jsLogo from '../images/pics/icons/javascript.png';
import reactLogo from '../images/pics/icons/react.png';
import nodeLogo from '../images/pics/icons/node.png';
import mongoLogo from '../images/pics/icons/mongoDB.png';
import jqueryLogo from '../images/pics/icons/jquery.png';
import cssLogo from '../images/pics/icons/css3.png';
import sassLogo from '../images/pics/icons/sass.png';
import sassAltLogo from '../images/pics/icons/sass-alt.png';

export default function About() {
  return (
    <div className='about'>
      <h1>My name is Mike Troianello</h1>
      <div className='row'>
        <div className='col-6 about-side-one'>
          <h1 className='about-my-life'>My Professional Life</h1>
          <p>
            I have been a mascot for for a professional baseball team, I have
            performed with the Band Kansas, and I recorded an album of my own
            songs. After working as a teacher,a bartender, and a clerk of three
            different company departments, I found myself continually drawn to
            coding and web development. In 2018, after having the means of
            following this inclination, I moved to Miami, FL to study Full Stack
            Web Development at Ironhack.
          </p>
          <p>My web development skills include:</p>
          <div id='table-div'>
            <table>
              <tr>
                <td>
                  <img
                    src={jsLogo}
                    height='42'
                    width='42'
                    alt='js-logo'
                    className='icons'
                  />
                  JavaScript
                </td>
                <td>
                  <img
                    src={reactLogo}
                    height='42'
                    width='42'
                    alt='react-logo'
                    className='icons'
                  />
                  React.js
                </td>
                <td>
                  <img
                    src={nodeLogo}
                    height='42'
                    width='42'
                    alt='node-logo'
                    className='icons'
                  />
                  Node.js
                </td>
                <td>
                  <img
                    src={mongoLogo}
                    height='42'
                    width='42'
                    alt='mongodb-logo'
                    className='icons'
                  />
                  MongoDB
                </td>
              </tr>
              <tr>
                <td>Express</td>
                {/* <img className='icons' src='' alt='express-logo' /> */}
                <td>
                  <img
                    src={jqueryLogo}
                    alt='jquery-logo'
                    height='42'
                    width='42'
                    className='icons'
                  />
                  jQuery
                </td>
                <td>
                  <img
                    src={cssLogo}
                    height='42'
                    width='42'
                    alt='css3-logo'
                    className='icons'
                  />
                  CSS3
                </td>
                <td>
                  <img
                    src={sassLogo}
                    height='42'
                    width='42'
                    alt='sass-logo'
                    className='icons'
                  />
                  SCSS
                </td>
              </tr>
            </table>
          </div>
          {/* <img src='/Users/miketroianello/Desktop/Personal-Projects/troianello.co/src/pics/thumbnail.jpg' alt='Larger Pieces of the Smaller Picture' /> */}
        </div>
        <div className='col-6 about-side-2'>
          <h1 className='about-my-life'>My Professional Life</h1>
        </div>
      </div>
    </div>
  );
}
