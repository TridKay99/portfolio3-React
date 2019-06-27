import React from 'react';
import '../App.css';
import resume from '../projectImg/TristanKayResume.png'
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div className="firstContainer">
      <div className="secondContainer">
        <div className="skillsTitle">
          <div className="contactTitleContainer">
            <h1>Contact</h1><h1 id="me">Me</h1>
          </div>
        </div>
        <div className="skillsLinks">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/skills">
            <p>Skills</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="contactContainer">
          <h1>Tristan Kay</h1>
          <p>tridkay90@gmail.com</p>
          <a href={resume} download >Download Resume</a> 
        </div>
      </div>
    </div>
  );
}

export default Contact;