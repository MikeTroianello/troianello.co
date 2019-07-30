import React from 'react';
import jsLogo from '../images/pics/icons/javascript.png';
import reactLogo from '../images/pics/icons/react.png';
import nodeLogo from '../images/pics/icons/node.png';
import mongoLogo from '../images/pics/icons/mongoDB2.png';
import expressLogo from '../images/pics/icons/express2.png';
import jqueryLogo from '../images/pics/icons/jquery.png';
import cssLogo from '../images/pics/icons/css3.png';
import sassLogo from '../images/pics/icons/sass.png';
import sassAltLogo from '../images/pics/icons/sass-alt.png';

export default function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='row'>
        <div className='col-6 about-side-one'>
          <h1 className='about-my-life'>My Professional Life</h1>
          <p>
            In highschool, I was a mascot for for a professional baseball team.
            After working as a teacher, a tasting room manager, and a clerk of
            three different company departments, I found myself continually
            drawn to coding and web development. In 2018, after having the means
            of following this inclination, I moved to Miami, FL to study Full
            Stack Web Development at Ironhack. I am currently a TA for their
            Full Time Web Development course.
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
                    className='icons react'
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
                    alt='mongodb-logo'
                    className='icons mongo'
                  />
                  MongoDB
                </td>
              </tr>
              <tr>
                <td className='express'>
                  <img
                    src={expressLogo}
                    height='42'
                    width='42'
                    alt='css3-logo'
                    className='icons'
                  />
                  Express
                </td>

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
        </div>
        <div className='col-6 about-side-2'>
          <h1 className='about-my-life'>My Personal Life</h1>
          <p>
            I have been playing piano and percussion for over 20 years. I have
            performed with the Band Kansas, and I recorded an album of my own
            songs. Aside from music, my hobbies include exercising, cooking,
            video games, and gardening.
          </p>
          <iframe
            title='Larger-Pieces-of-the-Smaller-Picture'
            className='about-soundcloud-embed'
            width='69%'
            height='65%'
            scrolling='no'
            frameborder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/629500755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          />
        </div>
      </div>
    </div>
  );
}
