import React from 'react';

export default function Contact() {
  return (
    <div className='contact-page'>
      <h1 className='contact-center'>Contact Me</h1>
      <div className='row'>
        <div className='col-5 contact-side-one'>
          <h2 className='contact-center'>My Info:</h2>
          <h3>
            Email:{' '}
            <strong>
              <a
                href='mailto:mike@troianello.co'
                target='_blank'
                rel='noopener noreferrer'
              >
                mike@troianello.co
              </a>
            </strong>
          </h3>
          <h3>Phone: (598)867-5309</h3>
          <h3>
            GitHub:{' '}
            <strong>
              <a 
              href='https://github.com/MikeTroianello' 
              target='_blank' 
              rel='noopener noreferrer'>
                https://github.com/MikeTroianello
              </a>
            </strong>
          </h3>
          <h3>
            LinkedIn:
            <a href='https://www.linkedin.com/in/miketroianello/' 
               target='_blank'
               rel='noopener noreferrer'>
              https://www.linkedin.com/in/miketroianello/
            </a>
          </h3>
        </div>
        <div className='col-2 or'>OR</div>
        <div className='col-5 contact-side-two'>
          <h2 className='contact-center'>Message Me Directly:</h2>
          <form className="contact-message">
            <label>
              <input type='name' name='name' className="contact-message-input" placeholder="Your Name" />
            </label>
            <label>
              <input type='email' name='email' className="contact-message-input" placeholder="Email Address"></input>
            </label>
            <label>
              <textarea rows="4" name='content' className="contact-message-input" placeholder="Message Content"></textarea>
            </label>
            <button className="contact-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
