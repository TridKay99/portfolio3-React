import React from 'react';
import '../App.css';

import fb from '../linkPics/fb.png'
import git from '../linkPics/git.png'
import linked from '../linkPics/linked.png'

import {Link} from 'react-router-dom';

function Title() {
  return (
    <div className="firstContainer">
      <div className="titleWords">
        <h1>Tristan Kay</h1>
        <p>Full-stack web developer
          film-editor & student at
          Coder Academy</p>
      </div>
      <div className="links">
        <div className="picLinks">
          <a href="https://www.facebook.com/tris.kay.9">
          <img className="fbLink" src={fb}/>
          </a>
          <a href="https://github.com/TridKay99">
          <img className="gitLink" src={git}/>
          </a>
          <a href="https://www.linkedin.com/in/tristan-kay-61459911a/">
          <img className="linkLink" src={linked}/>
          </a>
        </div>
        <div className="titleLinks">
          <Link to="/skills">
              <p>Skills</p>
          </Link>
          <Link to="/projects">
            <p>projects</p>
          </Link>
          <Link to="/contact">
            <p>Contact Me</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Title;