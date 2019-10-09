import React from 'react';
import './Contact.css';
import './ContactMobile.css';

export default function Contact(props) {
  return (
    <div className='contact-page' id={props.bg}>
      <h1 className='contact-center'>Contact Me</h1>
      <div className='row'>
        <div className='col-sm-5 contact-side-one'>
          <h2 className='contact-center-one'>My Info:</h2>
          <div className='contact-side-one-box'>
            <h3>
              Phone:
              <br />
              <span className='contact-number'>
                {window.innerWidth > 425 ? (
                  '(509)833-8340'
                ) : (
                  <a href='tel:5098338340'>(509)833-8340</a>
                )}
                {/* <h1>{window.innerWidth}</h1> */}
              </span>
            </h3>
            <h3>
              Email:
              <br />
              <strong>
                <a
                  href='mailto:mike@troianello.co'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  mike@troianello.co
                </a>
                <br />
              </strong>
              GitHub:
              <br />
              <strong>
                <a
                  href='https://github.com/MikeTroianello'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://github.com/MikeTroianello
                </a>
                <br />
              </strong>
            </h3>
            <h3>
              LinkedIn: <br />
              <strong>
                <a
                  href='https://www.linkedin.com/in/miketroianello'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.linkedin.com/in/miketroianello
                </a>
              </strong>
            </h3>
          </div>
        </div>
        <div className='col-sm-2 or'>OR</div>
        <div className='col-sm-5 contact-side-two'>
          <h2 className='contact-center-two'>Message Me Directly:</h2>
          <form
            className='contact-message'
            action='https://formspree.io/mike@troianello.co'
            method='POST'
          >
            <label>
              <input
                type='name'
                name='name'
                className='contact-message-input'
                placeholder='Your Name'
              />
            </label>
            <label>
              <input
                type='email'
                name='email'
                className='contact-message-input'
                placeholder='Email Address'
              />
            </label>
            <label>
              <textarea
                rows='7'
                name='content'
                className='contact-message-input'
                placeholder='Message Content'
              />
            </label>
            <button className='contact-button'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
